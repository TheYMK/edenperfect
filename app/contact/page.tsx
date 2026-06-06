"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GoldSeparator from "@/components/ui/GoldSeparator";
import { BUSINESS_INFO } from "@/lib/constants";

export default function ContactPage() {
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
                  Nous sommes à votre écoute
                </span>
                <h1 className="font-cormorant text-6xl md:text-8xl font-bold text-white">
                  Contact
                </h1>
              </motion.div>
            </div>
          </section>

          <section className="section-spacing">
            <div className="max-w-7xl mx-auto px-6">
              <GoldSeparator className="mb-16" />

              <AnimatedSection>
                <div className="text-center mb-12">
                  <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#B5903E] block mb-4">
                    Informations
                  </span>
                  <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#2C2016] leading-tight">
                    Venez nous rendre visite
                  </h2>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Contact details */}
                <AnimatedSection direction="left">
                  <div
                    className="h-full p-6 md:p-8 rounded-2xl"
                    style={{
                      border: "1px solid rgba(181,144,62,0.12)",
                      background: "rgba(181,144,62,0.02)",
                    }}
                  >
                    <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-[rgba(44,32,22,0.4)] block mb-6">
                      Coordonnées
                    </span>

                    <div className="space-y-5">
                      {[
                        {
                          icon: MapPin,
                          label: "Adresse",
                          value: "14 Rue Favart, 75002 Paris",
                          link: "https://maps.google.com/?q=14+Rue+Favart+75002+Paris",
                        },
                        {
                          icon: Phone,
                          label: "Téléphone",
                          value: BUSINESS_INFO.phone,
                          link: `tel:${BUSINESS_INFO.phoneTel}`,
                        },
                        {
                          icon: Mail,
                          label: "E-mail",
                          value: BUSINESS_INFO.email,
                          link: `mailto:${BUSINESS_INFO.email}`,
                        },
                      ].map(({ icon: Icon, label, value, link }) => (
                        <div key={label} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-[rgba(181,144,62,0.1)] border border-[rgba(181,144,62,0.2)] flex items-center justify-center shrink-0">
                            <Icon size={16} className="text-[#B5903E]" />
                          </div>
                          <div>
                            <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[rgba(44,32,22,0.4)] mb-1">
                              {label}
                            </p>
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-inter text-sm text-[rgba(44,32,22,0.8)] hover:text-[#B5903E] transition-colors"
                            >
                              {value}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-[rgba(181,144,62,0.12)] flex items-center gap-4">
                      <span className="font-inter text-xs text-[rgba(44,32,22,0.4)] tracking-widest uppercase">
                        Suivez-nous
                      </span>
                      <a
                        href={BUSINESS_INFO.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-[rgba(181,144,62,0.3)] flex items-center justify-center text-[#B5903E] hover:bg-[rgba(181,144,62,0.1)] transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                      <a
                        href={BUSINESS_INFO.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-[rgba(181,144,62,0.3)] flex items-center justify-center text-[#B5903E] hover:bg-[rgba(181,144,62,0.1)] transition-all"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Opening hours */}
                <AnimatedSection direction="right" delay={0.15}>
                  <div
                    className="h-full p-6 md:p-8 rounded-2xl"
                    style={{
                      border: "1px solid rgba(181,144,62,0.12)",
                      background: "rgba(181,144,62,0.02)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[rgba(181,144,62,0.1)] border border-[rgba(181,144,62,0.2)] flex items-center justify-center shrink-0">
                        <Clock size={16} className="text-[#B5903E]" />
                      </div>
                      <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-[rgba(44,32,22,0.4)]">
                        Horaires d&apos;ouverture
                      </span>
                    </div>

                    <div className="space-y-3">
                      {BUSINESS_INFO.hours.map(({ day, hours }) => (
                        <div
                          key={day}
                          className="flex justify-between gap-4 py-2 border-b border-[rgba(181,144,62,0.08)] last:border-0"
                        >
                          <span className="font-inter text-sm text-[rgba(44,32,22,0.5)]">
                            {day}
                          </span>
                          <span className="font-inter text-sm font-medium text-[rgba(44,32,22,0.8)]">
                            {hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Map */}
              <AnimatedSection delay={0.3} className="mt-16">
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(181,144,62,0.15)",
                    height: "400px",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.6665395!2d2.3440!3d48.8672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e19b900013d%3A0x1ad5bf78b7dd06ad!2s14%20Rue%20Favart%2C%2075002%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Eden Perfect Paris"
                  />
                </div>
              </AnimatedSection>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
