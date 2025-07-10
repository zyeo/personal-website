import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zachary Yeo's Portfolio",
  description: "Personal portfolio of Zachary Yeo, a software developer based in Austin, Texas.",
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <ul className="flex gap-8 text-lg font-medium justify-center py-4">
        <li>
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
        </li>
        <li>
          <Link href="/photos" className="hover:text-blue-600 transition">Photos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-20">
          {children}
          <footer className="text-center py-6 text-gray-600 mt-12">
            © 2025 Zachary Yeo. Built with ❤️ in Austin, Texas.
          </footer>
        </div>
      </body>
    </html>
  );
}
