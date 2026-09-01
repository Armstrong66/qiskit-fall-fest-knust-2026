# Qiskit Fall Fest KNUST 2026 — Website Build Handoff

**Audience:** Coding assistant (with local read access to `materials-resources` and write access to `qiskit-fall-fest-knust-2026`)
**Owner:** Armstrong + Qiskit KNUST Student Chapter team
**Goal:** A modular, zero-recurring-cost, "deploy once and let it sit forever" static website for QFF KNUST 2026, connected via GitHub → Vercel, editable by non-coders after handoff, and portable off Vercel if ever needed.

---

## 0. Context you should internalize before writing code

- **Event:** Qiskit Fall Fest 2026, KNUST edition. Hosted by the Qiskit KNUST Student Chapter, under the Mathematical & Computational Physics Unit, Dept. of Physics, KNUST.
- **2026 global theme:** *"A Decade of Quantum on the Cloud"* — 2026 marks 10 years since IBM put the first open-access quantum computer on the cloud. IBM's own materials will lean into a **2016 → today** narrative (early cloud experiments → 100+ qubit utility-scale workloads). Our site's About/Theme section should visually echo this "decade timeline" idea. Reference: IBM's Fall Fest 2026 blog post (`ibm.com/quantum/blog/qiskit-fall-fest-2026`).
- **Format:** Fully **virtual** (Microsoft Teams primary, keep the platform label configurable — it may change), with an optional informal **local meetup/watch-party** note for Kumasi-area participants. Don't hardcode "Teams" everywhere — treat it as a config value.
- **Registration:** External **Luma** event page. No custom backend, no email collection on our own server — just a "Register / Apply Now" button (and optionally an embedded Luma widget) pointing at the Luma link.
- **Community:** Discord server, but **link is only revealed/emailed after registration** — the site should not publish a raw invite link publicly. Show a "Join our Discord — link sent after you register" style message instead, or gate it behind a "Registered? Check your email" note.
- **Content that's genuinely unknown right now:** schedule, speakers/facilitators, modules/lecture topics. These must be **TBD-safe** — the site should look intentional and complete even with placeholder content, and switch to real content later via a **data file edit only**, never a code edit.
- **Previous site weaknesses to fix** (inferred from `sites.google.com/view/qiskitfallfest2025`): generic Google Sites template look, only 3 pages (Home/Schedule/Map), no real branding system, no reusable components, contact via a raw `mailto:` link, no persistent asset/version control. This year we want an actual codebase, not a page builder.
- **License note:** the `materials-resources` repo is MIT-licensed at its root, same as our own repo. That covers *code/reuse* concerns for anything you copy in, but IBM/Qiskit **logo and brand marks** may still be governed by IBM's separate brand guidelines — keep an explicit attribution line ("Powered by IBM Qiskit") in the footer and do not modify the Qiskit/IBM logotype itself (recolor/crop/distort), only the figures and illustrative assets.

---

## 1. Core engineering principle: single source of truth

Every piece of "editorial" data (dates, links, theme copy, nav items, team members, schedule, speakers, feature toggles, colors, fonts) must live in **plain data files**, not be duplicated inline across components. Components/pages **read** from this data; they never hardcode it. This is what makes "change one place → propagates everywhere" true, and it's also what lets a non-coder on the team edit `content/*.json` or `site.config.ts` directly on GitHub without touching a single component.

Two data layers:

1. **`site.config.ts`** — structural/behavioral config: links, feature flags, theme tokens, nav, dates, format/venue.
2. **`content/*.json` (or `.md` for long-form)** — editorial content that changes more often or is bigger: schedule, speakers, FAQ, organizers, gallery.

Nothing outside these files should contain a literal date, a literal URL, a literal color hex, or a literal "TBD" — those all get *rendered* from config, so a placeholder → real-content swap is a one-file diff.

---

## 2. Recommended stack (optimized for $0-forever + low maintenance)

