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
    title: "Fortune 500 SLA & Process Excellence",
    category: "Strategy",
    icon: Network,
    outcome: "100% SLA · 30% YOY failure reduction",
    summary:
      "As Team Lead at TCS, took full ownership of product support for a $29B Fortune 500 client — managing a 5-member tech team across enhancement delivery, incident resolution, and continuous process improvement for 90K+ enterprise users.",
    points: [
      "Maintained 100% SLA across all incident resolutions for 3+ years",
      "Reduced job process failures 30% YOY via root-cause diagnostics",
      "Managed 30+ admin access levels — ensuring security, compliance, and audit integrity",
    ],
  },
  {
    id: 2,
    title: "AlphaBeta PM Competitions",
    category: "Marketing",
    icon: Megaphone,
    outcome: "500+ students engaged across B-schools",
    summary:
      "Designed and executed the full promotional strategy for Product Decipher and The Ultimate PM — building a multi-platform outreach funnel that drew participants from B-schools and undergraduate colleges nationally.",
    points: [
      "Cross-platform campaigns: LinkedIn, Instagram, and Unstop",
      "Structured registration and participant engagement funnel",
      "Improved inter-college competition quality and completion rates",
    ],
  },
  {
    id: 3,
    title: "Udbhavanam — Flagship Event Operations",
    category: "Operations",
    icon: Presentation,
    outcome: "Multi-stakeholder event delivered on schedule",
    summary:
      "Held end-to-end ownership of AlphaBeta's flagship event Udbhavanam — from planning through execution. Coordinated speakers, guests, logistics, and on-ground teams under tight timelines with no prior playbook.",
    points: [
      "Guest and speaker coordination with clear communication protocols",
      "Logistics, venue, and resource planning built from scratch",
      "Real-time execution control — adapting to changes without disruption",
    ],
  },
  {
    id: 4,
    title: "Drishya 360 — Campus Visual Campaign",
    category: "Leadership",
    icon: TrendingUp,
    outcome: "~30% digital engagement lift during Horizon-19",
    summary:
      "Led a 30+ member creative team as Chief Coordinator of Drishya 360, conceptualising and executing visual brand campaigns for IGIT's technical and cultural fests — managing photography operations, budgets, and brand output end-to-end.",
    points: [
      "Led 30+ member team across photography, design, and coordination",
      "Increased digital brand visibility during Horizon-19 and adjacent fests",
      "Full ownership of production budget and resource allocation",
    ],
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
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    icon: Presentation,
    text: "Enterprise SLA delivery, campus marketing campaigns, and 30+ member team leadership.",
  },
  {
    title: "Skills",
    href: "/skills",
    icon: LineChart,
    text: "Strategy, operations, analytics, product management — backed by 6 industry certifications.",
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
