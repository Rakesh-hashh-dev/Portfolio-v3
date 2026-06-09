import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Fraunces } from "next/font/google";
import AnimatedBackground from "@/components/layout/AnimatedBackground";
import Navigation from "@/components/layout/Navigation";
import DockNav from "@/components/layout/DockNav";
import Providers from "@/components/layout/Providers";
import Footer from "@/components/layout/Footer";
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
  var t = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  document.documentElement.style.colorScheme = t;
} catch (_) {
  document.documentElement.dataset.theme = "dark";
  document.documentElement.style.colorScheme = "dark";
}
`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Rakesh Kumar Behera | MBA Portfolio",
  description:
    "MBA candidate at IIM Sambalpur focused on business strategy, consulting, execution, and analytics.",
  openGraph: {
    title: "Rakesh Kumar Behera | MBA Portfolio",
    description:
      "MBA candidate at IIM Sambalpur with Fortune 500 delivery experience — targeting consulting, strategy & operations, and product management.",
    type: "website",
    images: [
      {
        url: "/DP-optimized.webp",
        width: 800,
        height: 1000,
        alt: "Rakesh Kumar Behera — MBA Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakesh Kumar Behera | MBA Portfolio",
    description:
      "MBA candidate at IIM Sambalpur with Fortune 500 delivery experience — targeting consulting, strategy & operations, and product management.",
    images: ["/DP-optimized.webp"],
  },
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
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <a href="#main" className="skip-link">Skip to content</a>
        <Providers>
          <ScrollProgress />
          <AnimatedBackground />
          <Navigation />
          <PageTransition>
            <div id="main" tabIndex={-1} className="pb-20 outline-none lg:pb-0">{children}</div>
          </PageTransition>
          <DockNav />
        </Providers>

        <Footer />
      </body>
    </html>
  );
}
