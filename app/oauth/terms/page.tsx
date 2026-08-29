import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OAuth Utility Terms of Service",
  description: "Terms for the private 1885 OAuth Utility.",
};

export default function OAuthTermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-8 leading-7 text-zinc-700">
        The 1885 OAuth Utility is a private, single-user tool for the authorized
        account owner and is not a public service. It may be used only lawfully
        and with the owner&apos;s authorization. The utility depends on third-party
        services, is provided as-is without warranties, and may be discontinued
        at any time. The owner may terminate access by revoking authorization in
        Google Account settings.
      </p>
      <p className="mt-6 leading-7 text-zinc-700">
        Questions: <a href="mailto:hello@1885.ai" className="text-black underline underline-offset-4">hello@1885.ai</a>
      </p>
      <nav className="mt-12 flex gap-6 border-t border-zinc-200 pt-8 text-sm">
        <Link href="/oauth" className="font-medium text-black underline underline-offset-4">App information</Link>
        <Link href="/oauth/privacy" className="font-medium text-black underline underline-offset-4">Privacy Policy</Link>
      </nav>
    </article>
  );
}
