import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import Motion from "@/components/Motion";

const desc = "Consultant stratégique, expert en intelligence artificielle appliquée et conseiller exécutif : transformation, communication, développement des compétences et intégration de l'IA.";
export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: "Rachid H. Atteye — Consultant stratégique & expert en IA appliquée",
  description: desc,
  openGraph: { title: "Rachid H. Atteye — Consultant stratégique", description: desc, locale: "fr_FR", type: "website" },
};
export const viewport: Viewport = { themeColor: "#111111", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = { "@context": "https://schema.org", "@type": "Person", name: site.name, jobTitle: "Consultant stratégique", description: desc };
  return (
    <html lang="fr">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <Motion>{children}</Motion>
      </body>
    </html>
  );
}
