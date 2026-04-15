"use server";

import { Resend } from "resend";
import { z } from "zod";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<
    Record<"name" | "email" | "company" | "role" | "message", string>
  >;
  values?: {
    name?: string;
    email?: string;
    company?: string;
    role?: string;
    message?: string;
  };
};

export const initialState: FormState = { status: "idle" };

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address.")
    .max(200),
  company: z.string().trim().min(1, "Please enter your company name.").max(120),
  role: z.string().trim().min(1, "Please enter your role.").max(80),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters.")
    .max(4000, "Message is too long."),
  website: z.string().max(0).optional(),
});

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    role: String(formData.get("role") ?? ""),
    message: String(formData.get("message") ?? ""),
    website: String(formData.get("website") ?? ""),
  };

  // Honeypot: if a bot filled the hidden field, pretend success without sending.
  if (raw.website.length > 0) {
    return { status: "success" };
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const flat = parsed.error.flatten();
    const fieldErrors: FormState["fieldErrors"] = {};
    for (const key of ["name", "email", "company", "role", "message"] as const) {
      const messages = flat.fieldErrors[key];
      if (messages && messages.length > 0) fieldErrors[key] = messages[0];
    }
    return {
      status: "error",
      message: "Please fix the errors below.",
      fieldErrors,
      values: {
        name: raw.name,
        email: raw.email,
        company: raw.company,
        role: raw.role,
        message: raw.message,
      },
    };
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Contact form misconfigured: missing env vars");
    return genericError(data);
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `1885.ai Contact <${from}>`,
      to: [to],
      replyTo: data.email,
      subject: `[1885.ai] New contact from ${data.name} (${data.company})`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Company: ${data.company}`,
        `Role: ${data.role}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend send error:", error);
      return genericError(data);
    }

    return { status: "success" };
  } catch (err) {
    console.error("Resend threw:", err);
    return genericError(data);
  }
}

function genericError(data: z.infer<typeof schema>): FormState {
  return {
    status: "error",
    message:
      "Something went wrong sending your message. Email hello@1885.ai directly and we'll pick it up from there.",
    values: {
      name: data.name,
      email: data.email,
      company: data.company,
      role: data.role,
      message: data.message,
    },
  };
}
