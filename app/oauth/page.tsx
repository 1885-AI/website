import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "1885 OAuth Utility",
  description: "Information about the private 1885 OAuth Utility.",
};

export default function OAuthPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
        1885 OAuth Utility
      </h1>
      <p className="mt-8 text-lg leading-8 text-zinc-700">
        This is a private, single-user utility used by the owner of 1885.ai to
        access and manage the owner&apos;s Google account through Google APIs. It
        is not offered to the public.
      </p>
      <nav className="mt-12 flex gap-6 border-t border-zinc-200 pt-8 text-sm">
        <Link href="/oauth/privacy" className="font-medium text-black underline underline-offset-4">
          Privacy Policy
        </Link>
        <Link href="/oauth/terms" className="font-medium text-black underline underline-offset-4">
          Terms of Service
        </Link>
      </nav>
    </article>
  );
}
