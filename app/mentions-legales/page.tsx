"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoldSeparator from "@/components/ui/GoldSeparator";
import { BUSINESS_INFO } from "@/lib/constants";

const sections = [
  {
    title: "1. Informations légales",
    content: `Eden Perfect Institut de Beauté\nAdresse : 14 Rue Favart, 75002 Paris, France\nTéléphone : ${BUSINESS_INFO.phone}\nE-mail : ${BUSINESS_INFO.email}\n\nLe présent site est édité par Eden Perfect.`,
  },
  {
    title: "2. Hébergement",
    content: `Ce site est hébergé par des services cloud conformes aux standards européens de protection des données.`,
  },
  {
    title: "3. Propriété intellectuelle",
    content: `L'ensemble des contenus de ce site (textes, images, design, logo) est la propriété exclusive d'Eden Perfect et est protégé par les lois en vigueur relatives à la propriété intellectuelle. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable.`,
  },
  {
    title: "4. Protection des données personnelles (RGPD)",
    content: `Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données personnelles.\n\nLes données collectées via le formulaire de contact sont uniquement utilisées pour répondre à vos demandes et ne sont jamais transmises à des tiers.\n\nPour exercer vos droits, contactez-nous à : contact@edenperfect.fr`,
  },
  {
    title: "5. Cookies",
    content: `Ce site peut utiliser des cookies techniques pour améliorer votre expérience de navigation. Vous pouvez les désactiver depuis les paramètres de votre navigateur.`,
  },
  {
    title: "6. Réservation en ligne",
    content: `Les réservations en ligne sont gérées par Planity, tiers de confiance certifié. Veuillez consulter les conditions générales de Planity pour toute information relative à la gestion de vos données dans le cadre de la prise de rendez-vous.`,
  },
  {
    title: "7. Limitation de responsabilité",
    content: `Eden Perfect s'efforce d'assurer l'exactitude des informations présentes sur ce site mais ne peut garantir l'exhaustivité ou l'actualité des contenus. L'établissement décline toute responsabilité pour les erreurs ou omissions.`,
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-site">
          <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[rgba(46,30,24,0.95)]" />
            <div className="relative z-10 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="font-cormorant text-5xl md:text-6xl font-light text-white">Mentions Légales</h1>
                <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#B5903E] mt-3">
                  Politique de confidentialité & RGPD
                </p>
              </motion.div>
            </div>
          </section>

          <section className="section-spacing">
            <div className="max-w-3xl mx-auto px-6">
              <GoldSeparator className="mb-12" />

              <div className="space-y-10 font-inter text-sm text-[rgba(44,32,22,0.65)] leading-relaxed">
                {sections.map(({ title, content }) => (
                  <div key={title}>
                    <h2 className="font-cormorant text-2xl font-medium text-[#B5903E] mb-4">
                      {title}
                    </h2>
                    <p className="whitespace-pre-line">{content}</p>
                  </div>
                ))}

                <div className="pt-8">
                  <GoldSeparator />
                  <p className="text-center mt-6 font-inter text-xs text-[rgba(44,32,22,0.35)]">
                    © {new Date().getFullYear()} Eden Perfect Institut de Beauté · Paris 2ème
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
