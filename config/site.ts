/**
 * ─────────────────────────────────────────────────────────────────────────────
 * TABLE & FORK — single source of truth
 * ─────────────────────────────────────────────────────────────────────────────
 * Every word, price, and hour on the site lives in this file. Edit it and the
 * whole template re-themes: nav, hero, menu, reservations, footer, and the
 * JSON-LD structured data that Google reads.
 *
 * Replace the sample restaurant below with your own and you are done.
 */

export const siteConfig = {
  /** Restaurant name — appears in nav, footer, <title>, and schema. */
  name: "Table & Fork",
  /** Short descriptor shown under the logo and in schema. */
  tagline: "Wood-fired kitchen",
  /** The <title> of the homepage. Put the city in it — locals search that way. */
  title: "Table & Fork — Wood-Fired Kitchen in Riverside",
  /** Meta description. Keep under ~155 characters. */
  description:
    "Wood-fired pizza, handmade pasta, and natural wine in downtown Riverside. Open until 10pm. Reservations and takeout available.",
  /** Canonical URL — used for metadataBase, Open Graph, and schema. */
  url: "https://tablefork.example.com",

  /** Cuisine type, used in schema.org servesCuisine and in copy. */
  cuisine: "Italian",
  /** Price range in Google's format: $, $$, $$$, or $$$$ */
  priceRange: "$$",

  contact: {
    phone: "(555) 010-1234",
    /** Digits only, for tel: links */
    phoneHref: "+15550101234",
    email: "hello@tablefork.example.com",
    address: {
      street: "412 Mill Street",
      city: "Riverside",
      region: "CA",
      postalCode: "92501",
      country: "US",
    },
    /** Used for the "Get directions" button. */
    mapsUrl: "https://maps.google.com/?q=412+Mill+Street+Riverside+CA",
  },

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },

  /**
   * Opening hours. `closed: true` renders "Closed" and is emitted correctly
   * in structured data. Times are 24h "HH:MM" for schema; the display string
   * is generated for you.
   */
  hours: [
    { day: "Monday", closed: true, open: "", close: "" },
    { day: "Tuesday", closed: false, open: "17:00", close: "22:00" },
    { day: "Wednesday", closed: false, open: "17:00", close: "22:00" },
    { day: "Thursday", closed: false, open: "17:00", close: "22:00" },
    { day: "Friday", closed: false, open: "17:00", close: "23:00" },
    { day: "Saturday", closed: false, open: "12:00", close: "23:00" },
    { day: "Sunday", closed: false, open: "12:00", close: "21:00" },
  ],

  /** Hero section. */
  hero: {
    eyebrow: "Downtown Riverside",
    headline: "Wood-fired, hand-shaped, honestly priced.",
    sub: "A neighbourhood kitchen serving blistered pizza, pasta rolled that morning, and a short list of natural wine. Walk in, or book a table below.",
    primaryCta: "Reserve a table",
    secondaryCta: "View the menu",
  },

  /** Short "our story" block. */
  about: {
    heading: "A small kitchen with loud opinions about dough",
    body: [
      "We started Table & Fork in 2019 with a second-hand oven, a 48-hour dough recipe, and a stubborn belief that a great neighbourhood restaurant should be affordable enough to visit on a Tuesday.",
      "Everything on the menu is made in-house daily — the pasta, the mozzarella, the ice cream. Our suppliers are named on the menu because they deserve to be.",
    ],
    stats: [
      { value: "48h", label: "Dough ferment" },
      { value: "6", label: "Local suppliers" },
      { value: "2019", label: "Serving since" },
    ],
  },

  /**
   * THE MENU — the most important content on any restaurant site.
   *
   * This renders as real, crawlable HTML. Never replace it with a PDF or an
   * image of a printed menu: Google cannot read those, and they are unusable
   * on a phone, which is where most people check your menu.
   *
   * `tags` render as small badges. Suggested: "v" (vegetarian), "vg" (vegan),
   * "gf" (gluten-free), "new", "popular".
   */
  menu: [
    {
      section: "To start",
      note: "Made to share.",
      items: [
        { name: "Focaccia & cultured butter", price: "6", description: "Rosemary, flaky salt, olive oil from Calabria.", tags: ["v"] },
        { name: "Marinated olives", price: "5", description: "Castelvetrano, orange peel, chilli, fennel seed.", tags: ["vg", "gf"] },
        { name: "Burrata & summer tomato", price: "14", description: "Whole burrata, heirloom tomato, basil oil, aged balsamic.", tags: ["v", "gf"] },
        { name: "Fried artichokes", price: "11", description: "Lemon aioli, parsley, parmesan.", tags: ["v"] },
        { name: "Charred broccolini", price: "10", description: "Anchovy butter, toasted almond, chilli.", tags: ["gf"] },
      ],
    },
    {
      section: "Wood-fired pizza",
      note: "48-hour dough, 90 seconds at 450°C.",
      items: [
        { name: "Margherita", price: "15", description: "San Marzano, fior di latte, basil, olive oil.", tags: ["v", "popular"] },
        { name: "Nduja & honey", price: "19", description: "Spicy calabrian sausage, fior di latte, hot honey, oregano.", tags: ["popular"] },
        { name: "Funghi", price: "18", description: "Roast mushroom, taleggio, thyme, garlic cream.", tags: ["v"] },
        { name: "Diavola", price: "18", description: "Spicy salami, San Marzano, fior di latte, chilli oil." },
        { name: "Marinara", price: "13", description: "San Marzano, garlic, oregano, olive oil. No cheese.", tags: ["vg"] },
        { name: "Bianca", price: "17", description: "Ricotta, mozzarella, lemon zest, black pepper, rocket.", tags: ["v", "new"] },
      ],
    },
    {
      section: "Pasta",
      note: "Rolled this morning.",
      items: [
        { name: "Cacio e pepe", price: "17", description: "Tonnarelli, pecorino romano, black pepper.", tags: ["v", "popular"] },
        { name: "Ragù bianco", price: "21", description: "Pappardelle, slow-cooked pork and veal, white wine, sage." },
        { name: "Cacio e zucchini", price: "18", description: "Casarecce, courgette, mint, parmesan, lemon.", tags: ["v"] },
        { name: "Clam linguine", price: "23", description: "Manila clams, white wine, garlic, parsley, chilli." },
      ],
    },
    {
      section: "Dessert",
      items: [
        { name: "Tiramisù", price: "9", description: "Made this morning, served in the dish it set in.", tags: ["v"] },
        { name: "Olive oil cake", price: "8", description: "Whipped mascarpone, macerated berries.", tags: ["v"] },
        { name: "Affogato", price: "7", description: "Vanilla gelato, double espresso, amaretto optional.", tags: ["v", "gf"] },
      ],
    },
    {
      section: "Drinks",
      note: "Short list, all natural, mostly Italian.",
      items: [
        { name: "Negroni", price: "13", description: "Equal parts, stirred, orange." },
        { name: "Spritz of the week", price: "11", description: "Ask your server — it changes." },
        { name: "Natural red, glass", price: "12", description: "Rotating. Usually something from Etna." },
        { name: "Natural white, glass", price: "12", description: "Rotating. Usually something coastal and salty." },
        { name: "Amaro", price: "9", description: "Six on the shelf. Ask for a recommendation." },
      ],
    },
  ],

  /** Legend for the little badges used in the menu. */
  dietaryLegend: [
    { tag: "v", label: "Vegetarian" },
    { tag: "vg", label: "Vegan" },
    { tag: "gf", label: "Gluten-free" },
  ],

  /** Reservations block. */
  reservations: {
    heading: "Book a table",
    body: "We hold a few tables back for walk-ins every night. For parties of six or more, please call us directly.",
    /**
     * Where the form submits. Point this at your booking provider (OpenTable,
     * Resy, SevenRooms) or a form service like Formspree. Leaving it as "#"
     * shows the built-in confirmation page.
     */
    action: "#",
    partySizes: ["1", "2", "3", "4", "5", "6+"],
    largePartyNote: "Parties of 6 or more — please call.",
  },

  /** What the "order" button does. Point at your own ordering page. */
  takeout: {
    enabled: true,
    label: "Order takeout",
    href: "#",
    note: "Collection only, ready in about 20 minutes.",
  },

  /** Footer note. */
  footerNote: "Built with the free Table & Fork template by",
  footerCredit: {
    label: "Pixel & Oak",
    href: "https://pixelandoak.com/templates/restaurant-website-template/?utm_source=tablefork-template",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/* ── Derived helpers (no need to edit) ───────────────────────────────────── */

/** "5:00pm" from "17:00" */
export function formatTime(t: string): string {
  if (!t) return "";
  const [hStr, m] = t.split(":");
  const h = Number(hStr);
  const suffix = h >= 12 ? "pm" : "am";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return m === "00" ? `${hour12}${suffix}` : `${hour12}:${m}${suffix}`;
}

/** "5pm – 10pm" or "Closed" */
export function formatHours(entry: {
  closed: boolean;
  open: string;
  close: string;
}): string {
  return entry.closed
    ? "Closed"
    : `${formatTime(entry.open)} – ${formatTime(entry.close)}`;
}

const DAY_SCHEMA: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

/**
 * schema.org Restaurant + Menu JSON-LD.
 * This is what earns rich results for hours, price range, and cuisine.
 */
export function restaurantSchema() {
  const a = siteConfig.contact.address;
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    servesCuisine: siteConfig.cuisine,
    priceRange: siteConfig.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: a.country,
    },
    openingHoursSpecification: siteConfig.hours
      .filter((h) => !h.closed)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${DAY_SCHEMA[h.day]}`,
        opens: h.open,
        closes: h.close,
      })),
    hasMenu: {
      "@type": "Menu",
      hasMenuSection: siteConfig.menu.map((s) => ({
        "@type": "MenuSection",
        name: s.section,
        hasMenuItem: s.items.map((i) => ({
          "@type": "MenuItem",
          name: i.name,
          description: i.description,
          offers: { "@type": "Offer", price: i.price, priceCurrency: "USD" },
        })),
      })),
    },
  };
}
