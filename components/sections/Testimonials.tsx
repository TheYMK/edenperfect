"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GoldSeparator from "@/components/ui/GoldSeparator";

const testimonials = [
  { name: "Sophie M.", role: "Cliente fidèle", text: "Un endroit magique au cœur de Paris. Le soin visage était absolument divin, ma peau n'avait jamais été aussi lumineuse. Le personnel est attentionné et professionnel.", rating: 5 },
  { name: "Isabelle R.", role: "Cliente depuis 3 ans", text: "Je viens régulièrement pour mes extensions de cils et je suis toujours époustouflée par le résultat. Un vrai savoir-faire, une ambiance raffinée, je recommande vivement !", rating: 5 },
  { name: "Nadia K.", role: "Nouvelle cliente", text: "Mon lissage brésilien est parfait ! L'équipe m'a conseillée avec expertise et le résultat dépasse mes attentes. Une expérience premium du début à la fin.", rating: 5 },
  { name: "Amina B.", role: "Cliente VIP", text: "Le massage californien était une véritable parenthèse de bien-être. L'ambiance de l'institut est luxueuse et apaisante. Je reviendrai sans hésiter.", rating: 5 },
  { name: "Céline T.", role: "Cliente régulière", text: "Mes tresses sont toujours parfaites. L'équipe est talentueuse, à l'écoute et les produits utilisés sont de haute qualité. Eden Perfect est mon salon de confiance.", rating: 5 },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-spacing bg-site">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#B5903E] block mb-4">
              Témoignages
            </span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-[#2C2016]">
              Ce que disent nos clientes
            </h2>
          </AnimatedSection>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-10 md:p-14 text-center"
              style={{
                background: "rgba(181,144,62,0.03)",
                border: "1px solid rgba(181,144,62,0.15)",
              }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-[#B5903E] fill-[#B5903E]" />
                ))}
              </div>

              {/* Quote mark */}
              <div className="font-cormorant text-8xl text-[rgba(181,144,62,0.15)] leading-none mb-0 -mt-4">
                &ldquo;
              </div>

              <p className="font-cormorant text-2xl md:text-3xl font-light italic text-[rgba(44,32,22,0.85)] leading-relaxed -mt-6 mb-8">
                {testimonials[current].text}
              </p>

              <div className="h-px gold-separator w-24 mx-auto mb-6" />

              <div>
                <p className="font-cormorant text-xl font-medium text-[#B5903E]">
                  {testimonials[current].name}
                </p>
                <p className="font-inter text-xs tracking-widest uppercase text-[rgba(44,32,22,0.45)] mt-1">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-[rgba(181,144,62,0.3)] flex items-center justify-center text-[#B5903E] hover:border-[#B5903E] hover:bg-[rgba(181,144,62,0.08)] transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 h-2 bg-[#B5903E]"
                      : "w-2 h-2 bg-[rgba(181,144,62,0.3)]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-[rgba(181,144,62,0.3)] flex items-center justify-center text-[#B5903E] hover:border-[#B5903E] hover:bg-[rgba(181,144,62,0.08)] transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <GoldSeparator className="mt-16" />
      </div>
    </section>
  );
}
