import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OEM Integration",
  description:
    "1885.ai is pursuing OEM certification as a CRM vendor for powersports manufacturers. Learn how we handle lead ingestion, disposition reporting, and dealer compliance.",
};

export default function OemPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500">
          OEM Integration
        </p>
        <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-black leading-[1.05]">
          Built to work with your
          <br />
          lead programs.
        </h1>
        <p className="mt-6 text-lg text-zinc-600 max-w-2xl">
          1885.ai is a powersports CRM pursuing certified-vendor status with the
          major OEMs. We are building to OEM specifications from the start — not
          retrofitting a general-purpose CRM after the fact.
        </p>
      </section>

      {/* What OEMs get */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
            What we handle for OEMs.
          </h2>
          <p className="mt-4 text-zinc-600 max-w-2xl">
            Every integration point is designed around what manufacturers need to
            see — not just what dealers want to use.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white border border-zinc-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-black">
                Lead ingestion
              </h3>
              <p className="mt-4 text-zinc-700">
                We accept leads via API in ADF/XML format. OEM lead IDs are
                preserved through the full lifecycle so every lead is
                traceable back to its source. Incoming leads are validated,
                normalized, and de-duplicated before entering the dealer
                workflow.
              </p>
            </article>

            <article className="bg-white border border-zinc-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-black">
                Disposition reporting
              </h3>
              <p className="mt-4 text-zinc-700">
                Lead status and disposition updates are pushed back to the OEM
                via API — including contact timestamps, assignment dates, and
                final outcomes. Manufacturers get real-time visibility into how
                dealers are handling every lead.
              </p>
            </article>

            <article className="bg-white border border-zinc-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-black">
                Response time tracking
              </h3>
              <p className="mt-4 text-zinc-700">
                We track dealer response time from the moment a lead arrives.
                Alerts and escalation rules help dealers stay within OEM SLA
                windows. Response metrics are included in disposition
                reporting.
              </p>
            </article>

            <article className="bg-white border border-zinc-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-black">
                Dealer execution
              </h3>
              <p className="mt-4 text-zinc-700">
                Structured workflows ensure leads actually get worked —
                consistently, across every store. The goal is not just software
                adoption but measurable dealer follow-through on every OEM lead.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Security & compliance */}
      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
            Security and compliance.
          </h2>
          <div className="mt-8 space-y-6 text-zinc-700">
            <p>
              Lead data is encrypted in transit and at rest. Access is
              role-based with audit logging. We build with dealer compliance
              expectations in mind and are prepared to meet OEM security
              review requirements.
            </p>
            <p>
              Detailed security documentation is available to OEM
              vendor-review teams on request.
            </p>
          </div>
        </div>
      </section>

      {/* How we're different */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
            Why we built this.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-black">
                Dealer-operated
              </h3>
              <p className="mt-3 text-zinc-700">
                Our founder is a Dealer Principal with 20+ years in powersports
                retail. We know what OEM compliance looks like from the dealer
                side because we live it.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">
                Powersports only
              </h3>
              <p className="mt-3 text-zinc-700">
                This is not a horizontal CRM adapted to powersports. Every
                workflow, every data model, every integration is built for this
                industry specifically.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">
                DMS-native
              </h3>
              <p className="mt-3 text-zinc-700">
                Built on top of Lightspeed EVO and NXT. No sync lag, no double
                entry, no middleware fragility between the CRM and the DMS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current status */}
      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
            Where we are.
          </h2>
          <div className="mt-8 space-y-6 text-zinc-700">
            <p>
              1885.ai is in active development with early pilots running at an
              internal dealer group. We are pursuing certified-vendor
              status with powersports OEMs and building our integration layer to
              manufacturer specifications.
            </p>
            <p>
              We welcome conversations with OEM vendor-review and
              dealer-connect teams. If you are evaluating CRM vendors or
              managing a certification program, we would like to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            OEM vendor review.
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            For certification inquiries, technical documentation requests, or to
            schedule a walkthrough of our OEM integration layer, contact us
            directly.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-zinc-200 transition"
            >
              Contact 1885.ai
            </Link>
            <a
              href="mailto:hello@1885.ai"
              className="inline-block px-6 py-3 border border-zinc-600 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition"
            >
              hello@1885.ai
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
