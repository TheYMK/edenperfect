"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GoldSeparator from "@/components/ui/GoldSeparator";
import FinalCTA from "@/components/sections/FinalCTA";
import { BUSINESS_INFO } from "@/lib/constants";
import {
  PRESTATION_CATEGORIES,
  PRESTATION_SERVICES,
  DEFAULT_PRESTATION_CATEGORY,
  type PrestationService,
} from "@/lib/planity-services";

const PLANITY_URL = BUSINESS_INFO.bookingUrl;
const categories = PRESTATION_CATEGORIES;
const services = PRESTATION_SERVICES;

export default function PrestationsPage() {
  const [activeCategory, setActiveCategory] = useState(
    DEFAULT_PRESTATION_CATEGORY,
  );

  const filtered = services.filter((s) => s.cat === activeCategory);

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
                  Excellence & Savoir-faire
                </span>
                <h1 className="font-cormorant text-6xl md:text-8xl font-bold text-white">
                  Nos Prestations
                </h1>
              </motion.div>
            </div>
          </section>

          <section className="section-spacing">
            <div className="max-w-7xl mx-auto px-6">
              <GoldSeparator className="mb-12" />

              {/* Category filters */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`font-inter text-xs px-5 py-2.5 rounded-full transition-all duration-300 tracking-wider ${
                      activeCategory === cat.id
                        ? "btn-gold glow-gold"
                        : "border border-[rgba(181,144,62,0.25)] text-[rgba(44,32,22,0.6)] hover:border-[rgba(181,144,62,0.5)] hover:text-[#B5903E]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Services grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {filtered.map((service, i) => (
                    <ServiceCard
                      key={`${service.name}-${i}`}
                      service={service}
                      index={i}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          <FinalCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}

function capitalizeFirst(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function ServiceCard({
  service,
  index,
}: {
  service: PrestationService;
  index: number;
}) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.4) }}
      className="group relative rounded-2xl p-6 flex flex-col gap-4 cursor-default transition-all"
      style={{
        background: "rgba(181,144,62,0.03)",
        border: "1px solid rgba(181,144,62,0.12)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(181,144,62,0.4)";
        e.currentTarget.style.boxShadow = "0 0 25px rgba(181,144,62,0.1)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(181,144,62,0.12)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-gold), var(--color-gold-light), var(--color-gold-deep))",
          }}
        >
          <Icon size={16} className="text-white" />
        </div>
        <span className="font-cormorant text-2xl font-bold text-[#B5903E]">
          {service.price}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-cormorant text-lg font-bold text-[#2C2016] leading-snug mb-2">
          {capitalizeFirst(service.name)}
        </h3>
        <div className="flex items-center gap-2">
          <div className="w-4 h-px bg-[#B5903E]" />
          <span className="font-inter text-xs text-[rgba(44,32,22,0.45)] tracking-wide">
            {service.duration}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-1">
        <a
          href={PLANITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full btn-gold text-[11px]"
        >
          Réserver ce soin →
        </a>
        <a
          href={`tel:${BUSINESS_INFO.phoneTel}`}
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#C85A36] text-white font-inter text-[11px] font-medium tracking-wider uppercase transition-all duration-300 hover:bg-[#B5502F]"
        >
          Réserver par téléphone au {BUSINESS_INFO.phone}
        </a>
      </div>
    </motion.div>
  );
}
