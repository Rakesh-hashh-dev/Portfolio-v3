# Product Requirements Document
## Rakesh Kumar Behera — MBA Portfolio Website

**Version:** 1.0  
**Date:** June 2026  
**Author:** Rakesh Kumar Behera  
**Live URL:** https://rakesh-portfolio-mba.netlify.app

---

## 1. Overview

### 1.1 Purpose
A personal MBA portfolio website that serves as a digital resume and professional identity hub for Rakesh Kumar Behera — MBA Candidate at IIM Sambalpur (2025–2027), ex-TCS System Engineer, and current Strategy & Product Intern at Mr Gardenr.

### 1.2 Primary Goal
Convert recruiter and interviewer visits into actionable next steps (resume download, LinkedIn connection, email outreach) by communicating the candidate's business value within the first 30 seconds of landing.

### 1.3 Target Audience
| User | Goal |
|---|---|
| Campus recruiters | Verify candidate profile, download resume, schedule interview |
| Industry HR / hiring managers | Assess work history, skills, and cultural fit |
| Faculty / peers | Browse case studies and project execution |
| Internship coordinators | Confirm availability and skillset for Summer 2026 |

---

## 2. Business Requirements

### 2.1 Success Metrics
- Resume PDF download rate > 15% of unique visitors
- Contact/LinkedIn click-through rate > 10%
- Avg. session duration > 90 seconds
- Lighthouse Performance score ≥ 90
- Zero broken links or 404 errors on internal navigation

### 2.2 Constraints
- No backend or CMS — all content managed via `src/lib/profile.ts`
- Must work as a static export (no server-side rendering at runtime)
- Must be deployable via Netlify free tier
- Must pass accessibility audit score ≥ 90

---

## 3. Pages & Features

### 3.1 Page Map
| Route | Page | Purpose |
|---|---|---|
| `/` | Home | First impression, stats, CTAs, recruiter-fit cards |
| `/about` | About | Background, education, impact metrics, profile story |
| `/experience` | Experience | Full work history with roles, companies, periods |
| `/case-studies` | Case Studies | 4 project walkthroughs with outcomes and methodology |
| `/skills` | Skills | Skill groups, tools, certifications |
| `/contact` | Contact | Contact details, availability badge, social links |

### 3.2 Feature Requirements

#### Navigation
- Fixed top navbar: transparent at top, glass blur on scroll
- Links: Home, About, Experience, Case Studies, Skills, Contact
- Active link: animated cyan underline (spring transition)
- Right side: Theme toggle + Connect (mailto) button
- Mobile: bottom dock with icons + labels
- Desktop sidebar: LinkedIn, Email, Resume quick-links

#### Hero (Homepage)
- Availability badge: "Open to Internships · Summer 2026" with live pulse dot
- Name headline with gradient treatment
- Tagline: Strategy · Execution · Measurable Growth
- Profile summary paragraph
- CTAs: "View Case Studies" (primary) + "Download Résumé" (ghost)
- Stats strip: 25+ teams, 10+ sponsors, 1,000+ participants, 40% reach lift
- Portrait photo with floating credential badges (IIM Sambalpur, TCS · 3.9 yrs, Active Intern)
- Impact Snapshot card with animated progress bars
- Decorative: concentric rings SVG + dot grid background

#### Homepage Sections
- Track record marquee: animated horizontal scroll of institutions/roles
- "What I Bring" grid: 4 recruiter-fit value cards with icons
- "Explore by area" grid: 3 navigation cards linking to inner pages
- Signal strip: 3 quick-access trust signals

#### Inner Pages (About, Experience, Skills, Case Studies, Contact)
- Page intro header: eyebrow + large headline + pull-quote description
- Framer Motion entrance animations on all content sections
- `whileInView` scroll-triggered animations for content below the fold

#### Case Studies
- Filter bar: All / Marketing / Operations / Leadership / Strategy
- Result count badge
- Cards with outcome highlight, summary, and bullet points

#### Skills
- 5 skill group cards with icons and skill tags
- Certifications panel with list
- Alternating cyan/purple accent styling

#### Contact
- Available badge with pulse animation
- Email, LinkedIn, Resume links
- Ambient glow decoration behind headline

#### Footer
- Brand + tagline left
- Explore links + Connect links in 2-column grid
- Copyright + motto bottom row

### 3.3 Global Features
| Feature | Detail |
|---|---|
| Dark / Light theme | Toggle in navbar; persisted via localStorage; default light |
| Page transitions | 180ms fade + 5px upward slide on route change |
| Animated background | Canvas particle network + two floating gradient glows |
| Noise texture overlay | Subtle grain for depth |
| CSS grid background | Faint line grid visible at page top |
| Scroll progress bar | Thin accent line at top of viewport |
| Responsive | Mobile-first; breakpoints at sm/md/lg/xl |
| Accessibility | Skip-to-content link; ARIA labels on dock icons; semantic HTML |

