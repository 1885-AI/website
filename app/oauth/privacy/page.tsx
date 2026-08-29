import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OAuth Utility Privacy Policy",
  description: "Privacy policy for the private 1885 OAuth Utility.",
};

export default function OAuthPrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-8 leading-7 text-zinc-700">
        The 1885 OAuth Utility accesses Google account data only with the account
        owner&apos;s authorization and only to perform actions requested by that
        owner. Authorized data may include Gmail messages, metadata, labels, and
        drafts. Data is not sold, used for advertising, or shared except with
        service providers necessary to operate the utility. Credentials and any
        retained outputs remain under the owner&apos;s control. Access can be revoked
        at any time through the owner&apos;s Google Account settings.
      </p>
      <p className="mt-6 leading-7 text-zinc-700">
        Google user data is not used to develop, improve, or train generalized
        or non-personalized artificial intelligence or machine-learning models.
      </p>
      <p className="mt-6 leading-7 text-zinc-700">
        Authorization credentials are retained only while access remains active.
        The owner can delete retained data by revoking access in Google Account
        settings and removing locally stored credentials, session records, and
        generated outputs. Questions or deletion requests sent to hello@1885.ai
        will be handled within 30 days.
      </p>
      <p className="mt-6 leading-7 text-zinc-700">
        Use of information received from Google APIs complies with the{" "}
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
      <p className="mt-6 leading-7 text-zinc-700">
        Questions: <a href="mailto:hello@1885.ai" className="text-black underline underline-offset-4">hello@1885.ai</a>
      </p>
      <nav aria-label="OAuth policy links" className="mt-12 flex gap-6 border-t border-zinc-200 pt-8 text-sm">
        <Link href="/oauth" className="font-medium text-black underline underline-offset-4">App information</Link>
        <Link href="/oauth/terms" className="font-medium text-black underline underline-offset-4">Terms</Link>
      </nav>
    </article>
  );
}
