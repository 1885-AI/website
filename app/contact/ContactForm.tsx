"use client";

import { useActionState } from "react";
import { submitContact } from "./actions";
import { initialState, type FormState } from "./form-state";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    submitContact,
    initialState
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-zinc-200 bg-zinc-50 p-6"
      >
        <p className="text-black font-semibold">Thanks. Your message is in.</p>
        <p className="mt-2 text-zinc-700">
          We&apos;ll reply from hello@1885.ai within one business day.
        </p>
      </div>
    );
  }

  const v = state.values ?? {};
  const fe = state.fieldErrors ?? {};

  return (
    <form action={formAction} noValidate className="space-y-5">
      {state.status === "error" && state.message && (
        <div
          role="alert"
          aria-live="polite"
          className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {state.message}
        </div>
      )}

      <Field label="Name" error={fe.name}>
        <input
          type="text"
          name="name"
          autoComplete="name"
          required
          defaultValue={v.name}
          className="input"
        />
      </Field>

      <Field label="Work email" error={fe.email}>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          defaultValue={v.email}
          className="input"
        />
      </Field>

      <Field label="Company" error={fe.company}>
        <input
          type="text"
          name="company"
          autoComplete="organization"
          required
          defaultValue={v.company}
          className="input"
        />
      </Field>

      <Field label="Role" error={fe.role}>
        <input
          type="text"
          name="role"
          autoComplete="organization-title"
          required
          placeholder="Dealer Principal, GM, Sales Manager, OEM reviewer, etc."
          defaultValue={v.role}
          className="input"
        />
      </Field>

      <Field label="Message" error={fe.message}>
        <textarea
          name="message"
          required
          rows={6}
          defaultValue={v.message}
          className="input resize-y"
        />
      </Field>

      {/* Honeypot — hidden off-screen, not display:none (some bots skip that). */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label>
          Do not fill this field
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="px-6 py-3 bg-black text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Sending…" : "Send message"}
      </button>

      <style>{`
        .input {
          display: block;
          width: 100%;
          padding: 0.625rem 0.75rem;
          border: 1px solid #d4d4d8;
          border-radius: 0.5rem;
          background: #ffffff;
          color: #000;
          font-size: 0.95rem;
          outline: none;
        }
        .input:focus {
          border-color: #000;
          box-shadow: 0 0 0 3px rgba(0,0,0,0.08);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-black mb-2">{label}</span>
      {children}
      {error && (
        <span role="alert" className="block mt-1.5 text-sm text-red-700">
          {error}
        </span>
      )}
    </label>
  );
}
