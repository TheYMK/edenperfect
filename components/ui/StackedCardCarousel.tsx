"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface StackedCardCarouselProps {
  images: string[];
  interval?: number;
}

const VISIBLE_CARDS = 4;

const STACK_CONFIG = [
  { scale: 1, y: 0 },
  { scale: 0.93, y: 18 },
  { scale: 0.86, y: 36 },
  { scale: 0.79, y: 54 },
];

export default function StackedCardCarousel({
  images,
  interval = 3500,
}: StackedCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(advance, interval);
    return () => clearInterval(timer);
  }, [advance, interval]);

  const getImageIndex = (offset: number) =>
    (currentIndex + offset) % images.length;

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-4/3" style={{ marginBottom: 54 }}>
      {/* Background stacked cards (back to front) */}
      {Array.from({ length: VISIBLE_CARDS - 1 }, (_, i) => {
        const stackPos = VISIBLE_CARDS - 1 - i;
        const config = STACK_CONFIG[stackPos];
        const imgIdx = getImageIndex(stackPos);

        return (
          <motion.div
            key={`stack-${stackPos}`}
            className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10"
            animate={{
              scale: config.scale,
              y: config.y,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              zIndex: VISIBLE_CARDS - stackPos,
              boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            }}
          >
            <Image
              src={images[imgIdx]}
              alt={`Eden Perfect — Salon ${imgIdx + 1}`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 28rem, 90vw"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(94,61,40,0.25) 0%, transparent 40%)",
              }}
              aria-hidden
            />
          </motion.div>
        );
      })}

      {/* Front card with fade animation */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10"
          style={{
            zIndex: VISIBLE_CARDS + 1,
            boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Image
            src={images[currentIndex]}
            alt={`Eden Perfect — Salon ${currentIndex + 1}`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 28rem, 90vw"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(94,61,40,0.25) 0%, transparent 40%)",
            }}
            aria-hidden
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
