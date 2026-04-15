import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact 1885.ai. Questions, demo requests, and OEM vendor-review inquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black">
        Contact 1885.ai
      </h1>
      <p className="mt-6 text-lg text-zinc-700">
        Questions, demo requests, and OEM vendor-review inquiries all land in
        the same inbox. We reply within one business day.
      </p>

      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div className="rounded-xl border border-zinc-200 p-5">
          <div className="text-black font-semibold">Email</div>
          <a
            href="mailto:hello@1885.ai"
            className="mt-1 block text-zinc-700 hover:text-black transition"
          >
            hello@1885.ai
          </a>
        </div>
        <div className="rounded-xl border border-zinc-200 p-5">
          <div className="text-black font-semibold">Mailing address</div>
          <address className="mt-1 not-italic text-zinc-700">
            2575 N. Orange Blossom Trail
            <br />
            Kissimmee, FL 34744
          </address>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">Send a message</h2>
        <div className="mt-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
