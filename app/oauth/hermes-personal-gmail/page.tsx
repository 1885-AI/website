import type { Metadata } from "next";
import Link from "next/link";

const BASE_PATH = "/oauth/hermes-personal-gmail";

export const metadata: Metadata = {
  title: "Hermes Personal Gmail",
  description:
    "Information about the private Hermes Personal Gmail OAuth integration operated through 1885.ai.",
};

export default function HermesPersonalGmailPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
        Private OAuth integration
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black md:text-5xl">
        Hermes Personal Gmail
      </h1>

      <p className="mt-8 text-lg leading-8 text-zinc-700">
        Hermes Personal Gmail is a private, single-user integration operated by
        Jason Ennis through 1885.ai. It connects the account owner&apos;s Gmail
        account to a locally controlled Hermes Agent assistant. It is not
        offered as a public application or customer service.
      </p>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-black">What it does</h2>
        <ul className="mt-4 list-disc space-y-3 pl-6 text-zinc-700">
          <li>Reads and searches email requested by the account owner.</li>
          <li>Creates and edits drafts and replies.</li>
          <li>
            Sends email only when the account owner explicitly approves sending.
          </li>
          <li>
            Manages labels, read status, archiving, and other mailbox organization.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">How access is controlled</h2>
        <p className="mt-4 leading-7 text-zinc-700">
          Access is authorized directly by the Gmail account owner through
          Google OAuth. The owner can revoke access at any time from the Google
          Account third-party connections page. The integration does not request
          permission to permanently delete Gmail messages outside the normal
          Trash workflow.
        </p>
      </section>

      <nav
        aria-label="Hermes Personal Gmail legal information"
        className="mt-14 flex flex-col gap-3 border-t border-zinc-200 pt-8 text-sm sm:flex-row sm:gap-6"
      >
        <Link
          href={`${BASE_PATH}/privacy`}
          className="font-medium text-black underline underline-offset-4"
        >
          Privacy Policy
        </Link>
        <Link
          href={`${BASE_PATH}/terms`}
          className="font-medium text-black underline underline-offset-4"
        >
          Terms of Service
        </Link>
        <a
          href="mailto:hello@1885.ai"
          className="font-medium text-black underline underline-offset-4"
        >
          Contact
        </a>
      </nav>
    </article>
  );
}
