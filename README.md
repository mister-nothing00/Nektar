# Nektar — Masseria & Agriturismo

> *"Il nettare che gli dei custodivano per sé."* — Ὅμηρος

Live site → **[nektar-nu.vercel.app](https://nektar-nu.vercel.app)**

---

## Overview

Nektar is a personal creative project — a self-initiated concept for a luxury winery and agriturismo brand with roots across four Italian territories: Umbria, Friuli Venezia Giulia, Piedmont, and Sicily.

The goal was to build a frontend-heavy, cinematic web experience that prioritizes feeling over information. No product catalog, no booking form, no price list — just the silent luxury of a brand that communicates through atmosphere, typography, and motion. Every interaction is intentional. Every animation breathes.

Built entirely from personal vision: from the design system and copy to the component architecture and animation language.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) — App Router |
| Language | TypeScript (strict mode) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Fonts | Cormorant Garamond · Cormorant SC · EB Garamond |
| Deployment | [Vercel](https://vercel.com/) |

---

## Features

**Cinematic Intro** — A full-screen animated sequence that plays on first load, built entirely with Framer Motion. Respects `prefers-reduced-motion`.

**Parallax Hero Sections** — Each page opens with a full-viewport image or video hero with scroll-driven parallax and opacity transitions via `useScroll` and `useTransform`.

**Scroll-Triggered Reveals** — Custom `RevealOnScroll` and `StaggerReveal` components handle cinematic entrance animations across every section, synchronized with the intro state via React Context.

**Particle Canvas** — An ambient particle system rendered on a `<canvas>` element, simulating embers rising from candlelight.

**Scroll Progress Bar** — A spring-animated progress indicator using Framer Motion's `useSpring`.

**Design System** — A consistent token-based palette (deep blacks, silver, and ember gold) with custom Tailwind v4 `@theme` configuration and global CSS variables.

---

## Pages

```
/             Homepage — cinematic hero with ambient video, brand intro
/vini         The wines — four labels presented as works of art
/territorio   The four territories — Umbria, Friuli, Torino, Sicilia
/cantina      The cellar — history, process, and depth
/invito       The invitation — private tasting access, by invitation only
```

---

## Project Structure

```
nektar/
├── app/                    # Next.js App Router — pages and layout
│   ├── layout.tsx          # Root layout — fonts, metadata, JSON-LD
│   ├── page.tsx            # Homepage
│   ├── vini/
│   ├── territorio/
│   ├── cantina/
│   └── invito/
├── components/
│   ├── animations/         # RevealOnScroll, StaggerReveal, InkReveal
│   ├── intro/              # CinematicIntro
│   ├── layout/             # NektarNavbar, NektarFooter
│   ├── sections/           # Page-specific section components
│   └── ui/                 # NektarSymbol, ParticleCanvas, ScrollProgressBar
├── context/
│   └── IntroContext.tsx    # Global intro state
├── public/
│   ├── images/             # Optimized WebP photography
│   └── videos/             # Hero ambient video
└── app/globals.css         # Design system tokens + Tailwind @theme
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Design Principles

**Restraint over decoration.** Every element earns its place. If it doesn't add meaning, it's removed.

**Motion as language.** Animations are slow, deliberate, and solemn. No bounces. No snappy transitions. The site breathes.

**Typography as atmosphere.** Cormorant and Garamond are not just fonts — they carry centuries of editorial weight that aligns with the brand's ancestral identity.

**Darkness as luxury.** The near-black palette (`#070707`) is not a background — it's a material. Like the walls of an ancient cellar.

---

## Author

**Francesco** — Full-Stack Developer  
[LinkedIn](https://linkedin.com/in/your-handle) · [GitHub](https://github.com/your-handle)

---

## License

MIT — feel free to take inspiration from the architecture and animation patterns. If you build something with it, a mention is appreciated.