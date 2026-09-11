import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { IntroProvider } from "@/components/motion/IntroProvider";
import { ScrollTriggerSync } from "@/components/motion/ScrollTriggerSync";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaushik — UX/UI Designer & Front-End Developer",
  description:
    "Portfolio of Kaushik — UX/UI designer and front-end developer crafting intuitive digital experiences and clean product interfaces.",
  metadataBase: new URL("https://kaushikchand.dev"),
  openGraph: {
    title: "Kaushik — UX/UI Designer & Front-End Developer",
    description:
      "I design intuitive digital experiences and interactive interfaces that combine user needs, thoughtful visual hierarchy, and clean front-end execution.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushik — UX/UI Designer & Front-End Developer",
    description:
      "I design intuitive digital experiences and interactive interfaces with clean front-end execution.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${fraunces.variable}`}>
      <body className="bg-base font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <IntroProvider>
            <ScrollTriggerSync />
            <div className="grain" aria-hidden />
            <CustomCursor />
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
          </IntroProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
