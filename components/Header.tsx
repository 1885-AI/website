import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="1885.ai home">
          <Image
            src="/logo.png"
            alt="1885.ai"
            width={40}
            height={40}
            priority
            className="rounded-sm"
          />
          <span className="text-base font-semibold tracking-tight text-black">
            1885.ai
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm text-zinc-700">
          <Link href="/about" className="hover:text-black transition">
            About
          </Link>
          <Link href="/oem" className="hover:text-black transition">
            OEM
          </Link>
          <Link href="/contact" className="hover:text-black transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
