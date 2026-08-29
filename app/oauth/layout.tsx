import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1885 OAuth Utility",
  description: "Information and policies for the private 1885 OAuth Utility.",
  openGraph: {
    title: "1885 OAuth Utility",
    description: "Information and policies for the private 1885 OAuth Utility.",
    url: "https://1885.ai/oauth",
    siteName: "1885.ai",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "1885 OAuth Utility",
    description: "Information and policies for the private 1885 OAuth Utility.",
  },
};

export default function OAuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