**Recommendation: Astro + Tailwind CSS, statically exported, deployed on Vercel's free Hobby tier.**

Why Astro over a plain HTML/CSS/JS trio or a full Next.js app for this specific project:

| Need | Why Astro fits |
|---|---|
| Zero recurring cost | Ships pure static HTML/CSS + minimal JS islands. No serverless functions, no DB, no API routes needed (Luma/Discord are just outbound links) → nothing on Vercel's paid usage axes (function invocations, ISR, etc.) is ever touched. |
| "Forever" / portability | Output is a folder of static files. If Vercel ever becomes unsuitable, the same `dist/` deploys unchanged to GitHub Pages, Cloudflare Pages, Netlify, or literally any static host — no lock-in. |
| Modularity you asked for | `.astro` components + shared layouts + centralized data files, same propagation model as React, but ships far less JS by default (better for low-bandwidth participants). |
| Content team-friendliness | Team members can edit `content/*.json` or `.md` files straight in the GitHub web UI without a dev environment. |
| Long-term low maintenance | Fewer moving parts than a full Next.js app; framework churn risk is lower for a "set and forget" event site. |

**Acceptable fallback if the team prefers something more familiar:** plain **Vite + vanilla HTML/CSS/JS** with partials assembled at build time (e.g. `vite-plugin-html` + a single `data.js`), or **Next.js with `output: "export"`** (static export mode) if the team wants React components. Whichever is chosen, the *config-driven, no-duplication* rule in Section 1 still applies — don't hand-copy the hero headline into 3 files.

Do **not** use client-side-only tools that require ongoing hosting cost to stay "live" (no server rendering, no cron jobs, no database). Everything must be buildable to static files.

---

## 3. Fonts

Use **IBM Plex** (Plex Sans for body/UI, Plex Mono for code/technical labels, optionally Plex Serif for editorial headings) — matches IBM Quantum's own visual language.

- Self-host via the `@fontsource` packages (`@fontsource/ibm-plex-sans`, `@fontsource/ibm-plex-mono`) installed as a normal npm dependency and imported at build time. This avoids depending on an external font CDN staying online forever, and keeps the site fully self-contained (better for the "forever" goal, better privacy, no external request at runtime).
- Define font stacks once in a CSS variables layer (`--font-sans`, `--font-mono`) or Tailwind theme extension — never hardcode `font-family` per component.

---

## 4. Color & theme tokens

Derive a small palette echoing IBM Quantum's cloud/quantum-purple and Qiskit's blue/violet identity, plus a neutral IBM-Carbon-like gray scale for text/background. Store as CSS custom properties (or Tailwind `theme.extend.colors`) in **one file** (`styles/tokens.css` or `tailwind.config.*`), referenced everywhere by name (`bg-brand-600`, not `bg-[#6929c4]`). This is what lets a rebrand or dark-mode pass be a one-file change.

Suggested token roles to define (assistant should pick actual hex values matching the IBM Plex/Quantum aesthetic, then confirm with the team): `brand-primary`, `brand-secondary`, `accent`, `bg-base`, `bg-surface`, `text-primary`, `text-muted`, `border-subtle`, `success`, `warning`. Support light mode by default; dark mode is optional nice-to-have, not required for launch.

---

## 5. What to do with `materials-resources` — decision + instructions

**Decision: do NOT build the site inside the cloned `materials-resources` repo, and do NOT add it as a git submodule.** Reasons:

- `materials-resources` is IBM's **shared, org-wide** asset repo across *all* Fall Fest host campuses — it isn't ours to restructure, and it will keep changing/growing independently of our release cycle.
- A git submodule is fragile for a small student team: someone forgets `git submodule update --init --recursive`, a CI/Vercel build silently uses stale or missing assets, and debugging that mid-event-week is exactly the kind of maintenance burden the "zero-cost, forever, low-touch" goal is trying to avoid.
- Our "forever" hosting promise means our repo should be **fully self-contained** — able to build correctly years from now even if the upstream `materials-resources` repo is renamed, archived, or deleted.

