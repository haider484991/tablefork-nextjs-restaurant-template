"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";

/**
 * Reservation form.
 *
 * By default (`action: "#"` in config) this shows an inline confirmation so the
 * template works out of the box with no backend. Point `reservations.action` at
 * OpenTable / Resy / SevenRooms / Formspree and it posts there instead.
 */
export default function Reservations() {
  const { reservations, contact } = siteConfig;
  const [sent, setSent] = useState(false);

  const usesBackend = reservations.action && reservations.action !== "#";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!usesBackend) {
      e.preventDefault();
      setSent(true);
    }
  }

  // Today, in yyyy-mm-dd, so the date picker cannot select the past.
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="reserve" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ember-600 dark:text-ember-400">
              Reservations
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {reservations.heading}
            </h2>
            <p className="mt-5 leading-relaxed opacity-75">
              {reservations.body}
            </p>

            <div className="mt-8 rounded-2xl border border-current/10 p-6">
              <p className="text-sm font-semibold">
                {reservations.largePartyNote}
              </p>
              <a
                href={`tel:${contact.phoneHref}`}
                className="mt-2 inline-block font-display text-2xl font-bold text-ember-500 hover:underline"
              >
                {contact.phone}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          {sent ? (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50 p-8 text-center dark:bg-emerald-500/10">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">
                Request received
              </h3>
              <p className="mt-2 text-sm opacity-75">
                This is the built-in demo confirmation. Connect{" "}
                <code className="rounded bg-black/5 px-1.5 py-0.5 text-xs dark:bg-white/10">
                  reservations.action
                </code>{" "}
                in <code className="text-xs">config/site.ts</code> to your
                booking provider to take real bookings.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-semibold text-ember-600 hover:underline dark:text-ember-400"
              >
                Make another request
              </button>
            </div>
          ) : (
            <form
              action={usesBackend ? reservations.action : undefined}
              method={usesBackend ? "POST" : undefined}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-current/10 p-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="input"
                  />
                </Field>
                <Field label="Phone" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="input"
                  />
                </Field>
                <Field label="Date" htmlFor="date">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    min={today}
                    className="input"
                  />
                </Field>
                <Field label="Time" htmlFor="time">
                  <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    className="input"
                  />
                </Field>
              </div>

              <fieldset className="mt-5">
                <legend className="mb-2 block text-sm font-medium">
                  Party size
                </legend>
                <div className="flex flex-wrap gap-2">
                  {reservations.partySizes.map((size, i) => (
                    <label
                      key={size}
                      className="cursor-pointer rounded-full border border-current/15 px-4 py-2 text-sm font-medium transition-colors has-[:checked]:border-ember-500 has-[:checked]:bg-ember-500 has-[:checked]:text-white"
                    >
                      <input
                        type="radio"
                        name="party"
                        value={size}
                        defaultChecked={i === 1}
                        className="sr-only"
                      />
                      {size}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-5">
                <Field label="Anything we should know?" htmlFor="notes" optional>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="Allergies, high chair, celebrating something…"
                    className="input resize-none"
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-ember-500 px-6 py-4 font-semibold text-white transition-colors hover:bg-ember-600"
              >
                Request a table
              </button>
              <p className="mt-3 text-center text-xs opacity-55">
                We&rsquo;ll confirm by phone or text within a couple of hours.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium">
        {label}
        {optional && <span className="ml-1 opacity-50">(optional)</span>}
      </label>
      {children}
    </div>
  );
}
