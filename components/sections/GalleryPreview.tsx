"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

const images = [
  {
    src: "/images/gallery/2.jpg",
    alt: "Tresses bohèmes",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/gallery/3.jpg",
    alt: "Tresses collées",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/4.jpg",
    alt: "Coiffure élégante",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/6.jpg",
    alt: "Tresses africaines",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/5.jpg",
    alt: "Curly bob",
    span: "col-span-1 row-span-1",
  },
];

export default function GalleryPreview() {
  return (
    <section className="section-spacing bg-site-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <AnimatedSection>
            <span className="font-inter text-xs sm:text-sm tracking-[0.3em] uppercase text-[#B5903E] block mb-4">
              Gallerie
            </span>
            <h2 className="font-cormorant text-4xl sm:text-4xl md:text-7xl font-bold text-[#2C2016] mb-8 leading-tight">
              L&apos;art de la beauté
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[500px] md:h-[600px]">
          {images.map(({ src, alt, span }, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-2xl ${span} group cursor-pointer`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[rgba(46,30,24,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                {/* <span className="font-cormorant font-bold text-lg text-white">
                  {alt}
                </span> */}
              </div>
              <div className="absolute inset-0 border border-[rgba(181,144,62,0)] group-hover:border-[rgba(181,144,62,0.4)] rounded-2xl transition-all duration-400" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/galerie"
            className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#C85A36] text-white font-inter text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#B5502F] hover:shadow-lg hover:shadow-black/25"
          >
            Voir toute la galerie
            <span className="text-[#B5903E]">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
