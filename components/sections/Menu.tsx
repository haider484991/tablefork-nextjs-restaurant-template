import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";

/**
 * THE MENU.
 *
 * Rendered as real, semantic, crawlable HTML — never a PDF and never an image
 * of a printed menu. This is deliberate and it is the single most important
 * decision on a restaurant website:
 *
 *   • Google can read it, so you rank for "<dish> in <city>" searches.
 *   • It is legible and zoomable on a phone, where most menus are opened.
 *   • Screen readers can read it, which a picture of a menu can never do.
 *   • It pairs with the Menu structured data emitted in app/layout.tsx.
 */

const TAG_STYLES: Record<string, string> = {
  v: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300",
  vg: "bg-lime-100 text-lime-800 dark:bg-lime-500/15 dark:text-lime-300",
  gf: "bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300",
  popular:
    "bg-ember-100 text-ember-600 dark:bg-ember-500/20 dark:text-ember-200",
  new: "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300",
};

export default function Menu() {
  return (
    <section id="menu" className="paper py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ember-600 dark:text-ember-400">
              The menu
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              What we&rsquo;re cooking
            </h2>
            <p className="mx-auto mt-4 max-w-xl opacity-70">
              Everything is made in-house daily. Ask us about allergens — we
              know every ingredient in the kitchen.
            </p>
          </div>
        </Reveal>

        {/* Dietary legend */}
        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {siteConfig.dietaryLegend.map((l) => (
              <span
                key={l.tag}
                className="inline-flex items-center gap-1.5 text-xs opacity-70"
              >
                <span
                  className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${
                    TAG_STYLES[l.tag] ?? ""
                  }`}
                >
                  {l.tag}
                </span>
                {l.label}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 space-y-14">
          {siteConfig.menu.map((section, si) => (
            <Reveal key={section.section} delay={si * 60}>
              <div>
                <div className="flex items-baseline justify-between gap-4 border-b border-current/15 pb-3">
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {section.section}
                  </h3>
                  {"note" in section && section.note ? (
                    <p className="text-right text-xs italic opacity-60">
                      {section.note}
                    </p>
                  ) : null}
                </div>

                <ul className="mt-6 space-y-5">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline">
                        <h4 className="font-semibold">{item.name}</h4>
                        <span className="leader" aria-hidden="true" />
                        <span className="font-display font-bold tabular-nums">
                          ${item.price}
                        </span>
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                        <p className="text-sm opacity-65">{item.description}</p>
                        {"tags" in item && item.tags
                          ? item.tags.map((t) => (
                              <span
                                key={t}
                                className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${
                                  TAG_STYLES[t] ?? "bg-black/5 dark:bg-white/10"
                                }`}
                              >
                                {t}
                              </span>
                            ))
                          : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {siteConfig.takeout.enabled && (
          <Reveal>
            <div className="mt-16 rounded-2xl border border-current/10 bg-white/60 p-8 text-center backdrop-blur dark:bg-white/5">
              <h3 className="font-display text-xl font-bold">
                Rather eat at home?
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm opacity-70">
                {siteConfig.takeout.note}
              </p>
              <a
                href={siteConfig.takeout.href}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-ember-500 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-ember-600"
              >
                {siteConfig.takeout.label}
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
