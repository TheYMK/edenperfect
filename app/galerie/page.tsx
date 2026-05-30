"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoldSeparator from "@/components/ui/GoldSeparator";

const images = [
  { src: "/images/gallery/1.jpg", alt: "Lissage body wave", category: "Coiffure" },
  { src: "/images/gallery/2.jpg", alt: "Tresses bohèmes", category: "Tresses" },
  { src: "/images/gallery/3.jpg", alt: "Tresses collées", category: "Tresses" },
  { src: "/images/gallery/4.jpg", alt: "Coiffure élégante", category: "Coiffure" },
  { src: "/images/gallery/5.jpg", alt: "Curly bob", category: "Coiffure" },
  { src: "/images/gallery/6.jpg", alt: "Tresses africaines", category: "Tresses" },
  { src: "/images/gallery/7.jpg", alt: "Coiffure sur mesure", category: "Coiffure" },
  { src: "/images/gallery/8.jpg", alt: "Tresses tendance", category: "Tresses" },
  { src: "/images/gallery/9.jpg", alt: "Coupe stylée", category: "Coiffure" },
  { src: "/images/gallery/10.jpg", alt: "Coiffure naturelle", category: "Coiffure" },
  { src: "/images/gallery/11.jpg", alt: "Tresses créatives", category: "Tresses" },
  { src: "/images/gallery/12.jpg", alt: "Beauté naturelle", category: "Coiffure" },
  { src: "/images/gallery/13.jpg", alt: "Style unique", category: "Coiffure" },
];

export default function GaleriePage() {
  const [selected, setSelected] = useState<typeof images[number] | null>(null);

  return (
    <>
      <Navbar />
      <main>
        <div className="bg-site">
          {/* Hero */}
          <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/images/galery.jpeg')` }}
            />
            <div className="absolute inset-0 bg-[rgba(28,20,16,0.8)]" />
            <div className="relative z-10 text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#B5903E] block mb-4">
                  L&apos;art de la beauté
                </span>
                <h1 className="font-cormorant text-6xl md:text-8xl font-light text-white">Galerie</h1>
              </motion.div>
            </div>
          </section>

          <section className="section-spacing">
            <div className="max-w-7xl mx-auto px-6">
              <GoldSeparator className="mb-12" />

              {/* Masonry grid */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
                {images.map((image, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                    className="break-inside-avoid relative group overflow-hidden rounded-2xl cursor-pointer"
                    onClick={() => setSelected(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[rgba(46,30,24,0)] group-hover:bg-[rgba(46,30,24,0.55)] transition-all duration-400 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full border border-[#B5903E] flex items-center justify-center">
                          <ZoomIn size={18} className="text-[#B5903E]" />
                        </div>
                        <span className="font-inter text-xs tracking-widest uppercase text-[#B5903E]">
                          {image.category}
                        </span>
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
                  <img
                    src={selected.src}
                    alt={selected.alt}
                    className="w-full max-h-[80vh] object-contain rounded-2xl"
                  />
                  <div className="text-center mt-4">
                    <p className="font-cormorant text-xl text-white">{selected.alt}</p>
                    <p className="font-inter text-xs tracking-widest uppercase text-[#B5903E] mt-1">
                      {selected.category}
                    </p>
                  </div>
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
