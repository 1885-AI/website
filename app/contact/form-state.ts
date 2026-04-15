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
