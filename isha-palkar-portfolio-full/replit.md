# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Portfolio (`artifacts/portfolio`) — Preview path: `/`
Isha Palkar's interactive portfolio website with a fully immersive "Eco Vintage Scrapbook Collage" theme.

**Design System:**
- **Fonts**: Playfair Display (headings), Caveat (handwritten accents), Inter (body)
- **Palette**: Sage green `hsl(123 14% 49%)`, cream `hsl(40 50% 93%)`, terracotta `hsl(21 42% 55%)`, warm brown `hsl(16 41% 13%)`
- **Style**: Torn paper cards, washi tape, sticky notes, floating scrapbook elements, asymmetric layouts, paper grain texture overlay

**Multi-page structure (wouter routing):**
- `/` — Home (Hero + all sections with TornPaperDivider color bands)
- `/about` — Full About page with alternating timeline, values, and stats
- `/projects` — All 6 projects with category filter (All / AI/ML / Multi-Agent / Full Stack / Web Dev)
- `/projects/:id` — Project detail page with case study, highlights, tech stack, related projects
- `/skills` — Skills page with toggle: Sticker View (hover-animated tags) / Progress View (animated bars)
- `/contact` — Contact page with social links panel + handwritten notebook form

**Key components:**
- `src/data/projects.ts` — Single source of truth for all 6 projects
- `src/components/TornPaperDivider.tsx` — SVG torn paper strip between sections
- `src/components/ScrapbookDecorations.tsx` — WashiTape, StickyNote, Pin, FloatingLeaf, FloatingFlower, ScrapbookCornerTape
- `src/components/Navbar.tsx` — Active-page indicator with animated underline (wouter Link)
- `src/pages/Home.tsx` — Wires all sections with colored torn paper bands
- `src/scenes/HeroScene.tsx` — 3D React Three Fiber canvas with CSS fallback (WebGL detection)

**Key dependencies:**
- `@react-three/fiber`, `@react-three/drei`, `three` — 3D hero scene
- `framer-motion` — all animations (scroll, hover, floating)
- `wouter` — client-side routing
- `emailjs-com` — contact form (configure via `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` env vars)

**Projects in data:**
1. Legal Clause AI Assistant (AI/ML) — RAG + LangChain + FAISS
2. Edge (Multi-Agent) — LangGraph + Gemini AI e-commerce
3. Arogyasaathi (AI/ML) — Gemini + Imagen health videos
4. InterviewPrep (Full Stack) — Vertex AI multimodal mock interviews
5. Exam Management ERP (Web Dev) — Django + NLP question generation
6. Muskurate Raho NGO Platform (Web Dev) — Laravel donation management

### API Server (`artifacts/api-server`) — Preview path: `/api`
Express 5 backend. Currently serves only the health check endpoint.

### Canvas (`artifacts/mockup-sandbox`) — Preview path: `/__mockup`
Design mockup sandbox.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
