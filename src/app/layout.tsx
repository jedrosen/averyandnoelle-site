import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avery & Noelle",
  description: "We're getting married!",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/schedule", label: "Schedule" },
  { href: "/travel", label: "Travel" },
  { href: "/rsvp", label: "RSVP" },
  { href: "/registry", label: "Registry" },
  { href: "/dj", label: "DJ" },
  { href: "/guest-list", label: "Guest List" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <nav className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-y-2">
            <Link
              href="/"
              className="font-serif text-xl font-bold tracking-wide text-stone-800"
            >
              A & N
            </Link>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-stone-500">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-stone-900 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <main className="min-h-screen bg-[#faf8f5]">{children}</main>
        <footer className="border-t border-stone-200 py-6 text-center text-xs text-stone-400">
          Avery & Noelle · [DATE TBD] · Triple S Ranch
        </footer>
      </body>
    </html>
  );
}
