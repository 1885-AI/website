import type { Metadata } from "next";
import Link from "next/link";

const APP_PATH = "/oauth/hermes-personal-gmail";

export const metadata: Metadata = {
  title: "Hermes Personal Gmail Privacy Policy",
  description:
    "Privacy policy for the private Hermes Personal Gmail OAuth integration.",
};

export default function HermesPersonalGmailPrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
        Effective August 29, 2026
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-8 text-lg leading-8 text-zinc-700">
        This policy describes how Hermes Personal Gmail, a private single-user
        OAuth integration operated by Jason Ennis through 1885.ai, accesses,
        uses, stores, and shares Google user data.
      </p>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-black">Google data accessed</h2>
        <p className="mt-4 leading-7 text-zinc-700">
          With the account owner&apos;s authorization, the integration may access
          Gmail messages and attachments, message metadata, threads, labels,
          drafts, and mailbox state. It may create or modify drafts and messages,
          send approved messages, apply or remove labels, change read status,
          archive messages, and move messages to Trash.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">How data is used</h2>
        <p className="mt-4 leading-7 text-zinc-700">
          Google user data is used only to perform tasks requested by the account
          owner, such as finding an order, summarizing a thread, preparing a
          reply, sending an approved message, or organizing the mailbox. It is
          not used for advertising, profiling, or sale.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">Processing and sharing</h2>
        <p className="mt-4 leading-7 text-zinc-700">
          The integration does not sell Google user data or share it with
          independent third parties. Content selected for a task may be processed
          by the AI model and infrastructure providers configured by the account
          owner solely to complete that task. Those providers act as technical
          service providers, not as recipients for their own advertising or
          marketing purposes.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">Storage and retention</h2>
        <p className="mt-4 leading-7 text-zinc-700">
          OAuth credentials are stored on systems controlled by the account owner
          and protected with restricted file permissions. Task outputs and local
          session records may contain limited email content when necessary to
          complete or document a requested task. The integration does not operate
          a public customer database. The account owner controls local retention
          and deletion of credentials, session records, and generated artifacts.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">Revoking access</h2>
        <p className="mt-4 leading-7 text-zinc-700">
          The account owner can revoke the integration at any time from{" "}
          <a
            href="https://myaccount.google.com/connections"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline underline-offset-4"
          >
            Google Account third-party connections
          </a>
          . Local OAuth credentials can then be removed from the owner-controlled
          system.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">Google API policy</h2>
        <p className="mt-4 leading-7 text-zinc-700">
          The use and transfer of information received from Google APIs adheres
          to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline underline-offset-4"
          >
            Google API Services User Data Policy
          </a>
          , including its Limited Use requirements.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">Contact and changes</h2>
        <p className="mt-4 leading-7 text-zinc-700">
          Questions may be sent to{" "}
          <a
            href="mailto:hello@1885.ai"
            className="text-black underline underline-offset-4"
          >
            hello@1885.ai
          </a>
          . Material changes will be posted on this page with a revised effective
          date.
        </p>
      </section>

      <nav className="mt-14 flex gap-6 border-t border-zinc-200 pt-8 text-sm">
        <Link
          href={APP_PATH}
          className="font-medium text-black underline underline-offset-4"
        >
          App information
        </Link>
        <Link
          href={`${APP_PATH}/terms`}
          className="font-medium text-black underline underline-offset-4"
        >
          Terms of Service
        </Link>
      </nav>
    </article>
  );
}
