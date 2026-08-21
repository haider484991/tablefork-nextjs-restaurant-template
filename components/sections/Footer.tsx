import Logo from "@/components/Logo";
import { siteConfig, formatHours } from "@/config/site";

export default function Footer() {
  const { contact, hours } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-char-900 px-5 py-14 text-ember-50">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-65">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-70 underline-offset-4 hover:underline hover:opacity-100"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-70 underline-offset-4 hover:underline hover:opacity-100"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] opacity-50">
              Hours
            </h3>
            <dl className="mt-4 space-y-1.5 text-sm">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-3">
                  <dt className="opacity-60">{h.day.slice(0, 3)}</dt>
                  <dd className={h.closed ? "opacity-40" : ""}>
                    {formatHours(h)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] opacity-50">
              Find us
            </h3>
            <address className="mt-4 text-sm not-italic leading-relaxed opacity-70">
              {contact.address.street}
              <br />
              {contact.address.city}, {contact.address.region}{" "}
              {contact.address.postalCode}
            </address>
            <a
              href={`tel:${contact.phoneHref}`}
              className="mt-3 block text-sm font-semibold hover:underline"
            >
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="mt-1 block text-sm opacity-70 hover:underline"
            >
              {contact.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs opacity-55 sm:flex-row">
          <span>
            © {year} {siteConfig.name}. All rights reserved.
          </span>
          <span>
            {siteConfig.footerNote}{" "}
            <a
              href={siteConfig.footerCredit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              {siteConfig.footerCredit.label}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
