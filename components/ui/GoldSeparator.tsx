"use client";

import { motion } from "framer-motion";

export default function GoldSeparator({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`h-px gold-separator ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    />
  );
}
