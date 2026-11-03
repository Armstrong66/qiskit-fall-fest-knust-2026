# ⚛️ Qiskit Fall Fest 2026 — KNUST Edition

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Format: Virtual](https://img.shields.io/badge/Format-Virtual%20(MS%20Teams)-purple.svg)](https://teams.microsoft.com/meet/3177570426321958?p=2R5WoAeQTavtoxmVKA)
[![Dates: Nov 2--6, 2026](https://img.shields.io/badge/Dates-November%202--6%2C%202026-cyan.svg)](#-event-overview)
[![Registration: Free](https://img.shields.io/badge/Admission-100%25%20Free-emerald.svg)](https://luma.com/b5udyp52)

Welcome to the official repository for **Qiskit Fall Fest 2026 (KNUST Edition)**, hosted by the **Qiskit KNUST Student Chapter** under the Mathematical & Computational Physics Unit, Department of Physics, Kwame Nkrumah University of Science and Technology (KNUST), Kumasi, Ghana.

This repository serves as the central hub for the event website, hands-on workshop curriculum, challenge prompts, presentation slides, and hackathon guidelines.

---

## 🌟 Event Overview

- **Theme:** *A Decade in the Cloud: From Qubits to Global Access* (Celebrating 10 years of cloud quantum computing, 2016 → 2026)
- **Dates:** November 02, 2026 – November 06, 2026
- **Daily Sessions:** 3:00 PM – 5:00 PM GMT (15:00 – 17:00 GMT)
- **Primary Platform:** Virtual on [Microsoft Teams](https://teams.microsoft.com/meet/3177570426321958?p=2R5WoAeQTavtoxmVKA)
- **Registration:** Free via [Luma](https://luma.com/b5udyp52)
- **Audience:** Students, researchers, developers, and physics enthusiasts across Africa and globally. No prior quantum computing experience required.

---

## 🚀 Quickstart & Environment Setup

All workshop coding exercises and hackathon challenges use **Python** and the **Qiskit SDK**.

👉 **[Read the Complete Qiskit Setup Guide for VS Code & Jupyter Notebooks](./qiskit_setup_guide_for_vs_code_jupyter.md)**

The setup guide walks through:
- Installing Python (3.10–3.12) and Visual Studio Code
- Recommended VS Code extensions (Python, Jupyter)
- Creating and managing an isolated Python virtual environment (`.venv`)
- Installing `qiskit`, `qiskit-aer`, visualization packages, and Jupyter kernels
- Verifying your installation with an interactive Bell-state verification circuit
- Troubleshooting common environment and kernel detection issues

---

## 🗓️ 5-Day Curriculum at a Glance

Daily sessions run from **15:00 to 17:00 GMT** following a consistent operating rhythm:  
*Warmup & Icebreaker (15:00) → Main Lecture (15:10) → Live Q&A (16:00) → Hands-on Lab (16:10) → Wrap-up (16:45)*

| Day | Date | Daily Theme | Key Topics & Hands-on Lab |
|:---:|:---|:---|:---|
| **01** | Mon, Nov 2 | **Kick-Off: The Quantum Era & Hackathon Launch** | Global cloud quantum landscape, roadmap, and hackathon track walkthrough |
| **02** | Tue, Nov 3 | **Foundations: Quantum Mechanics & First Circuits** | Superposition, phase, measurement, and building a Quantum Coin Flipper with Qiskit Aer |
| **03** | Wed, Nov 4 | **Pathways & Applications: Quantum Chemistry** | Quantum careers overview, Hamiltonian formulation, and molecular simulation (VQE for $H_2$) |
| **04** | Thu, Nov 5 | **A Decade in the Cloud & Quantum GenAI** | 10-year cloud evolution, QCAT research spotlight, and 2-qubit parameterized generative modeling |
| **05** | Fri, Nov 6 | **Demo Day: Hackathon Finals & Awards** | Rapid-fire hackathon project pitch sprints, research showcase, championship quiz, and awards |

---

## 🔬 Interactive Workshop Notebooks

- **[Intro to Quantum Chemistry with VQE (`intro_to_quantum_chemistry_vqe.ipynb`)](./workshops/02-quantum-circuits-algorithms/notebooks/intro_to_quantum_chemistry_vqe.ipynb)**:
  - Complete ground-state simulation of molecular hydrogen ($H_2$) using Qiskit and SciPy COBYLA.
  - Molecular orbital reduction, Hamiltonian Pauli decomposition, and hardware-efficient parameterized ansatz.
  - Dual-panel convergence trajectory and chemical accuracy ($1.6\text{ mHa}$) evaluation.
  - Potential Energy Surface (PES) dissociation curve mapping with equilibrium bond detection ($R \approx 0.74\text{ \AA}$).
  - Fully compatible with Google Colab (one-click badge included) and VS Code Jupyter.

---

## 🏆 Hackathon & Challenge Prompts

The **KNUST Quantum Hackathon** runs concurrently throughout the week. Participants may work individually or in teams of up to 4 members:

- 💡 **[Challenge Prompts Directory](./PROMPTS/README.md)** — 10 curated problems spanning foundational algorithms, quantum games, chemistry, and generative modeling
- ⚖️ **[Judging Criteria & Rubric](./PROMPTS/JUDGING_CRITERIA.md)** — 100 base points across completion, quantum understanding, code quality, experimentation, and documentation (+10 stretch bonus)
- 🤖 **[AI Usage Policy](./PROMPTS/AI_POLICY.md)** — Guidelines for using modern AI tools responsibly as learning assistants
- 📋 **[Hackathon Track Overview](./hackathon/README.md)** — Submission instructions and track details

---

## 📂 Repository Navigation

```text
├── PROMPTS/                 # 10 Hackathon challenge prompts, judging rubrics, and AI policy
│   ├── challenges/          # Challenge specifications (01 through 10)
│   ├── JUDGING_CRITERIA.md  # Official scoring rubrics
│   ├── AI_POLICY.md         # Responsible AI usage guidelines
│   └── README.md            # Challenge index and attribution
├── workshops/               # Workshop session slides and interactive Jupyter notebooks
│   ├── 02-quantum-circuits-algorithms/notebooks/ # Hands-on VQE chemistry lab
│   └── README.md            # Workshop curriculum and lab guide
├── resources/               # Participant slides and presentation decks
│   ├── presentations/       # Slide decks (e.g. A Decade in the Cloud)
│   └── README.md            # Resources directory index
├── docs/                    # Community guidelines and event logistics
│   ├── EVENT_INFO.md        # Event metadata, dates, links, and contacts
│   ├── CODE_OF_CONDUCT.md   # Community standards and safety guidelines
│   └── CONTRIBUTING.md      # How to contribute to the chapter codebase
├── web/                     # Official event website (Astro + Tailwind CSS v3)
│   └── README.md            # Website local development and build instructions
├── qiskit_setup_guide_for_vs_code_jupyter.md  # Step-by-step local development setup guide
└── README.md                # Main repository overview (this file)
```

---

## 🌐 Event Website

The official event website is built with Astro and Tailwind CSS and automatically deployed on Vercel:
- Source code: [`/web`](./web)
- Web documentation: [`web/README.md`](./web/README.md)

---

## 🙏 Acknowledgments & Attribution

- **IBM Quantum & Qiskit Community:** For supporting the global Qiskit Fall Fest initiative and providing open-source quantum tools.
- **[QuantumKE](https://github.com/QuantumKE) (Qiskit Fall Fest Nairobi 2026):** For developing the core hackathon framework, evaluation rubric, AI policy, and foundational problem prompts (Challenges 01–08). Challenges 09 and 10 were authored by the KNUST organizing team.
- **Host Chapter:** Mathematical & Computational Physics Unit, Department of Physics, KNUST.

---

## 📬 Contact & Community

- **Email:** [qiskit.knust@gmail.com](mailto:qiskit.knust@gmail.com)
- **LinkedIn:** [Qiskit KNUST Student Chapter](https://www.linkedin.com/company/qiskit-knust)
- **X (Twitter):** [@qiskit_knust](https://x.com/qiskit_knust)
- **Meeting Link:** [Join Live on Microsoft Teams](https://teams.microsoft.com/meet/3177570426321958?p=2R5WoAeQTavtoxmVKA)
- **License:** [MIT License](./LICENSE)
