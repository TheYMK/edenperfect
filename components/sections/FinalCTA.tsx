"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StackedCardCarousel from "@/components/ui/StackedCardCarousel";
import { BUSINESS_INFO } from "@/lib/constants";

const SALON_IMAGES = [
  "/images/salon/dbcab405-abc3-47d4-bac4-bb90fe9dda15.JPG",
  "/images/salon/bb5ce52f-d550-4b35-a550-0e41d6092b1a.JPG",
  "/images/salon/e44594e7-ea77-486f-a680-4c97745c8e1c.JPG",
  "/images/salon/3ec6654f-89c8-4464-a6d6-59f2d01f388e.JPG",
  "/images/salon/07b67181-2e72-4e5b-8681-e206119e17b3.JPG",
  "/images/salon/58cc3b27-5657-4bbb-a7b1-b67e8f85d9e4.JPG",
  "/images/salon/c4fffc96-3171-4a1f-b1ad-abda9987e06e.JPG",
  "/images/salon/6014c630-05c6-4ea5-96b7-c85f6bea0884.JPG",
  "/images/salon/b7782b74-21f3-47f3-9cb1-14b112ed3ccd.JPG",
  "/images/salon/590ad8a1-7810-415c-b7fa-d5d0dc7f5d25.JPG",
  "/images/salon/aa94e5c4-9391-43fb-b6f2-91a2ce48e331.JPG",
  "/images/salon/ba0cc839-2ee6-4223-92ee-12aa43439c2d.JPG",
  "/images/salon/307a40d6-05b2-49c5-9d67-7444dacd5ede.JPG",
  "/images/salon/6a4d03a3-e416-4d70-9c49-03213c0f853f.JPG",
  "/images/salon/0e682c92-f5a3-4165-94db-3d873d073e4b.JPG",
  "/images/salon/67b29171-d97e-45a0-a57a-f9d06de13eb9.JPG",
  "/images/salon/9348df32-4b72-430a-94e0-041962262277.JPG",
  "/images/salon/eec926e6-a8a0-4396-9040-5971658fa305.JPG",
  "/images/salon/030c9e39-b752-47e3-a716-c2df2c7c3b4f.JPG",
  "/images/salon/fb244696-269b-4215-b341-e64cfe24dd1d.JPG",
];

const CTA_GRADIENT =
  "radial-gradient(ellipse 80% 70% at 50% 50%, #9E7352 0%, #7D5A3C 50%, #6B4A30 80%, #5E3D28 100%)";

export default function FinalCTA() {
  return (
    <section
      className="relative py-10 md:py-14 lg:py-16 overflow-hidden"
      style={{ background: CTA_GRADIENT }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ── Left: Stacked Card Carousel ── */}
          <AnimatedSection>
            <StackedCardCarousel images={SALON_IMAGES} />
          </AnimatedSection>

          {/* ── Right: Text Content ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <AnimatedSection>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-linear-to-r from-transparent via-[#D4A574] to-[#B5903E]" />
                <span className="font-inter text-xs sm:text-sm tracking-[0.3em] uppercase text-[#D4A574]">
                  Réservation en ligne
                </span>
                <div className="h-px w-12 bg-linear-to-r from-[#B5903E] via-[#D4A574] to-transparent" />
              </div>

              <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Prenez rendez-vous avec
                <span
                  className="block"
                  style={{
                    background:
                      "linear-gradient(135deg, #D4A574, #F0D4B5, #D4A574)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  l&apos;excellence
                </span>
              </h2>

              <p className="font-inter text-base lg:text-lg font-medium text-white/60 tracking-wide mb-10 max-w-xl">
                Réservez votre soin en ligne 24h/24, gratuitement, avec
                confirmation immédiate.
              </p>

              <motion.a
                href={BUSINESS_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#C85A36] text-white font-inter text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#B5502F] hover:shadow-lg hover:shadow-black/25"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Réserver maintenant</span>
                <span>→</span>
              </motion.a>

              <div className="flex items-center gap-6 sm:gap-8 mt-10 flex-wrap justify-center lg:justify-start">
                {["Confirmation immédiate", "24h/24 · 7j/7", "Gratuit"].map(
                  (text) => (
                    <div key={text} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4A574]" />
                      <span className="font-inter text-xs text-white/50 tracking-wide">
                        {text}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
