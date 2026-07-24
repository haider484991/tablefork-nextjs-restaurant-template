import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ember-600 dark:text-ember-400">
              Our story
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {about.heading}
            </h2>
            {about.body.map((p) => (
              <p key={p} className="mt-5 leading-relaxed opacity-75">
                {p}
              </p>
            ))}

            <dl className="mt-9 grid grid-cols-3 gap-6">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-bold text-ember-500">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider opacity-60">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/*
          A CSS-drawn "photo wall". The template ships with zero image files so
          it stays fast and has nothing to license. Swap these divs for real
          <Image> tags once you have photography.
        */}
        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-4" aria-hidden="true">
            <div className="gradient-ember h-56 rounded-2xl ring-1 ring-black/5 dark:ring-white/10" />
            <div className="mt-8 h-56 rounded-2xl bg-gradient-to-br from-ember-200 to-ember-400 ring-1 ring-black/5 dark:from-ember-600 dark:to-char-800 dark:ring-white/10" />
            <div className="h-40 rounded-2xl bg-gradient-to-tr from-char-800 to-ember-600 ring-1 ring-black/5 dark:ring-white/10" />
            <div className="mt-8 h-40 rounded-2xl bg-gradient-to-bl from-ember-100 to-ember-200 ring-1 ring-black/5 dark:from-char-800 dark:to-char-900 dark:ring-white/10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
