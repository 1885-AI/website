import type { Metadata } from "next";
import Link from "next/link";

const APP_PATH = "/oauth/hermes-personal-gmail";

export const metadata: Metadata = {
  title: "Hermes - Personal Gmail Terms of Service",
  description:
    "Terms of service for the private Hermes - Personal Gmail OAuth integration.",
};

export default function HermesPersonalGmailTermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
        Effective August 29, 2026
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black md:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-8 text-lg leading-8 text-zinc-700">
        These terms apply to Hermes - Personal Gmail, a private single-user OAuth
        integration operated by Jason Ennis through 1885.ai.
      </p>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-black">Private authorized use</h2>
        <p className="mt-4 leading-7 text-zinc-700">
          The integration is provided solely for use by the authorized Google
          account owner. It is not a public application, subscription service,
          or product offered to third parties. No person may connect or use a
          Google account without the account owner&apos;s authorization.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">Function and control</h2>
        <p className="mt-4 leading-7 text-zinc-700">
          The integration assists with reading, searching, drafting, sending,
          and organizing Gmail. The account owner remains responsible for
          reviewing consequential output and authorizing outbound messages.
          Access can be revoked at any time through the Google Account security
          settings.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">Acceptable use</h2>
        <p className="mt-4 leading-7 text-zinc-700">
          The integration may be used only lawfully and in accordance with
          Google&apos;s applicable terms and policies. It may not be used to access
          another person&apos;s account without permission, distribute unlawful or
          abusive content, or interfere with Google services.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">Third-party services</h2>
        <p className="mt-4 leading-7 text-zinc-700">
          Operation depends on Google APIs and on technical infrastructure and AI
          model providers configured by the account owner. Availability and
          behavior may be affected by changes to those services and their terms.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">No warranty</h2>
        <p className="mt-4 leading-7 text-zinc-700">
          The integration is provided as-is for the account owner&apos;s personal
          use. Automated output may be incomplete or incorrect. To the extent
          permitted by law, no warranty is made regarding uninterrupted service,
          accuracy, or fitness for a particular purpose.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">Suspension and termination</h2>
        <p className="mt-4 leading-7 text-zinc-700">
          Use may be suspended or terminated at any time. Revoking OAuth access
          ends the integration&apos;s ability to obtain new Gmail data, subject to
          removal of any existing local credentials and records.
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
          . Material changes will be posted here with a revised effective date.
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
          href={`${APP_PATH}/privacy`}
          className="font-medium text-black underline underline-offset-4"
        >
          Privacy Policy
        </Link>
      </nav>
    </article>
  );
}
