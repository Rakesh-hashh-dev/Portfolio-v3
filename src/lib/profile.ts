import {
  BarChart3,
  BriefcaseBusiness,
  LineChart,
  Megaphone,
  Network,
  Presentation,
  SearchCheck,
  Target,
  TrendingUp,
} from "lucide-react";

export const profile = {
  name: "Rakesh Kumar Behera",
  title: "MBA Candidate | Strategy, Consulting & Product",
  location: "Bhubaneswar, Odisha, India",
  email: "rk821604@gmail.com",
  resume: "/Profile.pdf",
  linkedin: "https://www.linkedin.com/in/rakesh-kumar-behera-rk821604",
  summary:
    "44 months of Fortune 500-grade product delivery at TCS — managing 90K-user enterprise systems, maintaining 100% SLA, and leading a 5-member client-side tech team — now combined with IIM Sambalpur MBA training in strategy, consulting, and product management.",
};

export const highlights = [
  { label: "MBA", value: "IIM Sambalpur", detail: "2025 – 2027" },
  { label: "Background", value: "TCS System Engineer", detail: "44 months · Fortune 500" },
  { label: "Location", value: "Bhubaneswar, India", detail: null },
];

export const impactMetrics = [
  { label: "SLA achievement at TCS", value: "100%", width: "100%" },
  { label: "YOY job failure reduction", value: "30%", width: "68%" },
  { label: "Enterprise users supported", value: "90K+", width: "88%" },
  { label: "Campus participation growth", value: "~30%", width: "60%" },
];

export const experience = [
  {
    period: "Apr 2026 – Jun 2026",
    role: "Strategy, Marketing & Product Management Intern",
    company: "Mr Gardenr",
    location: "Ahmedabad, Gujarat",
    detail:
      "Covered the full spectrum of a growing premium landscaping business — from strategy to shipping. Conducted end-to-end market research on the urban gardening and home-transformation space, including competitive analysis, supply-chain mapping, and strategic recommendations for leadership. Evaluated CRM platforms, productivity suites, and customer-engagement tools to inform tech stack decisions. Designed marketing performance dashboards to surface key metrics for decision-making. Independently designed and shipped a production-grade marketing-and-booking website (React · Vite · TailwindCSS) backed by a custom no-code CMS, and built an automated sales-visit management system to streamline field operations.",
  },
  {
    period: "Aug 2025 – Present",
    role: "Secretary",
    company: "AlphaBeta — The Product Management Club, IIM Sambalpur",
    location: "Sambalpur",
    detail:
      "Spearheading Product Decipher and Ultimate PM competitions — designing multi-platform promotional campaigns (LinkedIn, Instagram, Unstop) that drove 500+ student participants across B-schools. End-to-end ownership of Udbhavanam, the club's flagship event, covering guest coordination, logistics, and on-ground execution.",
  },
  {
    period: "Jan 2026 – Mar 2026",
    role: "IT Consultant",
    company: "SunsysTechsol Pvt. Ltd.",
    location: "Bhubaneswar",
    detail:
      "Short-term consulting engagement connecting technical delivery requirements with client business processes and operational needs.",
  },
  {
    period: "Oct 2021 – Jun 2025",
    role: "System Engineer → Team Lead",
    company: "Tata Consultancy Services",
    location: "India",
    detail:
      "Delivered product application support and frontend development for a $29B revenue Fortune 500 client. Progressed from trainee to Team Lead managing a 5-member client-side tech team, serving 90K+ users. Maintained 100% SLA across all incident resolutions and drove a 30% YOY reduction in job process failures through proactive root-cause diagnostics. Recognised with On The Spot Award (×2), Star Team Award, and Special Initiative Award.",
  },
];

export const education = [
  {
    program: "Master of Business Administration",
    school: "Indian Institute of Management Sambalpur",
    period: "June 2025 – May 2027",
    detail:
      "Building depth in business strategy, consulting frameworks, product management, and analytics at one of India's premier management institutions.",
  },
  {
    program: "Bachelor of Technology",
    school: "Indira Gandhi Institute of Technology, Sarang",
    period: "August 2017 – June 2021",
    detail:
      "Graduated with 73.2% aggregate (BPUT). Held leadership roles as Secretary of Production Engineering Society and Chief Coordinator of Drishya 360 creative team. Represented IGIT in inter-college basketball.",
  },
];

