import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500">
          Powersports retail software
        </p>
        <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight text-black leading-[1.05]">
          Dealership intelligence,
          <br />
          built by dealers.
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-zinc-600">
          1885.ai is a Business Intelligence layer and CRM for powersports
          dealerships, built on top of your Lightspeed DMS.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-black text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition"
          >
            Request a demo
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-zinc-300 rounded-lg text-sm font-medium text-black hover:bg-zinc-100 transition"
          >
            About 1885.ai
          </Link>
        </div>
        <p className="mt-6 text-sm text-zinc-500">Launching 2026.</p>
      </section>

      {/* Two products */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
            Two products. One platform.
          </h2>
          <p className="mt-4 text-zinc-600 max-w-2xl">
            Use either standalone. They are designed to work together.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white border border-zinc-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-black">
                Business Intelligence Layer
              </h3>
              <p className="mt-4 text-zinc-700">
                Dashboards, reporting, and fast record access that sit directly
                on top of your Lightspeed DMS. An AI chatbot answers plain-English
                questions about your dealership&apos;s data.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                <li>— Dashboards and reporting</li>
                <li>— Fast record access</li>
                <li>— AI chatbot over dealership data</li>
                <li>— Built on CDK Lightspeed EVO and NXT</li>
              </ul>
            </article>

            <article className="bg-white border border-zinc-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-black">CRM</h3>
              <p className="mt-4 text-zinc-700">
                A full dealership CRM designed for how powersports actually
                sells. Accepts ADF/XML lead feeds from authorized OEM lead
                providers. Pairs with the BI Layer for end-to-end visibility.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                <li>— ADF/XML lead ingestion</li>
                <li>— Pipeline and task management</li>
                <li>— AI next-best-action</li>
                <li>— Lightspeed-integrated</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* OEM compliance */}
      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
            Built for OEM compliance.
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-zinc-700">
            <p>
              1885.ai accepts ADF/XML lead feeds from authorized OEM lead
              providers. We are actively seeking authorized-vendor approval from
              the major powersports OEMs.
            </p>
            <p>
              1885.ai follows industry-standard data security practices.
              Detailed security documentation is available to authorized-vendor
              reviewers on request.
            </p>
            <p className="text-sm text-zinc-600">
              OEM vendor review contact:{" "}
              <a
                href="mailto:hello@1885.ai"
                className="text-black underline underline-offset-4"
              >
                hello@1885.ai
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
            Three things that make this different.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-black">DMS-native</h3>
              <p className="mt-3 text-zinc-700">
                Built on your Lightspeed data directly. No double entry, no sync
                lag, no brittle middleware.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">
                AI-driven workflows
              </h3>
              <p className="mt-3 text-zinc-700">
                Next-best-action guidance, AI-drafted follow-ups, and pipeline
                intelligence. Not a form-based CRM with an AI label bolted on.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">
                Built by a dealer
              </h3>
              <p className="mt-3 text-zinc-700">
                Founded by a 20+ year powersports dealer principal. The product
                addresses the pain we live every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Talk to us.
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            We are running early pilots with a small group of dealers. If you
            run a powersports store and the status quo is not working, we want
            to hear from you.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-zinc-200 transition"
            >
              Contact 1885.ai
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
