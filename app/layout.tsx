import type { Metadata } from "next";
import { Barlow, Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["500", "700"]
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Chrono Pneus | Pneus neufs et d'occasion à Epinay-sur-Seine",
  description:
    "Chrono Pneus: montage, equilibrage, parallelisme, diagnostic et reparation crevaison. 42 bis Boulevard Foch, 93800 Epinay-sur-Seine."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${oswald.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
