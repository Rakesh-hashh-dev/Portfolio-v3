import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AnimatedBackground from "@/components/layout/AnimatedBackground";
import Navigation from "@/components/layout/Navigation";
import DockNav from "@/components/layout/DockNav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const themeScript = `
try {
  var theme = localStorage.getItem("portfolio-theme");
  document.documentElement.dataset.theme = theme === "light" ? "light" : "dark";
  document.documentElement.style.colorScheme = theme === "light" ? "light" : "dark";
} catch (_) {
  document.documentElement.dataset.theme = "dark";
  document.documentElement.style.colorScheme = "dark";
}
`;

export const metadata: Metadata = {
  title: "Rakesh Kumar Behera | MBA Portfolio",
  description:
    "MBA candidate at IIM Sambalpur focused on business strategy, consulting, execution, and analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      <body className="min-h-full flex flex-col">
        <AnimatedBackground />
        <Navigation />
        <div className="flex-1">{children}</div>
        <DockNav />
        <footer className="relative border-t border-white/6 px-6 pt-12 pb-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/18 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              {/* Brand */}
              <div>
                <p className="text-base font-bold text-white/88">Rakesh Kumar Behera</p>
                <p className="mt-1 text-sm text-white/32">MBA Candidate · IIM Sambalpur · 2025–2027</p>
                <p className="mt-2 text-xs text-white/22">Strategy · Execution · Measurable Growth</p>
              </div>
              {/* Nav links */}
              <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/38">
                {[
                  ["About",        "/about"],
                  ["Experience",   "/experience"],
                  ["Case Studies", "/case-studies"],
                  ["Skills",       "/skills"],
                  ["Contact",      "/contact"],
                ].map(([label, href]) => (
                  <a key={label} href={href} className="transition-colors hover:text-white/72">{label}</a>
                ))}
              </nav>
            </div>
            <div className="flex flex-col items-start gap-2 border-t border-white/5 pt-6 md:flex-row md:items-center md:justify-between">
              <p className="text-xs text-white/22">
                &copy; {new Date().getFullYear()} Rakesh Kumar Behera · All rights reserved
              </p>
              <div className="flex items-center gap-4 text-xs text-white/22">
                <a href="mailto:rk821604@gmail.com" className="transition-colors hover:text-white/50">rk821604@gmail.com</a>
                <a href="https://www.linkedin.com/in/rakesh-kumar-behera-rk821604" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white/50">LinkedIn</a>
                <a href="/Profile.pdf" className="transition-colors hover:text-white/50">Resume</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
