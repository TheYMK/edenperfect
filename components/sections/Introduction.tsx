"use client";

import { Scissors, Droplets, Flower2, Gem, Eye } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GoldSeparator from "@/components/ui/GoldSeparator";

const pillars = [
  { icon: Scissors, title: "Coiffure", desc: "Coupes, colorations, lissages et tresses par des experts passionnés." },
  { icon: Droplets, title: "Soins Visage", desc: "Rituels de beauté sur-mesure pour une peau éclatante et régénérée." },
  { icon: Flower2, title: "Massage", desc: "Massages californiens et rituels bien-être pour une détente absolue." },
  { icon: Gem, title: "Onglerie", desc: "Nail art, faux ongles et soins manucure d'exception." },
  { icon: Eye, title: "Extensions de Cils", desc: "Extensions naturelles et volumineuses pour un regard envoûtant." },
];

export default function Introduction() {
  return (
    <section className="section-spacing bg-site relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #B5903E 1px, transparent 0)", backgroundSize: "40px 40px" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <GoldSeparator className="mb-16" />

        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#B5903E] block mb-4">
              Notre Univers
            </span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-[#2C2016] mb-8 leading-tight">
              Un temple dédié à<br />
              <em className="not-italic text-[#B5903E]">votre élégance</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="font-inter text-base md:text-lg text-[rgba(44,32,22,0.65)] leading-relaxed max-w-3xl mx-auto">
              Situé au cœur de Paris, Eden Perfect est plus qu&apos;un simple salon de beauté. Véritable temple du bien-être et de l&apos;élégance, notre institut vous accueille dans un univers raffiné où{" "}
              <span className="text-[#B5903E]">expertise</span>,{" "}
              <span className="text-[#B5903E]">détente</span> et{" "}
              <span className="text-[#B5903E]">perfection</span> se rencontrent.
            </p>
          </AnimatedSection>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.1}>
              <div
                className="group relative glass-gold rounded-2xl p-6 text-center h-full cursor-default"
                style={{ transition: "all 0.4s ease" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(181,144,62,0.5)";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(181,144,62,0.12), inset 0 0 30px rgba(181,144,62,0.03)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(181,144,62,0.15)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-light), var(--color-gold-deep))" }}
                >
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-cormorant text-xl font-medium text-[#2C2016] mb-2">{title}</h3>
                <p className="font-inter text-xs text-[rgba(44,32,22,0.55)] leading-relaxed">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <GoldSeparator className="mt-16" />
      </div>
    </section>
  );
}
