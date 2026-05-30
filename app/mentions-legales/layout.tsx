import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales, politique de confidentialité et RGPD - Eden Perfect Institut de Beauté Paris.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
