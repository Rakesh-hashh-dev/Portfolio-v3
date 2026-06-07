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
        <footer className="border-t border-white/6 px-6 py-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="font-semibold text-white">Rakesh Kumar Behera</p>
              <p className="mt-0.5 text-sm text-white/35">MBA Candidate · IIM Sambalpur · 2025–2027</p>
            </div>
            <p className="text-sm text-white/28">
              &copy; {new Date().getFullYear()} · All rights reserved
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
