"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useSpring(0, { stiffness: 500, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 30 });

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        !!(target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button"))
      );
    };

    const leave = () => setIsVisible(false);

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", leave);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="rounded-full border border-[rgba(181,144,62,0.6)]"
          animate={{
            width: isHovering ? 48 : 36,
            height: isHovering ? 48 : 36,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.div>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#B5903E] pointer-events-none z-[99999]"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
