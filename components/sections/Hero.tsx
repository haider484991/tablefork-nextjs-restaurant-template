import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import OpenStatus, { TodayHours } from "@/components/OpenStatus";

export default function Hero() {
  const { hero, contact } = siteConfig;

  return (
    <section id="top" className="gradient-ember relative overflow-hidden">
      {/* subtle vignette so text stays readable over the gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 sm:pb-28 sm:pt-28">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ember-100 ring-1 ring-white/15">
              {hero.eyebrow}
            </span>
            <OpenStatus />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {hero.headline}
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ember-100/85">
            {hero.sub}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
            <a
              href="#reserve"
              className="inline-flex items-center justify-center rounded-full bg-ember-500 px-8 py-4 font-semibold text-white transition-colors hover:bg-ember-400"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-4 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-white/20"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </Reveal>

        {/* The three things every visitor came for. */}
        <Reveal delay={300}>
          <dl className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-3">
            <div className="bg-char-900/60 p-6 backdrop-blur">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ember-200/70">
                Find us
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-white">
                {contact.address.street}
                <br />
                {contact.address.city}, {contact.address.region}{" "}
                {contact.address.postalCode}
              </dd>
            </div>
            <div className="bg-char-900/60 p-6 backdrop-blur">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ember-200/70">
                Today
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-white">
                <TodayHours />
              </dd>
            </div>
            <div className="bg-char-900/60 p-6 backdrop-blur">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ember-200/70">
                Call
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-white">
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="underline-offset-4 hover:underline"
                >
                  {contact.phone}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
