import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "1885.ai is a powersports dealership software company. Founded by Jason Ennis, a 20+ year Dealer Principal.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black">
        About 1885.ai
      </h1>

      <p className="mt-8 text-lg text-zinc-700">
        1885.ai is a powersports dealership software company. We build the
        Business Intelligence layer and CRM we wished existed when we were
        running the front line ourselves.
      </p>

      <section className="mt-16">
        <h2 className="text-xl font-semibold text-black">Founder</h2>
        <p className="mt-4 text-zinc-700">
          1885.ai was founded by Jason Ennis, a Dealer Principal with more than
          20 years in powersports retail. Jason has lived every role the product
          is built for — from the sales floor to the owner&apos;s office — and
          every pain point the product solves is one he has hit personally.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">Team</h2>
        <p className="mt-4 text-zinc-700">
          Jason leads product and company direction. He works with a small group
          of contractors and advisors with more than 10 years of combined OEM
          experience in dealer systems, DMS integration, and lead management.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">Mission</h2>
        <p className="mt-4 text-zinc-700">
          Give powersports dealers the same quality of software that other
          retail verticals take for granted — built natively on the DMS, driven
          by AI, and designed by someone who runs the store.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">Pilot program</h2>
        <p className="mt-4 text-zinc-700">
          We are running early pilots with an internal dealer group. Pilot
          dealers remain anonymous until public launch in 2026. If you would
          like to be considered for the next pilot wave,{" "}
          <a
            href="/contact"
            className="text-black underline underline-offset-4"
          >
            get in touch
          </a>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-black">Why 1885</h2>
        <p className="mt-4 text-zinc-700">
          1885 is the year the first modern motorcycle was built. Powersports
          has a long history. The tools should catch up.
        </p>
      </section>
    </article>
  );
}
