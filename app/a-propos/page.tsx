"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GoldSeparator from "@/components/ui/GoldSeparator";
import FinalCTA from "@/components/sections/FinalCTA";

const founder = {
  name: "Yasmine",
  role: "Fondatrice & Experte Coiffure",
  expertise: [
    "Lissage Brésilien",
    "Colorations",
    "Tresses Afro",
    "Soins Capillaires",
    "Extensions",
    "Coupe & Styling",
  ],
  img: "/images/gallery/4.jpg",
  bio: "Passionnée par l\u2019art de la coiffure depuis plus de 10 ans, Yasmine a fondé Eden Perfect avec une vision claire : offrir à chaque cliente une expérience unique alliant expertise technique et écoute personnalisée.",
};

const certifications = [
  {
    title: "Certification Lissage Brésilien",
    issuer: "Formation Professionnelle",
    year: "2018",
  },
  {
    title: "Diplôme Coiffure Afro",
    issuer: "Académie de Coiffure",
    year: "2016",
  },
  {
    title: "Certification Soins Capillaires",
    issuer: "Institut de Beauté",
    year: "2019",
  },
  {
    title: "Formation Extensions Premium",
    issuer: "École Internationale",
    year: "2021",
  },
];

export default function AProposPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-site">
          {/* Hero */}
          <section
            className="relative h-[45vh] flex items-center justify-center overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 50% 50%, #9E7352 0%, #7D5A3C 50%, #6B4A30 80%, #5E3D28 100%)",
            }}
          >
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="font-inter text-[12px] font-bold tracking-[0.4em] uppercase text-[#B5903E] block mb-4">
                  Notre Histoire
                </span>
                <h1 className="font-cormorant text-6xl md:text-8xl font-bold text-white">
                  À Propos de nous
                </h1>
              </motion.div>
            </div>
          </section>

          {/* Story */}
          <section className="section-spacing">
            <div className="max-w-7xl mx-auto px-6">
              <GoldSeparator className="mb-16" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                <AnimatedSection direction="left">
                  <div className="relative rounded-3xl overflow-hidden h-[500px]">
                    <img
                      src="/images/unnamed-2.png"
                      alt="Institut Eden Perfect"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(46,30,24,0.6)] to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="font-cormorant text-2xl italic text-[#B5903E]">
                        &ldquo;L&apos;excellence est notre signature&rdquo;
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={0.2}>
                  <div>
                    <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#B5903E] block mb-4">
                      Notre Histoire
                    </span>
                    <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#2C2016] mb-6 leading-tight">
                      Né d&apos;une passion pour
                      <br />
                      <em className="not-italic text-[#B5903E]">
                        la beauté parisienne
                      </em>
                    </h2>
                    <p className="font-inter text-sm text-[rgba(44,32,22,0.65)] leading-relaxed mb-6">
                      Eden Perfect est né d&apos;un rêve : créer un espace où la
                      beauté rencontre l&apos;art, où chaque cliente est traitée
                      avec l&apos;attention d&apos;une invitée de marque. Depuis
                      notre ouverture au cœur du 2ème arrondissement de Paris,
                      nous avons cultivé une réputation d&apos;excellence et de
                      savoir-faire.
                    </p>
                    <p className="font-inter text-sm text-[rgba(44,32,22,0.65)] leading-relaxed mb-8">
                      Notre équipe passionnée maîtrise les techniques les plus
                      avancées de coiffure afro, de soins visage,
                      d&apos;onglerie et de bien-être, tout en restant à
                      l&apos;écoute de chaque cliente pour une expérience
                      véritablement sur-mesure.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-px w-12 gold-separator" />
                      <span className="font-cormorant text-lg italic text-[rgba(44,32,22,0.5)]">
                        14 Rue Favart, Paris 2ème
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <GoldSeparator className="mb-24" />

              {/* Philosophy */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                <AnimatedSection direction="left" delay={0.1}>
                  <div>
                    <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#B5903E] block mb-4">
                      Notre Philosophie
                    </span>
                    <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#2C2016] mb-6 leading-tight">
                      La beauté comme
                      <br />
                      <em className="not-italic text-[#B5903E]">
                        art de vivre
                      </em>
                    </h2>
                    <p className="font-inter text-sm text-[rgba(44,32,22,0.65)] leading-relaxed mb-6">
                      Chez Eden Perfect, nous croyons que la beauté est bien
                      plus qu&apos;une apparence — c&apos;est une façon
                      d&apos;être, de se sentir bien dans sa peau et de rayonner
                      de l&apos;intérieur. Chaque prestation est une célébration
                      de votre individualité.
                    </p>
                    <div className="space-y-4 mt-8">
                      {[
                        "Expertise & savoir-faire",
                        "Produits de haute qualité",
                        "Écoute & personnalisation",
                        "Ambiance luxueuse & apaisante",
                      ].map((v) => (
                        <div key={v} className="flex items-center gap-4">
                          <div className="w-8 h-px bg-[#B5903E]" />
                          <span className="font-inter text-sm text-[rgba(44,32,22,0.7)] tracking-wide">
                            {v}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={0.2}>
                  <div className="relative rounded-3xl overflow-hidden h-[500px]">
                    <img
                      src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
                      alt="Philosophie Eden Perfect"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(46,30,24,0.5)] to-transparent" />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Founder */}
          {/* <section className="section-spacing bg-site-surface">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <AnimatedSection>
                  <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#B5903E] block mb-4">
                    La Fondatrice
                  </span>
                  <h2 className="font-cormorant text-5xl md:text-6xl font-light text-[#2C2016]">
                    Une professionnelle passionnée
                  </h2>
                </AnimatedSection>
              </div>

              <AnimatedSection>
                <div className="max-w-4xl mx-auto">
                  <div
                    className="group rounded-3xl overflow-hidden"
                    style={{ border: "1px solid rgba(181,144,62,0.15)" }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative h-[400px] md:h-auto overflow-hidden">
                        <img
                          src={founder.img}
                          alt={founder.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,20,16,0.7)] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[rgba(28,20,16,0.15)]" />
                        <div className="absolute bottom-6 left-6 md:hidden">
                          <h3 className="font-cormorant text-3xl font-light text-white">
                            {founder.name}
                          </h3>
                          <p className="font-inter text-xs tracking-widest uppercase text-[#B5903E] mt-1">
                            {founder.role}
                          </p>
                        </div>
                      </div>
                      <div className="p-8 md:p-10 flex flex-col justify-center bg-[rgba(181,144,62,0.03)]">
                        <div className="hidden md:block mb-6">
                          <h3 className="font-cormorant text-4xl font-light text-[#2C2016]">
                            {founder.name}
                          </h3>
                          <p className="font-inter text-xs tracking-widest uppercase text-[#B5903E] mt-2">
                            {founder.role}
                          </p>
                        </div>
                        <p className="font-inter text-sm text-[rgba(44,32,22,0.65)] leading-relaxed mb-8">
                          {founder.bio}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {founder.expertise.map((e) => (
                            <span
                              key={e}
                              className="font-inter text-xs px-3 py-1.5 rounded-full"
                              style={{
                                border: "1px solid rgba(181,144,62,0.25)",
                                color: "rgba(44,32,22,0.7)",
                              }}
                            >
                              {e}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section> */}

          {/* Certifications */}
          {/* <section className="section-spacing">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <AnimatedSection>
                  <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#B5903E] block mb-4">
                    Nos Certifications
                  </span>
                  <h2 className="font-cormorant text-5xl md:text-6xl font-light text-[#2C2016] mb-4">
                    Expertise certifiée
                  </h2>
                  <p className="font-inter text-sm text-[rgba(44,32,22,0.55)] max-w-xl mx-auto">
                    Des formations reconnues qui attestent de notre savoir-faire
                    et de notre engagement envers l&apos;excellence.
                  </p>
                </AnimatedSection>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map(({ title, issuer, year }, i) => (
                  <AnimatedSection key={title} delay={i * 0.1}>
                    <div
                      className="group rounded-2xl overflow-hidden h-full flex flex-col"
                      style={{ border: "1px solid rgba(181,144,62,0.15)" }}
                    >
                      <div className="relative h-48 bg-[rgba(181,144,62,0.06)] flex items-center justify-center overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-[0.03]"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(181,144,62,0.3) 10px, rgba(181,144,62,0.3) 11px)",
                          }}
                        />
                        <motion.div
                          className="relative flex flex-col items-center gap-3"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-16 h-16 rounded-full border border-[rgba(181,144,62,0.3)] flex items-center justify-center bg-[rgba(181,144,62,0.08)]">
                            <Award size={28} className="text-[#B5903E]" />
                          </div>
                          <span className="font-inter text-[9px] tracking-[0.3em] uppercase text-[rgba(181,144,62,0.5)]">
                            Image à venir
                          </span>
                        </motion.div>
                      </div>
                      <div className="p-5 flex flex-col flex-1 bg-[rgba(181,144,62,0.02)]">
                        <h3 className="font-cormorant text-lg font-medium text-[#2C2016] mb-1 leading-snug">
                          {title}
                        </h3>
                        <p className="font-inter text-xs text-[rgba(44,32,22,0.5)] mb-3">
                          {issuer}
                        </p>
                        <div className="mt-auto">
                          <span
                            className="inline-block font-inter text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                            style={{
                              border: "1px solid rgba(181,144,62,0.25)",
                              color: "rgba(181,144,62,0.8)",
                            }}
                          >
                            {year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section> */}

          <FinalCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
