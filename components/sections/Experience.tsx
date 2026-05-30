"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { value: 500, suffix: "+", label: "Clientes fidèles" },
  { value: 10, suffix: " ans", label: "D'expertise beauté" },
  { value: 98, suffix: "%", label: "Satisfaction client" },
  { value: 15, suffix: "+", label: "Prestations offertes" },
];

function Counter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (value / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span
      className="font-cormorant text-5xl md:text-6xl font-light"
      style={{
        background: "linear-gradient(135deg, #B5903E, #D4B87A)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {count}{suffix}
    </span>
  );
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-primary) 50%, var(--color-bg-surface) 100%)",
      }}
    >
      {/* Gold glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(181,144,62,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#B5903E] block mb-4">
              Excellence & Expertise
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#2C2016]">
              L&apos;expérience Eden Perfect
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, suffix, label }, i) => (
            <AnimatedSection key={label} delay={i * 0.1}>
              <div
                className="text-center p-8 rounded-2xl"
                style={{
                  background: "rgba(181,144,62,0.04)",
                  border: "1px solid rgba(181,144,62,0.12)",
                }}
              >
                <Counter value={value} suffix={suffix} inView={inView} />
                <p className="font-inter text-sm text-[rgba(44,32,22,0.55)] mt-3 tracking-wide">
                  {label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
