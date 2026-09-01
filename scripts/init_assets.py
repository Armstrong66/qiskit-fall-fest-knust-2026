import os

org_dir = r"C:\Users\DELL\Downloads\PROJECTS\QFF_2026\qiskit-fall-fest-knust-2026\public\assets\knust\organizers"
os.makedirs(org_dir, exist_ok=True)

organizers = [
    ("armstrong.svg", "AM", "Armstrong", "#8a3ffc", "#0f62fe"),
    ("kwame.svg", "KM", "Kwame Mensah", "#0f62fe", "#1192e8"),
    ("abena.svg", "AO", "Abena Osei", "#ee5396", "#8a3ffc"),
    ("emmanuel.svg", "EA", "Emmanuel Addo", "#009d9a", "#0f62fe"),
    ("akosua.svg", "AB", "Akosua Boateng", "#fa4d56", "#ee5396")
]

for fname, initials, name, c1, c2 in organizers:
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <linearGradient id="grad_{initials}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{c1}" />
      <stop offset="100%" stop-color="{c2}" />
    </linearGradient>
    <filter id="glow_{initials}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <rect width="200" height="200" rx="100" fill="#161b22" />
  <circle cx="100" cy="100" r="92" fill="url(#grad_{initials})" opacity="0.15" />
  <circle cx="100" cy="100" r="86" fill="none" stroke="url(#grad_{initials})" stroke-width="3" filter="url(#glow_{initials})" opacity="0.8" />
  <circle cx="100" cy="76" r="32" fill="url(#grad_{initials})" opacity="0.85" />
  <path d="M 44 165 C 44 122, 156 122, 156 165 Z" fill="url(#grad_{initials})" opacity="0.85" />
  <text x="100" y="82" font-family="'IBM Plex Sans', sans-serif" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">{initials}</text>
</svg>"""
    with open(os.path.join(org_dir, fname), "w", encoding="utf-8") as f:
        f.write(svg)
    # Also write a .png extension version so both paths resolve
    with open(os.path.join(org_dir, fname.replace(".svg", ".png")), "w", encoding="utf-8") as f:
        f.write(svg)

# KNUST Chapter Badge
knust_dir = r"C:\Users\DELL\Downloads\PROJECTS\QFF_2026\qiskit-fall-fest-knust-2026\public\assets\knust"
chapter_badge_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 70" width="260" height="70">
  <defs>
    <linearGradient id="q_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8a3ffc" />
      <stop offset="100%" stop-color="#1192e8" />
    </linearGradient>
  </defs>
  <rect width="260" height="70" rx="12" fill="#161b22" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
  <circle cx="35" cy="35" r="20" fill="url(#q_grad)" opacity="0.2" />
  <circle cx="35" cy="35" r="16" fill="none" stroke="url(#q_grad)" stroke-width="2" />
  <text x="35" y="39" font-family="'IBM Plex Mono', monospace" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">|ψ⟩</text>
  <text x="68" y="32" font-family="'IBM Plex Sans', sans-serif" font-size="14" font-weight="700" fill="#ffffff">QISKIT KNUST</text>
  <text x="68" y="48" font-family="'IBM Plex Sans', sans-serif" font-size="11" font-weight="400" fill="#a8a8a8">STUDENT CHAPTER</text>
</svg>"""

with open(os.path.join(knust_dir, "chapter-badge.svg"), "w", encoding="utf-8") as f:
    f.write(chapter_badge_svg)

print("Generated organizer SVGs and chapter badge.")
