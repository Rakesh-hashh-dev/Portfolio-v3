import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AnimatedBackground from "@/components/layout/AnimatedBackground";
import Navigation from "@/components/layout/Navigation";
import DockNav from "@/components/layout/DockNav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
      data-scroll-behavior="smooth"
      data-theme="dark"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      <body className="min-h-full flex flex-col">
        <AnimatedBackground />
        <Navigation />
        {children}
        <DockNav />
        <footer className="px-6 py-8 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Rakesh Kumar Behera. MBA portfolio built with Next.js.</p>
        </footer>
      </body>
    </html>
  );
}
