"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";
import { NAV_LINKS, BUSINESS_INFO } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-nav border-b border-[rgba(181,144,62,0.15)] py-3 shadow-sm"
            : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-full transition-opacity duration-300 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5903E]"
            aria-label="Eden Perfect — Accueil"
          >
            <BrandLogo size="nav" priority />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <NavLink
                key={href}
                label={label}
                href={href}
                active={pathname === href}
                scrolled={scrolled}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full btn-gold pulse-glow"
            >
              Réserver
            </a>
            <button
              className="md:hidden text-[#B5903E]"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg-primary)] flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={href}
                  className="font-cormorant text-4xl text-[#2C2016] hover:text-[#B5903E] transition-colors duration-300"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-8 py-3 rounded-full btn-gold text-sm"
            >
              Réserver maintenant
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  label,
  href,
  active,
  scrolled,
}: {
  label: string;
  href: string;
  active: boolean;
  scrolled: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative group font-inter text-sm font-semibold tracking-widest uppercase transition-colors duration-500 hover:text-[#B5903E] ${
        scrolled ? "text-[#2C2016]" : "text-white"
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-1 left-0 h-px bg-[#B5903E] transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}
