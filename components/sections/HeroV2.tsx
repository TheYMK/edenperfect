"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

const HERO_GRADIENT =
  "radial-gradient(ellipse 80% 70% at 50% 50%, #9E7352 0%, #7D5A3C 50%, #6B4A30 80%, #5E3D28 100%)";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

export default function HeroV2() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: HERO_GRADIENT }}
    >
      {/* ════════════════════════════════════════════
          MOBILE LAYOUT  (< lg)
          Image as background, centered text on top
          ════════════════════════════════════════════ */}
      <div className="lg:hidden relative min-h-screen flex flex-col">
        {/* Background image — large, bottom-aligned */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/hero_bg3.png"
            alt="Eden Perfect — Institut de beauté"
            fill
            className="object-contain object-bottom"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0 z-1 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(94,61,40,0.85) 0%, rgba(94,61,40,0.5) 45%, rgba(94,61,40,0.15) 70%, transparent 100%)",
          }}
          aria-hidden
        />

        {/* Centered text content */}
        <div className="relative z-10 flex flex-col items-center justify-start text-center px-6 pt-28 pb-8 flex-1">
          {/* Address badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-linear-to-r from-transparent via-[#D4A574] to-[#B5903E]" />
            <span className="font-inter text-[9px] tracking-[0.3em] uppercase text-[#D4A574]">
              14 Rue Favart · Paris 2e
            </span>
            <div className="h-px w-10 bg-linear-to-r from-[#B5903E] via-[#D4A574] to-transparent" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-cormorant text-5xl sm:text-6xl font-semibold text-white leading-[1.06]"
          >
            Ici, on prend
            <br />
            soin de vous
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 font-inter text-sm sm:text-[15px] font-medium text-white/65 max-w-sm leading-relaxed"
          >
            Tresses, coiffure afro, lissage brésilien, soins du visage,
            extensions de cils et onglerie — réservez en ligne, confirmation
            immédiate.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8"
          >
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#C85A36] text-white font-inter text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#B5502F] hover:shadow-lg hover:shadow-black/25"
            >
              Réserver maintenant
            </a>
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          DESKTOP LAYOUT  (lg+)
          Side-by-side: text left, image right
          ════════════════════════════════════════════ */}
      <div className="hidden lg:grid relative z-10 min-h-screen grid-cols-[1fr_1fr] xl:grid-cols-[45%_55%]">
        {/* ── Left: Text Content ── */}
        <div className="relative z-20 flex flex-col items-start justify-center pl-16 xl:pl-20 2xl:pl-28 pr-8 min-h-screen">
          {/* Address badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-linear-to-r from-transparent via-[#D4A574] to-[#B5903E]" />
            <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#D4A574]">
              14 Rue Favart · Paris 2e
            </span>
            <div className="h-px w-12 bg-linear-to-r from-[#B5903E] via-[#D4A574] to-transparent" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-cormorant text-7xl xl:text-8xl 2xl:text-[6.5rem] font-semibold text-white leading-[1.06]"
          >
            Ici, on prend
            <br />
            soin de vous
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 font-inter text-base xl:text-lg font-medium text-white/60 max-w-[480px] leading-relaxed"
          >
            Tresses, coiffure afro, lissage brésilien, soins du visage,
            extensions de cils et onglerie — réservez en ligne, confirmation
            immédiate.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10"
          >
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#C85A36] text-white font-inter text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#B5502F] hover:shadow-lg hover:shadow-black/25"
            >
              Réserver maintenant
            </a>
          </motion.div>
        </div>

        {/* ── Right: Hero Image ── */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src="/images/hero_bg3.png"
              alt="Eden Perfect — Institut de beauté"
              fill
              className="object-contain object-bottom"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 100%), linear-gradient(to top, transparent 0%, black 6%, black 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 100%), linear-gradient(to top, transparent 0%, black 6%, black 100%)",
                WebkitMaskComposite: "destination-in",
                maskComposite: "intersect",
              }}
              priority
              sizes="55vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
