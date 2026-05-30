"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, CheckCircle, Star, Calendar } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GoldSeparator from "@/components/ui/GoldSeparator";
import { BUSINESS_INFO } from "@/lib/constants";

const PLANITY_URL = BUSINESS_INFO.bookingUrl;

const trustIndicators = [
  { icon: CheckCircle, text: "Confirmation immédiate" },
  { icon: Clock, text: "Disponible 24h/24" },
  { icon: Star, text: "Réservation gratuite" },
  { icon: Calendar, text: "Annulation facile" },
];

export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-site">
          {/* Hero */}
          <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80')` }}
            />
            <div className="absolute inset-0 bg-[rgba(28,20,16,0.82)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(181,144,62,0.07)_0%,transparent_70%)]" />
            <div className="relative z-10 text-center px-6">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#B5903E] block mb-4">
                  En ligne · Gratuit · 24h/24
                </span>
                <h1 className="font-cormorant text-6xl md:text-8xl font-light text-white mb-4">Réservation</h1>
                <p className="font-inter text-base text-white/60 tracking-wide">
                  Réservez votre soin avec confirmation immédiate
                </p>
              </motion.div>
            </div>
          </section>

          <section className="section-spacing">
            <div className="max-w-5xl mx-auto px-6">
              <GoldSeparator className="mb-16" />

              {/* Trust indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
                {trustIndicators.map(({ icon: Icon, text }, i) => (
                  <AnimatedSection key={text} delay={i * 0.1}>
                    <div className="text-center p-6 rounded-2xl" style={{ border: "1px solid rgba(181,144,62,0.12)", background: "rgba(181,144,62,0.03)" }}>
                      <div className="w-12 h-12 rounded-full bg-[rgba(181,144,62,0.1)] border border-[rgba(181,144,62,0.2)] flex items-center justify-center mx-auto mb-3">
                        <Icon size={18} className="text-[#B5903E]" />
                      </div>
                      <p className="font-inter text-xs text-[rgba(44,32,22,0.65)] tracking-wide">{text}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Main CTA */}
              <AnimatedSection>
                <div
                  className="relative rounded-3xl overflow-hidden text-center p-12 md:p-16"
                  style={{ border: "1px solid rgba(181,144,62,0.2)" }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(181,144,62,0.05)_0%,transparent_70%)] pointer-events-none" />
                  <div className="relative z-10">
                    <div className="font-cormorant text-7xl text-[rgba(181,144,62,0.08)] leading-none mb-0 -mt-4">✦</div>
                    <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#2C2016] mb-4">
                      Prendre rendez-vous
                    </h2>
                    <p className="font-inter text-sm text-[rgba(44,32,22,0.55)] mb-10 max-w-md mx-auto leading-relaxed">
                      Choisissez votre prestation, sélectionnez votre créneau et confirmez instantanément via notre partenaire Planity.
                    </p>
                    <motion.a
                      href={PLANITY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 px-12 py-5 rounded-full btn-gold text-sm glow-gold pulse-glow"
                    >
                      <Calendar size={16} />
                      Réserver en ligne sur Planity
                    </motion.a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Address & hours */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <AnimatedSection direction="left" delay={0.1}>
                  <div className="p-8 rounded-2xl" style={{ border: "1px solid rgba(181,144,62,0.12)", background: "rgba(181,144,62,0.02)" }}>
                    <div className="flex items-center gap-3 mb-5">
                      <MapPin size={18} className="text-[#B5903E]" />
                      <h3 className="font-cormorant text-xl text-[#2C2016]">Nous trouver</h3>
                    </div>
                    <p className="font-inter text-sm text-[rgba(44,32,22,0.7)] leading-relaxed mb-3">
                      14 Rue Favart<br />75002 Paris
                    </p>
                    <p className="font-inter text-xs text-[rgba(44,32,22,0.4)]">
                      Proche de l&apos;Opéra et du Palais Royal
                    </p>
                    <a
                      href="https://maps.google.com/?q=14+Rue+Favart+75002+Paris"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 font-inter text-xs tracking-wider text-[#B5903E] hover:text-[#D4B87A] transition-colors"
                    >
                      Voir sur Google Maps →
                    </a>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={0.1}>
                  <div className="p-8 rounded-2xl" style={{ border: "1px solid rgba(181,144,62,0.12)", background: "rgba(181,144,62,0.02)" }}>
                    <div className="flex items-center gap-3 mb-5">
                      <Clock size={18} className="text-[#B5903E]" />
                      <h3 className="font-cormorant text-xl text-[#2C2016]">Horaires d&apos;ouverture</h3>
                    </div>
                    <div className="space-y-3">
                      {BUSINESS_INFO.hours.map(({ day, hours }) => (
                        <div key={day} className="flex justify-between">
                          <span className="font-inter text-sm text-[rgba(44,32,22,0.5)]">{day}</span>
                          <span className="font-inter text-sm text-[rgba(44,32,22,0.85)]">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
