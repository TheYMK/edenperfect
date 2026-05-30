"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ParticleField from "@/components/ui/ParticleField";
import { BUSINESS_INFO } from "@/lib/constants";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.2, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero_bg.png')",
        }}
      />

      {/* Warm brown tint for text contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(var(--color-overlay-dark-rgb), 0.42)" }}
        aria-hidden
      />

      {/* Gradient overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(var(--color-overlay-dark-rgb), 0.65) 100%)",
        }}
        aria-hidden
      />

      {/* Particles */}
      <ParticleField />

      {/* Gold ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(181,144,62,0.06)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-3 mb-8"
        >
          <div className="h-px w-12 gold-separator" />
          <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#B5903E]">
            14 Rue Favart · Paris 2e
          </span>
          <div className="h-px w-12 gold-separator" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-light text-white leading-none mb-2"
        >
          Ici, on prend
        </motion.h1>
        <motion.h1
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-8"
          style={{
            background: "linear-gradient(135deg, #B5903E, #D4B87A, #8F7030, #D4B87A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          soin de vous
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-inter text-base md:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Tresses, coiffure afro, lissage brésilien, soins du visage, extensions de cils et onglerie — réservez en ligne, confirmation immédiate.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/prestations"
            className="inline-flex items-center px-8 py-4 rounded-full btn-outline-gold text-sm font-inter tracking-widest"
          >
            Découvrir nos prestations
          </Link>
          <a
            href={BUSINESS_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full btn-gold text-sm glow-gold"
          >
            Réserver maintenant
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-inter text-[9px] tracking-[0.4em] uppercase text-[rgba(181,144,62,0.6)]">
          Découvrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#B5903E] to-transparent"
        />
      </motion.div>
    </section>
  );
}