---

## 4. Design System

### 4.1 Typography
| Role | Font | Usage |
|---|---|---|
| Display / headings | Fraunces (serif) | Hero h1, page titles, footer brand |
| Body / UI | Inter | All other text |

### 4.2 Color Tokens
| Token | Dark Mode | Light Mode | Usage |
|---|---|---|---|
| `--theme-surface` | `#080b18` | `#f5f3ff` | Page background, cards |
| `--theme-contrast` | `#ffffff` | `#0f172a` | Primary text |
| `--theme-primary` | `#4f8fff` | `#2563eb` | CTA buttons |
| `--theme-accent-cyan` | `#93c5fd` | `#0369a1` | Active states, highlights |
| `--theme-accent-purple` | `#c084fc` | `#7c3aed` | Secondary accents |

### 4.3 Component Classes
- `.glass-card` — frosted glass surface with backdrop-blur and border
- `.text-gradient` — white → cyan → purple gradient text
- `.text-gradient-cyan` — cyan → purple gradient text
- `.eyebrow` — dash + uppercase label used above section headings
- `.section-band` — alternating section background with block borders
- `.card-glow` — card with cyan glow + lift on hover
- `.btn-primary` / `.btn-ghost` — CTA button variants

---

## 5. Technical Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 16 (App Router) | Static export, file-based routing, React Server Components |
| Styling | Tailwind CSS v4 | CSS variable theming, utility-first |
| Animation | Framer Motion 12 | `whileInView`, `layoutId`, spring transitions |
| Icons | Lucide React | Consistent SVG icon set |
| Fonts | Google Fonts via Next.js | Inter + Fraunces with `font-display: swap` |
| Deployment | Netlify (static) | Free tier, instant CDN, custom domain support |
| Build output | `output: 'export'` | Static HTML/CSS/JS, no serverless required |

### 5.1 Build & Deploy
```bash
# Local dev
npm run dev          # Next.js webpack dev server → localhost:3000

# Production build + deploy
npm run build        # outputs to ./out (static export)
netlify deploy --prod --dir=out
```

### 5.2 Known Platform Notes
- `next build` requires `--webpack` flag on this machine (native SWC binaries incompatible with the local Node version)
- RSC payload files are generated as directories on Windows vs flat files on Linux; `netlify.toml` contains redirects to reconcile this
- `NETLIFY_NEXT_PLUGIN_SKIP=true` required in build env to prevent the Netlify Next.js plugin from erroring on the static export

---

## 6. Content Management

All content lives in `src/lib/profile.ts`. To update any information:

| Data | Export | Fields |
|---|---|---|
| Bio / links | `profile` | name, title, email, linkedin, resume, summary |
| Hero stats | `stats` | value, label |
| Work history | `experience` | period, role, company, location, detail |
| Education | `education` | program, school, period, detail |
| Case studies | `caseStudies` | title, category, outcome, summary, points |
| Skill groups | `skillGroups` | title, icon, skills[] |
| Certifications | `certifications` | string[] |
| Impact metrics | `impactMetrics` | label, value, width (progress bar %) |

After editing `profile.ts`, run `npm run build && netlify deploy --prod --dir=out` to push changes live.

---

## 7. Performance Targets

| Metric | Target | Current |
|---|---|---|
| Lighthouse Performance | ≥ 90 | 91 |
| Lighthouse Accessibility | ≥ 90 | 96 |
| Lighthouse Best Practices | ≥ 90 | 96 |
| Lighthouse SEO | 100 | 100 |
| First Contentful Paint | < 2.0s | 1.7s |
| Largest Contentful Paint | < 2.5s | 3.2s |
| Total Blocking Time | < 200ms | 110ms |
| Cumulative Layout Shift | < 0.1 | 0 |

### 7.1 Improvement Areas (Backlog)
- LCP 3.2s — hero image could be served with `<link rel="preload">` and LQIP placeholder
- Unused JS — Framer Motion tree-shaking could reduce ~47 KB
- Main thread — AnimatedBackground canvas is the largest contributor to 4.4s main thread time; could be disabled on low-end devices via `prefers-reduced-motion`

---

## 8. Out of Scope (Current Version)

- Blog or long-form writing section
- Password-protected case study deep dives
- Contact form with backend / email service
- CMS integration (Contentful, Sanity, etc.)
- Analytics / tracking (Google Analytics, Plausible)
- Multi-language support
- PDF resume auto-generation from profile data