export const philosophy = {
  eyebrow: "Personal Philosophy & Leadership",
  quote:
    "Great strategy is nothing without execution. I believe in data-driven decisions, empowering teams, and creating sustainable value through continuous improvement.",
};

export const stats = [
  { value: "90K+", label: "Users on Fortune 500 product supported" },
  { value: "100%", label: "SLA hit across all incident resolutions" },
  { value: "30%", label: "YOY job process failure reduction" },
  { value: "3×", label: "TCS performance awards recognised" },
];

export const caseStudies = [
  {
    id: 1,
    slug: "fortune-500-sla",
    title: "Fortune 500 SLA & Process Excellence",
    category: "Strategy",
    icon: Network,
    outcome: "100% SLA · 30% YOY failure reduction",
    org: "Tata Consultancy Services",
    duration: "Oct 2021 – Jun 2025",
    summary:
      "As Team Lead at TCS, took full ownership of product support for a $29B Fortune 500 client — managing a 5-member tech team across enhancement delivery, incident resolution, and continuous process improvement for 90K+ enterprise users.",
    points: [
      "Maintained 100% SLA across all incident resolutions for 3+ years",
      "Reduced job process failures 30% YOY via root-cause diagnostics",
      "Managed 30+ admin access levels — ensuring security, compliance, and audit integrity",
    ],
    star: {
      situation:
        "Joined TCS's application support team serving a $29B Fortune 500 client whose enterprise product — used by 90,000+ employees globally — was experiencing a high volume of job process failures and recurring SLA pressure. The team operated under strict incident response SLAs with limited bandwidth for proactive improvement, and root-cause visibility across failure types was poor.",
      task: "Deliver consistent, high-quality application support while progressively taking on team leadership responsibilities — ultimately managing a 5-member client-side tech team. The mandate: reduce recurring failures, maintain 100% SLA compliance, and serve as the technical bridge between client stakeholders and delivery.",
      action: [
        "Built a structured root-cause analysis framework to classify incident types and identify systemic failure patterns, replacing ad-hoc investigation with repeatable diagnostics",
        "Introduced proactive job monitoring protocols that surfaced potential failures before they escalated to SLA-impacting incidents",
        "Standardised admin access management across 30+ role levels, strengthening security posture and audit integrity",
        "Mentored team members on escalation protocols and client communication standards",
        "Collaborated with the client on enhancement delivery — translating business requirements into frontend development sprints",
      ],
      result: [
        "Maintained 100% SLA compliance across all incident resolutions for 3+ years — zero SLA breaches",
        "Achieved 30% year-over-year reduction in job process failures through systematic root-cause diagnostics",
        "Earned four performance recognitions in 44 months: On The Spot Award (×2), Star Team Award, Special Initiative Award",
        "Progressed from System Engineer trainee to Team Lead managing a 5-member client-side tech team",
      ],
    },
  },
  {
    id: 2,
    slug: "alphabeta-pm-competitions",
    title: "AlphaBeta PM Competitions",
    category: "Marketing",
    icon: Megaphone,
    outcome: "500+ students engaged across B-schools",
    org: "AlphaBeta — The PM Club, IIM Sambalpur",
    duration: "Aug 2025 – Present",
    summary:
      "Designed and executed the full promotional strategy for Product Decipher and The Ultimate PM — building a multi-platform outreach funnel that drew participants from B-schools and undergraduate colleges nationally.",
    points: [
      "Cross-platform campaigns: LinkedIn, Instagram, and Unstop",
      "Structured registration and participant engagement funnel",
      "Improved inter-college competition quality and completion rates",
    ],
    star: {
      situation:
        "AlphaBeta, IIM Sambalpur's Product Management Club, aimed to run two national PM competitions — Product Decipher and The Ultimate PM — to build the club's visibility among B-school students. There was no existing outreach playbook, no registration infrastructure, and no established brand presence on competition platforms like Unstop.",
      task: "Design and execute the full promotional strategy to drive qualified participation from B-schools and undergraduate colleges across India — building the outreach funnel from scratch with no prior template to follow.",
      action: [
        "Audited available platforms (LinkedIn, Instagram, Unstop) and built a platform-specific content strategy matching each channel's audience — professional framing for LinkedIn, visual storytelling for Instagram, structured listings on Unstop",
        "Designed the participant funnel: competition listing setup, eligibility criteria, communication cadence, and confirmation workflows",
        "Created campaign content in coordination with the design team, maintaining brand consistency across formats and channels",
        "Ran post-campaign review to identify what drove the highest registration conversion and codified findings for future competitions",
      ],
      result: [
        "Drove 500+ student participants from B-schools and undergraduate colleges across India",
        "Established a repeatable multi-platform outreach playbook for future AlphaBeta competitions",
        "Improved competition structure and participant experience — higher completion rates and post-event engagement than prior editions",
      ],
    },
  },
  {
    id: 3,
    slug: "udbhavanam-event-operations",
    title: "Udbhavanam — Flagship Event Operations",
    category: "Operations",
    icon: Presentation,
    outcome: "Multi-stakeholder event delivered on schedule",
    org: "AlphaBeta — The PM Club, IIM Sambalpur",
    duration: "Aug 2025 – Present",
    summary:
      "Held end-to-end ownership of AlphaBeta's flagship event Udbhavanam — from planning through execution. Coordinated speakers, guests, logistics, and on-ground teams under tight timelines with no prior playbook.",
    points: [
      "Guest and speaker coordination with clear communication protocols",
      "Logistics, venue, and resource planning built from scratch",
      "Real-time execution control — adapting to changes without disruption",
    ],
    star: {
      situation:
        "Udbhavanam is AlphaBeta's flagship annual event — a high-visibility, multi-stakeholder gathering involving external speakers, industry guests, and the full IIM Sambalpur student community. The event had to be planned and executed from scratch with tight institutional timelines, no prior operations playbook, and multiple parallel workstreams running simultaneously.",
      task: "Hold end-to-end ownership of the event — from concept through on-ground execution — ensuring all logistics, guest coordination, and delivery met institutional and stakeholder expectations with no dedicated support team.",
      action: [
        "Built the full event planning framework from zero: master timeline, workstream owners, milestone checkpoints, and contingency buffers",
        "Established structured communication protocols for external speakers and guests — briefing documents, confirmation loops, and day-of logistics coordination",
        "Created venue, resource, and logistics plans with built-in buffers for last-minute changes",
        "Briefed and coordinated on-ground teams (registration, hosting, media) with clearly defined roles and escalation paths",
        "Maintained real-time coordination on event day — adapting to deviations without disrupting the schedule",
      ],
      result: [
        "Delivered the event on schedule with positive stakeholder and faculty feedback",
        "Demonstrated full-stack event management capability — planning, coordination, and live execution — under genuine ambiguity",
        "Produced a reusable operations playbook for future Udbhavanam editions, reducing planning effort for successors",
      ],
    },
  },
  {
    id: 4,
    slug: "drishya-360-visual-campaign",
    title: "Drishya 360 — Campus Visual Campaign",
    category: "Leadership",
    icon: TrendingUp,
    outcome: "~30% digital engagement lift during Horizon-19",
    org: "IGIT Sarang",
    duration: "2018 – 2021",
    summary:
      "Led a 30+ member creative team as Chief Coordinator of Drishya 360, conceptualising and executing visual brand campaigns for IGIT's technical and cultural fests — managing photography operations, budgets, and brand output end-to-end.",
    points: [
      "Led 30+ member team across photography, design, and coordination",
      "Increased digital brand visibility during Horizon-19 and adjacent fests",
      "Full ownership of production budget and resource allocation",
    ],
    star: {
      situation:
        "IGIT Sarang's flagship technical and cultural fest, Horizon-19, lacked a structured creative and visual campaign strategy. The Drishya 360 creative collective had 30+ members across photography, design, and content — but no unified leadership, defined workflows, or brand standards. Campus digital engagement was low and inconsistent across events.",
      task: "Serve as Chief Coordinator of Drishya 360, taking ownership of visual campaign strategy and execution for Horizon-19 and adjacent fests — managing team structure, content pipeline, production budget, and final brand output.",
      action: [
        "Established clear subteam structure and role definitions across photography, graphic design, and social media coordination — removing ambiguity and enabling parallel workstreams",
        "Set visual brand standards for the fest: colour palette, typography usage, and content formats consistent across print and digital",
        "Built a content production and publication calendar aligned to the event timeline",
        "Managed the full production budget — procurement, vendor negotiations, and resource allocation — within sanctioned limits",
        "Led post-production review for quality control before all public-facing releases",
      ],
      result: [
        "~30% increase in digital engagement during Horizon-19 compared to previous editions",
        "Delivered a consistent, professionally-presented visual brand across multiple campus events",
        "Built a 30+ member team's operational capability — members carried the playbook forward into subsequent editions",
      ],
    },
  },
  {
    id: 5,
    slug: "digital-infrastructure-zero-to-live",
    title: "Digital Infrastructure from Zero to Live",
    category: "Strategy",
    icon: Network,
    outcome: "15 editable pages · ₹0/month infra · 6–10 tools consolidated into 1",
    org: "Mr Gardenr · EcoVibes Green India Pvt. Ltd.",
    duration: "Apr 2025 – Jun 2025",
    summary:
      "A 200-person, 11-office landscaping firm operated with no public website and a fragmented stack of point tools. I owned the digital backbone end to end — shipping the company's first website on a self-editable CMS at zero recurring cost, then mapping a phased CRM consolidation to retire 6–10 disconnected tools.",
    points: [
      "Sole full-stack developer for mrgardenr.in — the company's first public web presence",
      "Live-preview CMS lets non-technical staff edit all 15 pages without a single code deploy",
      "Costed a 3-phase GoHighLevel roadmap consolidating 6–10 tools into one platform",
    ],
    star: {
      situation:
        "EcoVibes ran a four-city, eleven-office premium landscaping operation entirely without a public website, while its software footprint had sprawled into six-to-ten disconnected point tools for CRM, scheduling, payroll and messaging. The absence of a credible digital front door capped lead quality, and the tool sprawl quietly taxed every team with duplicated data entry and no single source of truth.",
      task: "I was mandated to stand up the company's digital infrastructure from scratch — design, build and deploy its first public website on a foundation non-technical staff could maintain themselves — and, in parallel, evaluate the productivity and CRM landscape to chart a credible path out of tool sprawl.",
      action: [
        "Architected and shipped mrgardenr.in solo as a React 19 + TypeScript front end (Vite, Tailwind v4, Framer Motion) on an Express + MongoDB CMS backend",
        "Built a JWT-secured, live-preview visual editor so non-technical staff could edit all 15 pages without code deployments",
        "Engineered a multi-step booking engine with atomic slot reservation to structurally prevent double-booking",
        "Deployed on a fully managed, git-driven CI stack (Vercel + Render + Cloudinary) carrying ₹0/month infrastructure cost",
        "Benchmarked productivity suites (Google Workspace vs Zoho), payroll tools, and CRM platforms (Sell.do vs GoHighLevel), then mapped a 3-phase, 30+ feature rollout",
      ],
      result: [
        "Delivered the company's first public website — 15 fully self-editable pages — at ₹0/month recurring infrastructure cost",
        "Eliminated the deployment bottleneck: every content change now ships through staff, not engineering",
        "Recommended Google Workspace for the 200-user, 11-office org with Zoho as a costed budget alternative",
        "Produced a 3-phase GoHighLevel roadmap to consolidate 6–10 tools into a single CRM, pipeline and automation platform",
      ],
    },
  },
  {
    id: 6,
    slug: "pipeline-analytics-field-automation",
    title: "Pipeline Analytics & Field Automation",
    category: "Operations",
    icon: BarChart3,
    outcome: "₹8L pipeline live-tracked · 69 leads · 6.51-day avg ageing",
    org: "Mr Gardenr · EcoVibes Green India Pvt. Ltd.",
    duration: "Apr 2025 – Jun 2025",
    summary:
      "Sales ran on disconnected spreadsheets and field coordination on manual reminder calls. I built a two-tier CRM feeding live Looker Studio dashboards and an Apps Script automation layer — turning a spreadsheet-era process into a tracked ₹8,00,000 pipeline and a self-running field cadence.",
    points: [
      "Two-tier Google Sheets CRM: 18 fields per lead across a 9-stage funnel",
      "Two Looker Studio dashboards — live pipeline plus stock and delivery across 4 warehouses",
      "Gravity: 5 automated WhatsApp, validation and reporting touchpoints replacing manual calls",
    ],
    star: {
      situation:
        "Sales operated in the spreadsheet era — individual files with no consolidated view — while field coordination depended on manual reminder calls and end-of-month tallying that was both error-prone and invisible to management. Leadership had no live read on pipeline value, lead ageing or stock health across its four warehouses.",
      task: "I was tasked with engineering a single source of truth for the sales pipeline and removing the manual labour from daily field coordination — making the operation measurable in real time and reducing the human overhead of keeping it running.",
      action: [
        "Designed a two-tier Google Sheets CRM — individual pipelines rolling up into a consolidated master view",
        "Standardised every lead on 18 dropdown-driven fields across a 9-stage funnel (New Lead → Won/Lost)",
        "Wired two Looker Studio dashboards: a marketing master for live pipeline and an operations view for stock health and delivery across 4 warehouses, filterable by salesperson, source and stage",
        "Built Gravity, a Google Sheets + Apps Script visit-management system with 5 automated touchpoints — 7 AM WhatsApp reminders, 6 PM validation, 8 PM next-day alerts, 9 PM daily PDF report, Sunday weekly summary",
        "Rebuilt Gravity after the first single-reminder version failed field testing — iterating the design directly on user feedback",
      ],
      result: [
        "Delivered a live pipeline tracking 69 leads (42 active) worth ₹8,00,000 at handover",
        "Surfaced average lead ageing of 6.51 days as a managed, dashboard-visible metric",
        "Replaced manual reminder calls and month-end tallying with a fully automated daily and weekly cadence",
        "Gave leadership filterable, real-time visibility into pipeline and four-warehouse stock for the first time",
      ],
    },
  },
  {
    id: 7,
    slug: "market-intelligence-product-prototype",
    title: "Market Intelligence & Product Prototype",
    category: "Strategy",
    icon: SearchCheck,
    outcome: "19 competitors profiled · USD 26B market mapped · white space identified",
    org: "Mr Gardenr · EcoVibes Green India Pvt. Ltd.",
    duration: "Apr 2025 – Jun 2025",
    summary:
      "To pressure-test where Mr Gardenr could win, I profiled 19 competitors across four strategic lenses and sized a USD 26B home-decor market — surfacing an unclaimed white space in transparent, organised design-supply-install at metro scale. I then prototyped Verdana, an internal design tool, and costed the roadmap to a full 3D platform.",
    points: [
      "19 companies profiled across direct, indirect, substitute and new-entrant lenses",
      "USD 25.5–26.7B market sized; white space found in organised, transparently-priced install",
      "Verdana prototype: regression-based template matcher with built-in quotation automation",
    ],
    star: {
      situation:
        "Mr Gardenr was scaling premium urban landscaping without a clear, evidence-based read on its competitive position or the size of the prize. Pricing in the category was opaque across the board, and there was no validated view on where an organised player could carve defensible share.",
      task: "I was charged with building the market intelligence to position the company sharply — sizing the opportunity, mapping the competitive field, and translating the findings into a concrete product bet the company could prototype and cost.",
      action: [
        "Profiled 19 companies across four strategic lenses — direct, indirect, substitutes and new entrants",
        "Sized the India home-decor market at USD 25.5–26.7B (2024, projected to nearly double by 2033), with the indoor-plant segment at ~USD 612M growing 7.4–8.45% CAGR",
        "Drew positioning lessons from Livspace (USD 450M+ raised, ~45-day modular delivery, 5M+ SKUs) and LifeWall (portfolio depth and testimonials as trust currency)",
        "Identified transparent package pricing as the clearest opening — no competitor publishes it — and an unfilled white space for organised design-supply-install at metro scale",
        "Prototyped Verdana, an internal tool recommending garden templates from project inputs via a regression-based matcher, with a drag-and-drop editor and built-in quotation automation",
      ],
      result: [
        "Delivered a 19-company competitive map and USD 26B market sizing as the company's first structured market intelligence",
        "Pinpointed transparent pricing and organised metro-scale install as the sharpest positioning white space",
        "Shipped a working Verdana prototype linking project inputs to template recommendations and instant quotes",
        "Costed a 3-tier 3D-platform roadmap — no-code (₹50K–1.5L, 4–8 wks), hybrid (₹4.8L–9.6L, 4–6 mo), full custom (₹49L–53L, 8–12 mo) — and recommended no-code validation with 50–100 beta users first",
      ],
    },
  },
];

