"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoldSeparator from "@/components/ui/GoldSeparator";

const videos = [
  { src: "/videos/01_tiktok.mp4", alt: "Lissage body wave" },
  { src: "/videos/02_tiktok.mp4", alt: "Tresses bohèmes" },
  { src: "/videos/03_tiktok.mp4", alt: "Tresses collées" },
  { src: "/videos/04_tiktok.mp4", alt: "Coiffure élégante" },
  { src: "/videos/05_tiktok.mp4", alt: "Tresses africaines" },
  { src: "/videos/06_tiktok.mp4", alt: "Coiffure sur mesure" },
  { src: "/videos/07_tiktok.mp4", alt: "Coupe stylée" },
  { src: "/videos/08_tiktok.mp4", alt: "Tresses créatives" },
  { src: "/videos/09_tiktok.mp4", alt: "Beauté naturelle" },
  { src: "/videos/10_tiktok.mp4", alt: "Style unique" },
  { src: "/videos/11_tiktok.mp4", alt: "Coiffure tendance" },
];

export default function GaleriePage() {
  const [selected, setSelected] = useState<(typeof videos)[number] | null>(
    null,
  );

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
                  L&apos;art de la beauté
                </span>
                <h1 className="font-cormorant text-6xl md:text-8xl font-bold text-white">
                  Galerie
                </h1>
              </motion.div>
            </div>
          </section>

          <section className="section-spacing">
            <div className="max-w-7xl mx-auto px-6">
              <GoldSeparator className="mb-12" />

              {/* Masonry grid */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
                {videos.map((video, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                    className="break-inside-avoid relative group overflow-hidden rounded-2xl cursor-pointer"
                    onClick={() => setSelected(video)}
                  >
                    <video
                      src={video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={video.alt}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[rgba(46,30,24,0)] group-hover:bg-[rgba(46,30,24,0.55)] transition-all duration-400 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full border border-[#B5903E] flex items-center justify-center">
                          <Play size={18} className="text-[#B5903E]" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 border border-[rgba(181,144,62,0)] group-hover:border-[rgba(181,144,62,0.4)] rounded-2xl transition-all duration-400 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Lightbox */}
          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 bg-[rgba(28,20,16,0.97)] flex items-center justify-center p-6"
                onClick={() => setSelected(null)}
              >
                <button
                  className="absolute top-6 right-6 w-12 h-12 rounded-full border border-[rgba(181,144,62,0.4)] flex items-center justify-center text-[#B5903E] hover:bg-[rgba(181,144,62,0.1)] transition-all z-10"
                  onClick={() => setSelected(null)}
                >
                  <X size={20} />
                </button>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={(e) => e.stopPropagation()}
                  className="max-w-4xl w-full"
                >
                  <video
                    src={selected.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label={selected.alt}
                    className="w-full max-h-[80vh] object-contain rounded-2xl"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
