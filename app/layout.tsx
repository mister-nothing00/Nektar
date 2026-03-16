import type { Metadata } from "next";
import {
  Cinzel,
  Cinzel_Decorative,
  EB_Garamond,
  UnifrakturMaguntia,
} from "next/font/google";
import "./globals.css";

/* =============================================
   FONT SETUP
   ============================================= */
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const unifraktur = UnifrakturMaguntia({
  variable: "--font-unifraktur",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

/* =============================================
   METADATA
   ============================================= */
export const metadata: Metadata = {
  title: "Dark Sanctum",
  description: "— Enter if you are worthy —",
  robots: {
    index: false,
    follow: false,
  },
};

/* =============================================
   ROOT LAYOUT
   ============================================= */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`
        ${cinzel.variable}
        ${cinzelDecorative.variable}
        ${ebGaramond.variable}
        ${unifraktur.variable}
      `}
    >
      <body className="bg-black-void text-silver antialiased">{children}</body>
    </html>
  );
}