export const skillGroups = [
  {
    title: "Business Strategy",
    short: "Strategy",
    level: 88,
    icon: Target,
    skills: ["Strategic planning", "Consulting frameworks", "Client relationship management", "Market research", "Performance management"],
  },
  {
    title: "Operations & Process",
    short: "Operations",
    level: 92,
    icon: BriefcaseBusiness,
    skills: ["Operations management", "Lean Six Sigma (Green Belt)", "SLA & incident management", "Process improvement", "Project management"],
  },
  {
    title: "Marketing",
    short: "Marketing",
    level: 80,
    icon: Megaphone,
    skills: ["Marketing strategy", "Multi-platform campaigns", "Stakeholder engagement", "Event marketing", "Brand visibility"],
  },
  {
    title: "Analytics & Technology",
    short: "Analytics",
    level: 85,
    icon: BarChart3,
    skills: ["Microsoft Power BI (PL-300)", "Azure cloud administration (AZ-104)", "Data analysis", "Financial analysis", "Data-driven decisions"],
  },
  {
    title: "Product Management",
    short: "Product",
    level: 82,
    icon: TrendingUp,
    skills: ["Product strategy", "User research", "Roadmapping", "Go-to-market planning", "Feature prioritization"],
  },
];

export const radarMethodology =
  "Competency is gauged across core domains using a blend of Fortune 500 delivery experience, measurable project impact, and continuous certification-backed learning.";

