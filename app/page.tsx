export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-black">
          1885 AI
        </h1>

        <p className="mt-6 text-lg md:text-xl text-zinc-600">
          AI-driven systems, data platforms, and automation infrastructure.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/contact"
            className="px-6 py-3 bg-black text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition"
          >
            Get in touch
          </a>

          <a
            href="/about"
            className="px-6 py-3 border border-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-100 transition"
          >
            Learn more
          </a>
        </div>
      </div>
    </main>
  );
}