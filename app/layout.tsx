import type { Metadata } from "next";
import { getLocalBusinessSchema } from "@/lib/structured-data";
import ClientEffects from "@/components/layout/ClientEffects";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Eden Perfect | Institut de Beauté Premium Paris", template: "%s | Eden Perfect" },
  description: "Institut de beauté premium au cœur de Paris. Coiffure, soins visage, massage californien, extensions de cils, onglerie. Votre beauté à la perfection.",
  keywords: ["institut de beauté Paris", "salon de beauté Paris", "coiffure Paris", "soins visage Paris", "massage Paris", "onglerie Paris", "extensions de cils Paris"],
  openGraph: { title: "Eden Perfect | Institut de Beauté Premium Paris", description: "Votre beauté à la perfection. Institut de beauté premium au cœur de Paris.", url: "https://www.edenperfect.fr", siteName: "Eden Perfect", locale: "fr_FR", type: "website", images: [{ url: "/images/logo.png", width: 2000, height: 2000, alt: "Eden Perfect — Institut de Beauté" }] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="min-h-screen antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }} />
        <ClientEffects />
        {children}
      </body>
    </html>
  );
}