export const certifications = [
  "Lean Six Sigma Green Belt — Grant Thornton (2026)",
  "Microsoft Certified: Data Analyst Associate — PL-300 (2025)",
  "Oracle Cloud Infrastructure 2024 Certified Foundations Associate (2025)",
  "Microsoft Certified: Azure Administrator Associate — AZ-104 (2024)",
  "Microsoft Certified: Azure Fundamentals — AZ-900 (2022)",
  "AWS Academy Graduate — Cloud Foundations (2018)",
];

export const homeCards = [
  {
    title: "Experience",
    href: "/experience",
    icon: BriefcaseBusiness,
    text: "44 months at a Fortune 500 client via TCS, IT consulting, and IIM Sambalpur leadership.",
    cta: "View timeline",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    icon: Presentation,
    text: "Enterprise SLA delivery, campus marketing campaigns, and 30+ member team leadership.",
    cta: "Read studies",
  },
  {
    title: "Skills",
    href: "/skills",
    icon: LineChart,
    text: "Strategy, operations, analytics, product management — backed by 6 industry certifications.",
    cta: "See skills",
  },
];

export const recruiterFit = [
  {
    title: "Consulting-ready problem solving",
    icon: SearchCheck,
    text: "Structured thinking built over 44 months of Fortune 500 delivery, reinforced by Lean Six Sigma Green Belt and MBA strategy and analytics coursework.",
  },
  {
    title: "Operations execution",
    icon: Network,
    text: "Proven 100% SLA management, 30% YOY process failure reduction, and end-to-end event ownership from logistics planning through live delivery.",
  },
  {
    title: "Marketing ownership",
    icon: Megaphone,
    text: "Multi-platform campaign design across LinkedIn, Instagram, and Unstop — with measurable 500+ student participation outcomes.",
  },
  {
    title: "Technical-business bridge",
    icon: BarChart3,
    text: "Azure-certified administrator, Power BI-certified analyst, and ex-frontend engineer — translating technical systems into strategic business action.",
  },
];
