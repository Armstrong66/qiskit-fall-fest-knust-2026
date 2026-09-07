# Qiskit Fall Fest KNUST 2026 — Official Website

Static, zero-recurring-cost website for **Qiskit Fall Fest 2026 (KNUST Edition)**, hosted by the Qiskit KNUST Student Chapter under the Mathematical & Computational Physics Unit, Department of Physics, KNUST.

Built with **Astro + Tailwind CSS** and designed for deployment on **Vercel's free Hobby tier**.

---

## ⚡ Non-Coder Content Update Guide

All website text, links, schedule entries, speakers, and team members live in plain data files. You can edit them directly in your web browser on GitHub without installing any development tools or writing code:

### 1. Update Links, Dates, Venue, & Feature Flags
Edit **[`src/site.config.ts`](./src/site.config.ts)**:
- `links.register`: Update your Luma registration link (e.g. `"https://lu.ma/your-real-slug"`).
- `dates.start` / `dates.end`: Set ISO strings once confirmed (e.g. `"2026-10-20"`), or leave as `null` to automatically render the stylish `Dates TBA` badge.
- `format.platform`: Change streaming platform label if not Microsoft Teams (e.g. `"Google Meet"` or `"Zoom"`).
- `format.showLocalMeetup`: Toggle Kumasi on-campus watch party note (`true` or `false`).
- `links.discordInviteVisible`: Toggle Discord link visibility (`true` to show link publicly, `false` to display copy that invite is sent after registration).
- `features.showGallery`: Toggle last year's event gallery section (`true` or `false`).

### 2. Update Organizing Team & Headshots (5 Organizers)
Edit **[`src/content/team.json`](./src/content/team.json)**:
- Update organizer names, titles/roles, departments, bios, and social links.
- Place custom organizer headshots inside `public/assets/knust/organizers/` and update the `"image"` path.
- The section contains disciplined dimensional scaling to ensure perfect alignment with zero visual overflow.

### 3. Update Schedule / Agenda
Edit **[`src/content/schedule.json`](./src/content/schedule.json)**:
- Set `"isTbd": false` when your agenda is locked and fill in `"days"`.
- When `"isTbd": true`, the site renders an intentional "Schedule Finalization In Progress" card with curriculum track previews.

### 4. Update Keynote Speakers & Facilitators
Edit **[`src/content/speakers.json`](./src/content/speakers.json)**:
- Set `"isTbd": false` when speakers are confirmed and list them under `"featuredSpeakers"`.

### 5. Update FAQs
Edit **[`src/content/faq.json`](./src/content/faq.json)** to add, remove, or modify questions and answers.

### 6. Update Past Event Photos / Gallery
Edit **[`src/content/gallery.json`](./src/content/gallery.json)** and add image files into `public/assets/gallery/`.

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm 9+

### Commands
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build static output for deployment
npm run build

# 4. Preview the static production build locally
npm run preview
```

---

## 🚀 Deployment to Vercel ($0 Forever)

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Framework Preset: **Astro** (auto-detected).
5. Build Command: `astro build` (default).
6. Output Directory: `dist` (default).
7. Click **Deploy**.

Every commit to `main` will automatically build and deploy the updated static site in seconds.

---

## 📄 License & Attribution

- Source code licensed under the [MIT License](./LICENSE).
- **Powered by IBM Qiskit**: Qiskit and IBM brand marks and assets are property of IBM and used in accordance with IBM Quantum Community guidelines.
