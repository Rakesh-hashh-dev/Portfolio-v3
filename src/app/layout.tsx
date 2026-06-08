import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Fraunces } from "next/font/google";
import AnimatedBackground from "@/components/layout/AnimatedBackground";
import Navigation from "@/components/layout/Navigation";
import DockNav from "@/components/layout/DockNav";
import ScrollProgress from "@/components/layout/ScrollProgress";
import PageTransition from "@/components/layout/PageTransition";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const themeScript = `
try {
  var theme = localStorage.getItem("portfolio-theme");
  var t = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = t;
  document.documentElement.style.colorScheme = t;
} catch (_) {
  document.documentElement.dataset.theme = "light";
  document.documentElement.style.colorScheme = "light";
}
`;

export const metadata: Metadata = {
  title: "Rakesh Kumar Behera | MBA Portfolio",
  description:
    "MBA candidate at IIM Sambalpur focused on business strategy, consulting, execution, and analytics.",
};

const footerLinks = [
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Case Studies", "/case-studies"],
  ["Skills", "/skills"],
  ["Contact", "/contact"],
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <a href="#main" className="skip-link">Skip to content</a>
        <ScrollProgress />
        <AnimatedBackground />
        <Navigation />
        <PageTransition>
          <div id="main" tabIndex={-1} className="outline-none">{children}</div>
        </PageTransition>
        <DockNav />

        <footer className="content-section border-t border-[var(--theme-hairline)] px-6 pt-16 pb-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
              {/* Brand */}
              <div>
                <p className="display text-2xl text-white">Rakesh Kumar Behera</p>
                <p className="mt-2 max-w-sm text-sm leading-7 text-white/50">
                  MBA Candidate at IIM Sambalpur. Turning structured analysis and
                  hands-on execution into measurable business outcomes.
                </p>
                <a
                  href="mailto:rk821604@gmail.com"
                  className="link-underline mt-5 inline-block text-sm font-medium text-accent-cyan"
                >
                  rk821604@gmail.com
                </a>
              </div>

              {/* Nav + social */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white/35">
                    Explore
                  </p>
                  <nav className="flex flex-col gap-2.5 text-sm text-white/55">
                    {footerLinks.map(([label, href]) => (
                      <a key={label} href={href} className="link-underline w-fit hover:text-white">
                        {label}
                      </a>
                    ))}
                  </nav>
                </div>
                <div>
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white/35">
                    Connect
                  </p>
                  <nav className="flex flex-col gap-2.5 text-sm text-white/55">
                    <a
                      href="https://www.linkedin.com/in/rakesh-kumar-behera-rk821604"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline w-fit hover:text-white"
                    >
                      LinkedIn
                    </a>
                    <a href="/Profile.pdf" className="link-underline w-fit hover:text-white">
                      Résumé
                    </a>
                    <a href="mailto:rk821604@gmail.com" className="link-underline w-fit hover:text-white">
                      Email
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-start gap-2 border-t border-[var(--theme-hairline)] pt-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
              <p>&copy; {new Date().getFullYear()} Rakesh Kumar Behera · All rights reserved</p>
              <p className="tracking-[0.14em] uppercase">Strategy · Execution · Measurable Growth</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
