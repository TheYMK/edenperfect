"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  className?: string;
}

export default function AnimatedSection({ children, direction = "up", delay = 0, className = "" }: AnimatedSectionProps) {
  const getInitial = () => {
    switch (direction) {
      case "left": return { opacity: 0, x: -60 };
      case "right": return { opacity: 0, x: 60 };
      case "down": return { opacity: 0, y: -40 };
      default: return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
