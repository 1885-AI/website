const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/get1885ai" },
  { name: "X", href: "https://x.com/get1885ai" },
  { name: "Instagram", href: "https://instagram.com/get1885ai" },
  { name: "Facebook", href: "https://www.facebook.com/get1885ai" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UC6_72pZL1e7z2zAl6RO3ZMg" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-zinc-600">
        <div className="col-span-2 md:col-span-1">
          <div className="text-black font-semibold">1885.ai</div>
          <p className="mt-2">Dealership intelligence, built by dealers.</p>
        </div>

        <div>
          <div className="text-black font-semibold">Contact</div>
          <a
            href="mailto:hello@1885.ai"
            className="mt-2 block hover:text-black transition"
          >
            hello@1885.ai
          </a>
        </div>

        <div>
          <div className="text-black font-semibold">Mailing address</div>
          <address className="mt-2 not-italic">
            2575 N. Orange Blossom Trail
            <br />
            Kissimmee, FL 34744
          </address>
        </div>

        <div>
          <div className="text-black font-semibold">Follow</div>
          <ul className="mt-2 space-y-1">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-zinc-500 flex justify-between">
          <span>&copy; {new Date().getFullYear()} 1885.ai</span>
          <span>Launching 2026.</span>
        </div>
      </div>
    </footer>
  );
}
