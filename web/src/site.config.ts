export const siteConfig = {
  event: {
    name: "Qiskit Fall Fest 2026 — KNUST",
    shortName: "QFF KNUST 2026",
    year: 2026,
    theme: "A Decade of Quantum on the Cloud",
    tagline: "Celebrating 10 years of cloud quantum computing (2016 → 2026).",
    description: "Join the Qiskit KNUST Student Chapter for an immersive quantum computing event featuring technical workshops, hands-on quantum programming, expert talks, and community hackathons.",
    host: "Qiskit KNUST Student Chapter",
    department: "Mathematical & Computational Physics Unit, Department of Physics, KNUST",
    location: "Kumasi, Ghana",
  },
  dates: {
    start: "2026-11-02",
    end: "2026-11-06",
    registrationDeadline: "2026-11-01",
    displayRange: "November 02, 2026 – November 06, 2026",
  },
  format: {
    mode: "virtual" as const, // "virtual" | "hybrid" | "in-person"
    platform: "Microsoft Teams", // Configurable streaming platform
    showLocalMeetup: true, // Toggles local watch-party callout for Kumasi students
    localMeetupTitle: "Kumasi In-Person Watch Party",
    localMeetupNote: "Informal campus watch parties and lab hackathons at KNUST Physics Unit for Kumasi-based participants.",
  },
  links: {
    register: "https://lu.ma/qff-knust-2026", // Luma event registration URL
    discordInviteVisible: false, // If false, displays copy explaining invite is sent post-registration
    discordInviteUrl: "https://discord.gg/example-knust-qiskit", // Activated only if discordInviteVisible is true
    email: "qiskit.knust@gmail.com",
    githubRepo: "https://github.com/qiskit-fall-fest-knust",
    qiskitGlobal: "https://qiskit.org",
    ibmQuantum: "https://quantum.ibm.com",
    socials: {
      twitter: "https://x.com/qiskit_knust",
      linkedin: "https://linkedin.com/company/qiskit-knust",
      github: "https://github.com/qiskit-community",
    },
  },
  features: {
    showGallery: true, // Displays last year's event highlights and screenshots
    showSchedule: true, // Schedule section renders with elegant TBD-safe layout
    showSpeakers: true, // Speakers section renders with announce-ready layout
    showThemeTimeline: true, // Interactive 2016 -> 2026 Decade of Quantum timeline
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Theme", href: "#theme" },
    { label: "Schedule", href: "#schedule" },
    { label: "Speakers", href: "#speakers" },
    { label: "Organizers", href: "#organizers" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;
