"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { BUSINESS_INFO } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1920&q=80')` }}
      />
      <div className="absolute inset-0 bg-[rgba(28,20,16,0.85)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(181,144,62,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 gold-separator" />
            <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#B5903E]">
              Réservation en ligne
            </span>
            <div className="h-px w-12 gold-separator" />
          </div>

          <h2 className="font-cormorant text-5xl md:text-7xl font-light text-white leading-tight mb-6">
            Prenez rendez-vous avec
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #B5903E, #D4B87A, #B5903E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              l&apos;excellence
            </span>
          </h2>

          <p className="font-inter text-base text-white/60 tracking-wide mb-10 max-w-xl mx-auto">
            Réservez votre soin en ligne 24h/24, gratuitement, avec confirmation immédiate.
          </p>

          <motion.a
            href={BUSINESS_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full btn-gold text-sm glow-gold"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Réserver maintenant</span>
            <span>→</span>
          </motion.a>

          <div className="flex items-center justify-center gap-8 mt-10 flex-wrap">
            {["Confirmation immédiate", "24h/24 · 7j/7", "Gratuit"].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B5903E]" />
                <span className="font-inter text-xs text-white/50 tracking-wide">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
