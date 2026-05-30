"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";
import { NAV_LINKS, BUSINESS_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-site-surface border-t border-[rgba(181,144,62,0.15)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4 transition-opacity hover:opacity-90" aria-label="Eden Perfect — Accueil">
              <BrandLogo size="footer" />
            </Link>
            <p className="font-inter text-sm text-[rgba(44,32,22,0.55)] leading-relaxed mt-4">
              Votre temple du bien-être et de l&apos;élégance au cœur de Paris.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[rgba(181,144,62,0.3)] flex items-center justify-center text-[#B5903E] hover:bg-[rgba(181,144,62,0.1)] hover:border-[#B5903E] transition-all duration-300"
              >
                <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[rgba(181,144,62,0.3)] flex items-center justify-center text-[#B5903E] hover:bg-[rgba(181,144,62,0.1)] hover:border-[#B5903E] transition-all duration-300"
              >
                <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#B5903E] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-inter text-sm text-[rgba(44,32,22,0.6)] hover:text-[#B5903E] transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/reservation"
                  className="font-inter text-sm text-[rgba(44,32,22,0.6)] hover:text-[#B5903E] transition-colors duration-300"
                >
                  Réserver
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#B5903E] mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#B5903E] mt-0.5 flex-shrink-0" />
                <span className="font-inter text-sm text-[rgba(44,32,22,0.6)]">
                  14 Rue Favart<br />75002 Paris
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#B5903E] flex-shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="font-inter text-sm text-[rgba(44,32,22,0.6)] hover:text-[#B5903E] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#B5903E] flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="font-inter text-sm text-[rgba(44,32,22,0.6)] hover:text-[#B5903E] transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#B5903E] mb-5">
              Horaires
            </h4>
            <ul className="space-y-2">
              {BUSINESS_INFO.hours.map(({ day, hours }) => (
                <li key={day} className="flex justify-between gap-4">
                  <span className="font-inter text-sm text-[rgba(44,32,22,0.5)]">{day}</span>
                  <span className="font-inter text-sm text-[rgba(44,32,22,0.8)]">{hours}</span>
                </li>
              ))}
            </ul>
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center px-5 py-2.5 rounded-full btn-gold text-xs"
            >
              Réserver en ligne
            </a>
          </div>
        </div>

        {/* Gold separator */}
        <div className="h-px gold-separator mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-[rgba(44,32,22,0.35)] tracking-wide">
            © {new Date().getFullYear()} Eden Perfect Institut de Beauté. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/mentions-legales"
              className="font-inter text-xs text-[rgba(44,32,22,0.35)] hover:text-[#B5903E] transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/mentions-legales"
              className="font-inter text-xs text-[rgba(44,32,22,0.35)] hover:text-[#B5903E] transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
