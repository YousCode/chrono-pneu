import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chrono Pneus",
  description: "Site vitrine Chrono Pneus a Epinay-sur-Seine"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
