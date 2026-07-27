import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zachyeo.com"),
  title: {
    default: "Zach Yeo — Software developer in Tokyo",
    template: "%s — Zach Yeo",
  },
  description: "Software developer building focused web tools, browser extensions, automations, and small connected systems.",
  alternates: { canonical: "/" },
  keywords: ["Zach Yeo", "software developer", "Tokyo", "web developer", "portfolio"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zachyeo.com",
    siteName: "Zach Yeo",
    title: "Zach Yeo — Software developer in Tokyo",
    description: "Focused web tools, browser extensions, automations, and small connected systems.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Zach Yeo — small, useful software in Tokyo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zach Yeo — Software developer in Tokyo",
    description: "Focused web tools, browser extensions, automations, and small connected systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} ${newsreader.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="site-header">
          <div className="header-inner shell">
            <Link className="wordmark" href="/" aria-label="Zach Yeo, home">ZY<span>·</span></Link>
            <nav aria-label="Primary navigation">
              <Link href="/#work">Work</Link>
              <Link href="/#experience">Experience</Link>
              <a href="https://photos.zachyeo.com" target="_blank" rel="noreferrer">Photos ↗</a>
            </nav>
          </div>
        </header>
        <div id="main-content">{children}</div>
        <footer className="site-footer shell">
          <p>© Zach Yeo</p>
          <p>Built with <span aria-label="love">❤️</span> in Tokyo.</p>
          <a href="#main-content">Back to top ↑</a>
        </footer>
      </body>
    </html>
  );
}