**Instead: selectively vendor (copy) in only the specific assets we actually use.**

1. Inventory `00_Deliverables/` (and any other asset folders) in the local clone of `materials-resources`.
2. From that inventory, shortlist assets that are:
   - Decade/timeline-themed graphics (matches the 2026 theme directly — prioritize these for the About/Theme section).
   - Clean, brand-safe Qiskit/IBM Quantum lockups, wordmarks, and icon sets (for header/footer, sponsor-style "powered by" strip).
   - Circuit/qubit illustrative SVGs suitable as section dividers, hero background motifs, or empty-state illustrations (e.g. for the TBD schedule).
   - Social/badge templates only if they're easily restyled for KNUST — skip anything too generic-campus-specific to be worth adapting.
   - Prefer **SVG over PNG/JPEG** wherever both exist (scales cleanly, tiny file size, matches a "care about long-term maintainability" mindset). Fall back to the highest-resolution PNG only if no vector version exists.
3. Copy the shortlisted files into our repo under `public/assets/qff-global/` (or `src/assets/qff-global/` if the framework needs build-time-processed images), preserving original filenames where reasonable.
4. Add `public/assets/qff-global/SOURCE.md` documenting: which upstream repo/commit they came from, the date copied, and the license note (MIT, per upstream `LICENSE`) plus the IBM brand-guideline caveat from Section 0.
5. Reference every copied asset only through the config/content layer (e.g. `content/theme-section.json` pointing at `"/assets/qff-global/decade-timeline.svg"`), never a raw hardcoded path inside a component, so swapping an asset later is a one-line data edit.
6. If the team later wants to re-sync new assets from upstream, add a small optional helper script (`scripts/sync-assets.sh` or a documented manual step) rather than a live dependency — it should be a **deliberate, occasional pull**, not something the build depends on at deploy time.

**KNUST/team logo:** create a clearly separated `public/assets/knust/` (or `local/`) folder for our own chapter/school branding, kept visually distinct in the code from the global `qff-global/` assets so future editors immediately understand provenance.

---

## 6. Site structure / pages & sections

Single-page (long scroll) site is fine and matches the previous year's simple structure while looking far more polished — recommend **one main page with anchor-linked sections**, plus a couple of standalone routes only where useful. Keep every section a discrete component reading from `content/`:

