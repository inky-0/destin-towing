import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bebas = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

// Replace per client
export const metadata: Metadata = {
  title: "Destin Towing | 24/7 Towing & Roadside Assistance in Destin, FL",
  description: "Fast, reliable towing and roadside assistance in Destin, FL. Flatbed towing, jump starts, lockouts, and more. Available 24/7. Call (850) 737-1738.",
  keywords: ["towing destin fl", "roadside assistance destin", "flatbed towing", "24 hour towing", "destin towing company", "tow truck near me"],
  openGraph: {
    title: "Destin Towing | 24/7 Towing & Roadside Assistance in Destin, FL",
    description: "Fast, reliable towing and roadside assistance in Destin, FL. Available 24/7. Call (850) 737-1738.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--text)]">
        {children}
      </body>
    </html>
  );
}