1. **Header/Nav** — logo, section anchor links, prominent "Register" CTA button (always visible/sticky).
2. **Hero** — event name, dates ("TBD" badge if unset), format badge ("Virtual · MS Teams"), theme tagline, primary Register CTA + secondary "Learn more" scroll link.
3. **About Qiskit Fall Fest** — short global-program blurb + KNUST chapter blurb (two sub-blocks, both from `content/about.json`).
4. **2026 Theme: "A Decade of Quantum on the Cloud"** — the timeline-styled section, 2016 → 2026 narrative, using the decade/timeline asset from Section 5.
5. **Format & Venue** — virtual-first explainer (MS Teams, platform kept configurable), plus the optional "local meet-up for Kumasi-area participants" callout — must be a feature flag (`showLocalMeetup: true/false`) so it can be toggled off cleanly if it doesn't materialize.
6. **Schedule** — reads from `content/schedule.json`; when empty/TBD, render a clean "Full schedule coming soon" state instead of an empty table (never a raw broken-looking gap).
7. **Speakers/Facilitators** — same TBD-safe pattern, `content/speakers.json`.
8. **Register** — repeats the Luma CTA, optionally an embedded Luma iframe widget below the button (Luma supports an embeddable checkout — confirm the embed URL from the Luma event's "Share → Embed" panel before implementing).
9. **Community / Discord** — explains Discord is where all comms happen, but the invite is only sent post-registration (see Section 0) — no public raw invite link.
10. **Organizers/Team** — KNUST chapter organizers + logo section, sourced from `content/team.json`.
11. **Past Edition (optional)** — feature-flagged (`showGallery: false` by default) block for 2025 screenshots; keep it fully removable via one config flag, not code deletion, since it's explicitly "highly optional."
12. **FAQ** — `content/faq.json`.
13. **Footer** — contact, socials, "Powered by IBM Qiskit" attribution, license/credits line, back-to-top.

Every "TBD" state across the site should use **one shared `<TbdBadge>`/`<ComingSoon>` component**, not ad hoc text per section — another instance of the propagation principle (e.g. if the team later wants to restyle how "TBD" looks, it's one component edit).

---

## 7. Suggested repo scaffolding

```
qiskit-fall-fest-knust-2026/
├── public/
│   ├── assets/
│   │   ├── qff-global/         # vendored-in assets from materials-resources (see Sec. 5)
│   │   │   └── SOURCE.md
│   │   └── knust/              # our chapter/school logo & local branding
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro    # <head>, fonts, meta/OG tags, footer/header wrapper
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── ThemeTimeline.astro
│   │   ├── FormatVenue.astro
│   │   ├── Schedule.astro
│   │   ├── Speakers.astro
│   │   ├── RegisterCta.astro
│   │   ├── CommunityDiscord.astro
│   │   ├── Team.astro
│   │   ├── Gallery.astro        # only rendered if showGallery flag is true
│   │   ├── Faq.astro
│   │   ├── Footer.astro
│   │   └── ui/
│   │       ├── TbdBadge.astro
│   │       ├── Button.astro
│   │       └── SectionHeading.astro
│   ├── content/
│   │   ├── about.json
│   │   ├── schedule.json        # empty array / TBD-flagged by default
│   │   ├── speakers.json        # empty array / TBD-flagged by default
│   │   ├── team.json
│   │   ├── faq.json
│   │   └── gallery.json
│   ├── styles/
│   │   ├── tokens.css           # color + spacing + radius variables
│   │   └── fonts.css            # @fontsource imports
│   ├── site.config.ts           # structural config, see Section 8
│   └── pages/
│       └── index.astro          # assembles all components in order
├── scripts/
│   └── sync-assets.sh           # optional, manual, documented upstream pull helper
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── vercel.json                  # only if any non-default settings are needed
├── LICENSE                      # keep existing MIT license
└── README.md                    # setup, editing-content guide for non-coders, deploy notes
```

(If the team ultimately picks Next.js static export or plain Vite instead of Astro, keep this same shape — `components/`, `content/`, one `site.config`, one `styles/tokens` file — the folder names are the part that matters, not the framework.)

---

## 8. `site.config.ts` — sketch

Give the assistant this shape as a starting point (fill in real values, keep everything else importing from here):

```ts
export const siteConfig = {
  event: {
    name: "Qiskit Fall Fest 2026 — KNUST",
    year: 2026,
    theme: "A Decade of Quantum on the Cloud",
    tagline: "Celebrating 10 years of quantum computing on the cloud.",
  },
  dates: {
    start: null,        // ISO date string once confirmed, else null → renders TBD
    end: null,
    registrationDeadline: null,
  },
  format: {
    mode: "virtual",              // "virtual" | "hybrid"
    platform: "Microsoft Teams",  // kept as a single editable string
    showLocalMeetup: true,        // toggles the Kumasi-area meetup callout
    localMeetupNote: "Local watch-party details TBD for participants near Kumasi.",
  },
  links: {
    register: "https://lu.ma/REPLACE_ME",
    discordInviteVisible: false,   // if false, show "sent after registration" copy instead of a link
    discordInviteUrl: "",          // only used if discordInviteVisible is ever set true
    email: "REPLACE_ME@example.com",
    socials: {
      twitter: "",
      linkedin: "",
      instagram: "",
    },
  },
  features: {
    showGallery: false,   // last year's screenshots, optional
    showSchedule: true,   // section always renders; content inside is TBD-safe either way
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Theme", href: "#theme" },
    { label: "Schedule", href: "#schedule" },
    { label: "Speakers", href: "#speakers" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;
```

Every component pulls from `siteConfig` (and the `content/*.json` files) instead of inlining these values — that's the whole propagation mechanism the user asked for.

---

## 9. Registration & Discord handling specifics

- **Register/Apply button:** label from config (e.g. "Register on Luma"), `href = siteConfig.links.register`, `target="_blank" rel="noopener noreferrer"`. Reuse **one** `<Button>`/`<RegisterCta>` component everywhere the CTA appears (header, hero, dedicated Register section) — do not hand-roll the button markup three times.
- **Optional Luma embed:** if the team wants the actual Luma checkout inline (not just a link-out), use Luma's official "Embed" iframe snippet from the event's Share panel — implement it as an isolated component (`LumaEmbed.astro`) so it can be swapped or removed without touching layout code.
- **Discord:** default state is `discordInviteVisible: false` → the Community section shows explanatory copy ("Our Discord is where all event communication happens. The invite link is sent to your email after you register.") instead of a link. If the team later decides to make it public, flipping one boolean plus adding the URL is the entire change.

---

## 10. Build phases (suggested order for the assistant)

1. **Scaffold** — init the chosen framework, Tailwind, fonts, folder structure from Section 7, empty `site.config.ts` and `content/*.json` with placeholder/TBD-safe values.
2. **Design tokens & layout shell** — colors, typography, `BaseLayout`, header/footer, responsive nav.
3. **Static sections** — Hero, About, Theme/Timeline (using vendored assets), Format & Venue, Organizers/Team, Footer.
4. **Data-driven sections** — Schedule, Speakers, FAQ, Gallery (flagged off by default) — build the TBD/empty states first, real content can drop in later without touching these components.
5. **CTA & community** — Register button/embed, Discord section copy, sticky header CTA.
6. **Assets pass** — pull the shortlisted files from `materials-resources` per Section 5, add `SOURCE.md`, wire into the Theme section and any icon/illustration slots.
7. **QA pass** — responsive check (mobile-first, since many participants may join info-checking from phones), color-contrast/accessibility pass, broken-link check, Lighthouse pass (target: fast, low-JS).
8. **Deploy** — connect the GitHub repo to a new Vercel project (Hobby/free tier), confirm the build command/output directory, enable automatic deploys on `main` + preview deploys on PRs, no environment variables/secrets needed since there's no backend.
9. **README for non-coders** — short "how to update the schedule/speakers/links" guide pointing at the specific `content/*.json` / `site.config.ts` fields, written for a team member with no dev setup, editing directly in the GitHub web UI.

---

## 11. Guardrails / things to avoid

- No hardcoded copies of dates, links, or colors outside `site.config.ts` / `content/*` / the token files.
- No serverless functions, database, or paid API calls — everything must remain buildable as pure static output.
- No live/runtime dependency on `materials-resources` staying online (no submodule, no runtime fetch from that repo).
- No public Discord invite link in code or content unless `discordInviteVisible` is explicitly turned on.
- Don't recolor, crop, or otherwise alter the Qiskit/IBM logotype itself — only illustrative/decorative assets are fair game for restyling.
- Keep the Gallery section fully optional and easy to delete/disable — don't make other sections depend on it existing.

---

## 12. Open questions for the team (assistant should surface these, not silently guess)

- Final event dates and whether they're locked yet.
- Confirmed Luma event URL.
- Whether the Discord invite should ever be public, or always gated behind registration.
- Whether a custom domain will be purchased (affects only DNS config, not the app itself — Vercel's free `*.vercel.app` subdomain works indefinitely at $0 either way).
- Final palette choice within the IBM Quantum/Qiskit visual family (assistant should propose 2–3 options for the team to pick from rather than choosing unilaterally).
