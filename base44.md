---
App.jsx:

import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider } from '@/lib/AuthContext';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Legal from './pages/Legal';

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/legal" element={<Legal />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App


---

index.css:

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
:root {
--background: 0 0% 4.3%;
--foreground: 45 30% 96%;
--card: 20 15% 8%;
--card-foreground: 45 30% 96%;
--popover: 20 15% 8%;
--popover-foreground: 45 30% 96%;
--primary: 43 61% 52%;
--primary-foreground: 0 0% 4%;
--secondary: 20 10% 12%;
--secondary-foreground: 45 30% 96%;
--muted: 20 10% 12%;
--muted-foreground: 45 15% 55%;
--accent: 43 61% 52%;
--accent-foreground: 0 0% 4%;
--destructive: 0 84.2% 60.2%;
--destructive-foreground: 0 0% 98%;
--border: 43 30% 25%;
--input: 20 15% 12%;
--ring: 43 61% 52%;
--radius: 0.5rem;

    --gold: #D4AF37;
    --gold-deep: #B8860B;
    --gold-light: #F0D060;
    --gold-champagne: #F5E6C8;
    --dark-bg: #0B0B0B;
    --dark-brown: #1A0B08;
    --dark-card: #141010;

}
}

@layer base {

- {
  @apply border-border;
  }

body {
@apply bg-[#0B0B0B] text-[#F5E6C8];
font-family: 'Inter', 'DM Sans', sans-serif;
overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
font-family: 'Cormorant Garamond', serif;
}

html {
scroll-behavior: smooth;
}
}

@layer utilities {
.font-cormorant {
font-family: 'Cormorant Garamond', serif;
}

.font-inter {
font-family: 'Inter', 'DM Sans', sans-serif;
}

.text-gold {
color: #D4AF37;
}

.text-gold-light {
color: #F0D060;
}

.text-champagne {
color: #F5E6C8;
}

.bg-gold {
background-color: #D4AF37;
}

.bg-dark-brown {
background-color: #1A0B08;
}

.bg-dark-card {
background-color: #141010;
}

.border-gold {
border-color: #D4AF37;
}

.gold-gradient {
background: linear-gradient(135deg, #D4AF37, #F0D060, #B8860B);
}

.gold-text-gradient {
background: linear-gradient(135deg, #D4AF37, #F0D060, #D4AF37);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}

.gold-border-glow {
border: 1px solid rgba(212, 175, 55, 0.4);
box-shadow: 0 0 20px rgba(212, 175, 55, 0.1), inset 0 0 20px rgba(212, 175, 55, 0.02);
}

.glass-dark {
background: rgba(20, 16, 16, 0.8);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
}

.glass-gold {
background: rgba(212, 175, 55, 0.05);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(212, 175, 55, 0.15);
}

.section-spacing {
padding-top: 7rem;
padding-bottom: 7rem;
}

.hero-overlay {
background: linear-gradient(to bottom, rgba(11,11,11,0.6) 0%, rgba(26,11,8,0.5) 50%, rgba(11,11,11,0.9) 100%);
}

.gold-separator {
background: linear-gradient(90deg, transparent, #D4AF37, #F0D060, #D4AF37, transparent);
}

.glow-gold {
box-shadow: 0 0 30px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.15);
}

.glow-gold-hover:hover {
box-shadow: 0 0 30px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.15);
}

.btn-gold {
background: linear-gradient(135deg, #D4AF37, #F0D060, #B8860B);
color: #0B0B0B;
font-family: 'Inter', sans-serif;
font-weight: 500;
letter-spacing: 0.1em;
text-transform: uppercase;
font-size: 0.75rem;
transition: all 0.3s ease;
}

.btn-gold:hover {
background: linear-gradient(135deg, #F0D060, #D4AF37, #D4AF37);
box-shadow: 0 0 25px rgba(212, 175, 55, 0.5);
transform: translateY(-1px);
}

.btn-outline-gold {
border: 1px solid #D4AF37;
color: #D4AF37;
font-family: 'Inter', sans-serif;
font-weight: 500;
letter-spacing: 0.1em;
text-transform: uppercase;
font-size: 0.75rem;
transition: all 0.3s ease;
}

.btn-outline-gold:hover {
background: rgba(212, 175, 55, 0.1);
box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
}

/_ Custom scrollbar _/
::-webkit-scrollbar {
width: 4px;
}

::-webkit-scrollbar-track {
background: #0B0B0B;
}

::-webkit-scrollbar-thumb {
background: #D4AF37;
border-radius: 2px;
}

/_ Cursor _/
.custom-cursor {
width: 12px;
height: 12px;
background: #D4AF37;
border-radius: 50%;
position: fixed;
pointer-events: none;
z-index: 99999;
transition: transform 0.1s ease;
mix-blend-mode: normal;
}

.custom-cursor-ring {
width: 36px;
height: 36px;
border: 1px solid rgba(212, 175, 55, 0.6);
border-radius: 50%;
position: fixed;
pointer-events: none;
z-index: 99998;
transition: transform 0.15s ease, width 0.2s ease, height 0.2s ease;
}
}

/_ Particle animation _/
@keyframes float-particle {
0% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0; }
10% { opacity: 1; }
90% { opacity: 0.6; }
100% { transform: translateY(-100vh) translateX(30px) scale(0.5); opacity: 0; }
}

@keyframes shimmer {
0% { background-position: -200% center; }
100% { background-position: 200% center; }
}

.shimmer-gold {
background: linear-gradient(90deg, #D4AF37 25%, #F0D060 50%, #D4AF37 75%);
background-size: 200% auto;
animation: shimmer 3s linear infinite;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}

@keyframes pulse-glow {
0%, 100% { box-shadow: 0 0 15px rgba(212, 175, 55, 0.3); }
50% { box-shadow: 0 0 35px rgba(212, 175, 55, 0.6); }
}

.pulse-glow {
animation: pulse-glow 2.5s ease-in-out infinite;
}

---

src/pages/About.jsx:

import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import GoldSeparator from '../components/ui/GoldSeparator';
import CTABanner from '../components/home/CTABanner';

const team = [
{
name: 'Yasmine',
role: 'Directrice & Experte Coiffure',
expertise: ['Lissage Brésilien', 'Colorations', 'Tresses Afro', 'Soins Capillaires'],
img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
},
{
name: 'Naïma',
role: 'Spécialiste Soins & Beauté',
expertise: ['Extensions de Cils', 'Soins Visage', 'Onglerie', 'Massage Californien'],
img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80',
},
];

export default function About() {
return (

<div className="bg-[#0B0B0B]">
{/_ Hero _/}
<section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
<div
className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80')` }}
/>
<div className="absolute inset-0 bg-[rgba(11,11,11,0.8)]" />
<div className="relative z-10 text-center">
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }} >
<span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] block mb-4">Notre Histoire</span>
<h1 className="font-cormorant text-6xl md:text-8xl font-light text-[#F5E6C8]">À Propos</h1>
</motion.div>
</div>
</section>

      {/* Story */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6">
          <GoldSeparator className="mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection direction="left">
              <div className="relative rounded-3xl overflow-hidden h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                  alt="Institut Eden Perfect"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,11,8,0.6)] to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-cormorant text-2xl italic text-[#D4AF37]">"L'excellence est notre signature"</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div>
                <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] block mb-4">Notre Histoire</span>
                <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#F5E6C8] mb-6 leading-tight">
                  Né d'une passion pour<br />
                  <em className="not-italic text-[#D4AF37]">la beauté parisienne</em>
                </h2>
                <p className="font-inter text-sm text-[rgba(245,230,200,0.65)] leading-relaxed mb-6">
                  Eden Perfect est né d'un rêve : créer un espace où la beauté rencontre l'art, où chaque cliente est traitée avec l'attention d'une invitée de marque. Depuis notre ouverture au cœur du 2ème arrondissement de Paris, nous avons cultivé une réputation d'excellence et de savoir-faire.
                </p>
                <p className="font-inter text-sm text-[rgba(245,230,200,0.65)] leading-relaxed mb-8">
                  Notre équipe passionnée maîtrise les techniques les plus avancées de coiffure afro, de soins visage, d'onglerie et de bien-être, tout en restant à l'écoute de chaque cliente pour une expérience véritablement sur-mesure.
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-px w-12 gold-separator" />
                  <span className="font-cormorant text-lg italic text-[rgba(245,230,200,0.5)]">14 Rue Favart, Paris 2ème</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <GoldSeparator className="mb-24" />

          {/* Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection direction="left" delay={0.1}>
              <div>
                <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] block mb-4">Notre Philosophie</span>
                <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#F5E6C8] mb-6 leading-tight">
                  La beauté comme<br />
                  <em className="not-italic text-[#D4AF37]">art de vivre</em>
                </h2>
                <p className="font-inter text-sm text-[rgba(245,230,200,0.65)] leading-relaxed mb-6">
                  Chez Eden Perfect, nous croyons que la beauté est bien plus qu'une apparence — c'est une façon d'être, de se sentir bien dans sa peau et de rayonner de l'intérieur. Chaque prestation est une célébration de votre individualité.
                </p>
                <div className="space-y-4 mt-8">
                  {['Expertise & savoir-faire', 'Produits de haute qualité', 'Écoute & personnalisation', 'Ambiance luxueuse & apaisante'].map(v => (
                    <div key={v} className="flex items-center gap-4">
                      <div className="w-8 h-px bg-[#D4AF37]" />
                      <span className="font-inter text-sm text-[rgba(245,230,200,0.7)] tracking-wide">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
                  alt="Philosophie Eden Perfect"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,11,8,0.5)] to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedSection>
              <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] block mb-4">Notre Équipe</span>
              <h2 className="font-cormorant text-5xl md:text-6xl font-light text-[#F5E6C8]">
                Des professionnelles passionnées
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map(({ name, role, expertise, img }, i) => (
              <AnimatedSection key={name} delay={i * 0.15}>
                <div
                  className="group rounded-3xl overflow-hidden"
                  style={{ border: '1px solid rgba(212,175,55,0.15)' }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,11,11,0.9)] via-[rgba(11,11,11,0.3)] to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <h3 className="font-cormorant text-3xl font-light text-[#F5E6C8]">{name}</h3>
                      <p className="font-inter text-xs tracking-widest uppercase text-[#D4AF37] mt-1">{role}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-[rgba(212,175,55,0.03)]">
                    <div className="flex flex-wrap gap-2">
                      {expertise.map(e => (
                        <span key={e} className="font-inter text-xs px-3 py-1.5 rounded-full" style={{ border: '1px solid rgba(212,175,55,0.25)', color: 'rgba(245,230,200,0.7)' }}>
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>

);
}

---

src/pages/Booking.jsx:

import { motion } from 'framer-motion';
import { Clock, MapPin, CheckCircle, Star, Calendar } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import GoldSeparator from '../components/ui/GoldSeparator';

const PLANITY_URL = 'https://www.planity.com/eden-perfect-75002-paris-23v';

const trustIndicators = [
{ icon: CheckCircle, text: 'Confirmation immédiate' },
{ icon: Clock, text: 'Disponible 24h/24' },
{ icon: Star, text: 'Réservation gratuite' },
{ icon: Calendar, text: 'Annulation facile' },
];

export default function Booking() {
return (

<div className="bg-[#0B0B0B]">
{/_ Hero _/}
<section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
<div
className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80')` }}
/>
<div className="absolute inset-0 bg-[rgba(11,11,11,0.82)]" />
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.07)_0%,transparent_70%)]" />
<div className="relative z-10 text-center px-6">
<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
<span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] block mb-4">En ligne · Gratuit · 24h/24</span>
<h1 className="font-cormorant text-6xl md:text-8xl font-light text-[#F5E6C8] mb-4">Réservation</h1>
<p className="font-inter text-base text-[rgba(245,230,200,0.6)] tracking-wide">
Réservez votre soin avec confirmation immédiate
</p>
</motion.div>
</div>
</section>

      <section className="section-spacing">
        <div className="max-w-5xl mx-auto px-6">
          <GoldSeparator className="mb-16" />

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            {trustIndicators.map(({ icon: Icon, text }, i) => (
              <AnimatedSection key={text} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl" style={{ border: '1px solid rgba(212,175,55,0.12)', background: 'rgba(212,175,55,0.03)' }}>
                  <div className="w-12 h-12 rounded-full bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-[#D4AF37]" />
                  </div>
                  <p className="font-inter text-xs text-[rgba(245,230,200,0.65)] tracking-wide">{text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Main CTA */}
          <AnimatedSection>
            <div
              className="relative rounded-3xl overflow-hidden text-center p-12 md:p-16"
              style={{ border: '1px solid rgba(212,175,55,0.2)' }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="font-cormorant text-7xl text-[rgba(212,175,55,0.08)] leading-none mb-0 -mt-4">✦</div>
                <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#F5E6C8] mb-4">
                  Prendre rendez-vous
                </h2>
                <p className="font-inter text-sm text-[rgba(245,230,200,0.55)] mb-10 max-w-md mx-auto leading-relaxed">
                  Choisissez votre prestation, sélectionnez votre créneau et confirmez instantanément via notre partenaire Planity.
                </p>
                <motion.a
                  href={PLANITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-12 py-5 rounded-full btn-gold text-sm glow-gold pulse-glow"
                >
                  <Calendar size={16} />
                  Réserver en ligne sur Planity
                </motion.a>
              </div>
            </div>
          </AnimatedSection>

          {/* Address & hours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <AnimatedSection direction="left" delay={0.1}>
              <div className="p-8 rounded-2xl" style={{ border: '1px solid rgba(212,175,55,0.12)', background: 'rgba(212,175,55,0.02)' }}>
                <div className="flex items-center gap-3 mb-5">
                  <MapPin size={18} className="text-[#D4AF37]" />
                  <h3 className="font-cormorant text-xl text-[#F5E6C8]">Nous trouver</h3>
                </div>
                <p className="font-inter text-sm text-[rgba(245,230,200,0.7)] leading-relaxed mb-3">
                  14 Rue Favart<br />75002 Paris
                </p>
                <p className="font-inter text-xs text-[rgba(245,230,200,0.4)]">Proche de l'Opéra et du Palais Royal</p>
                <a
                  href="https://maps.google.com/?q=14+Rue+Favart+75002+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 font-inter text-xs tracking-wider text-[#D4AF37] hover:text-[#F0D060] transition-colors"
                >
                  Voir sur Google Maps →
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="p-8 rounded-2xl" style={{ border: '1px solid rgba(212,175,55,0.12)', background: 'rgba(212,175,55,0.02)' }}>
                <div className="flex items-center gap-3 mb-5">
                  <Clock size={18} className="text-[#D4AF37]" />
                  <h3 className="font-cormorant text-xl text-[#F5E6C8]">Horaires d'ouverture</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { day: 'Lundi – Vendredi', hours: '9h00 – 20h00' },
                    { day: 'Samedi', hours: '9h00 – 19h00' },
                    { day: 'Dimanche', hours: 'Fermé' },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between">
                      <span className="font-inter text-sm text-[rgba(245,230,200,0.5)]">{day}</span>
                      <span className="font-inter text-sm text-[rgba(245,230,200,0.85)]">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>

);
}

---

src/pages/Contact.jsx:

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import GoldSeparator from '../components/ui/GoldSeparator';

export default function Contact() {
const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
const [sent, setSent] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();
setSent(true);
};

return (

<div className="bg-[#0B0B0B]">
{/_ Hero _/}
<section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
<div
className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1920&q=80')` }}
/>
<div className="absolute inset-0 bg-[rgba(11,11,11,0.82)]" />
<div className="relative z-10 text-center">
<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
<span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] block mb-4">Nous sommes à votre écoute</span>
<h1 className="font-cormorant text-6xl md:text-8xl font-light text-[#F5E6C8]">Contact</h1>
</motion.div>
</div>
</section>

      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6">
          <GoldSeparator className="mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <AnimatedSection direction="left">
              <div>
                <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] block mb-4">Informations</span>
                <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#F5E6C8] mb-8 leading-tight">
                  Venez nous rendre visite
                </h2>

                <div className="space-y-6">
                  {[
                    { icon: MapPin, label: 'Adresse', value: '14 Rue Favart, 75002 Paris', link: 'https://maps.google.com/?q=14+Rue+Favart+75002+Paris' },
                    { icon: Phone, label: 'Téléphone', value: 'Nous appeler', link: 'tel:+33' },
                    { icon: Mail, label: 'E-mail', value: 'contact@edenperfect.fr', link: 'mailto:contact@edenperfect.fr' },
                  ].map(({ icon: Icon, label, value, link }) => (
                    <div key={label} className="flex items-start gap-4 p-5 rounded-2xl" style={{ border: '1px solid rgba(212,175,55,0.12)', background: 'rgba(212,175,55,0.02)' }}>
                      <div className="w-10 h-10 rounded-full bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-[#D4AF37]" />
                      </div>
                      <div>
                        <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[rgba(245,230,200,0.4)] mb-1">{label}</p>
                        <a href={link} target="_blank" rel="noopener noreferrer" className="font-inter text-sm text-[rgba(245,230,200,0.8)] hover:text-[#D4AF37] transition-colors">{value}</a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hours */}
                <div className="mt-8 p-6 rounded-2xl" style={{ border: '1px solid rgba(212,175,55,0.12)', background: 'rgba(212,175,55,0.02)' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock size={16} className="text-[#D4AF37]" />
                    <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-[rgba(245,230,200,0.4)]">Horaires d'ouverture</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { day: 'Lundi – Vendredi', hours: '9h00 – 20h00' },
                      { day: 'Samedi', hours: '9h00 – 19h00' },
                      { day: 'Dimanche', hours: 'Fermé' },
                    ].map(({ day, hours }) => (
                      <div key={day} className="flex justify-between gap-4">
                        <span className="font-inter text-sm text-[rgba(245,230,200,0.5)]">{day}</span>
                        <span className="font-inter text-sm text-[rgba(245,230,200,0.8)]">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div className="mt-6 flex items-center gap-4">
                  <span className="font-inter text-xs text-[rgba(245,230,200,0.4)] tracking-widest uppercase">Suivez-nous</span>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)] transition-all">
                    <Instagram size={16} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)] transition-all">
                    <Facebook size={16} />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact form */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="p-8 md:p-10 rounded-3xl" style={{ border: '1px solid rgba(212,175,55,0.15)', background: 'rgba(212,175,55,0.02)' }}>
                <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] block mb-4">Formulaire de contact</span>
                <h3 className="font-cormorant text-3xl font-light text-[#F5E6C8] mb-8">Envoyez-nous un message</h3>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-[rgba(212,175,55,0.1)] border border-[#D4AF37] flex items-center justify-center mx-auto mb-4">
                      <Send size={24} className="text-[#D4AF37]" />
                    </div>
                    <h4 className="font-cormorant text-2xl text-[#F5E6C8] mb-2">Message envoyé !</h4>
                    <p className="font-inter text-sm text-[rgba(245,230,200,0.55)]">Nous vous répondrons dans les plus brefs délais.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { name: 'name', label: 'Nom complet', type: 'text', placeholder: 'Votre nom' },
                      { name: 'email', label: 'Adresse e-mail', type: 'email', placeholder: 'votre@email.fr' },
                      { name: 'subject', label: 'Sujet', type: 'text', placeholder: 'Votre sujet' },
                    ].map(({ name, label, type, placeholder }) => (
                      <div key={name}>
                        <label className="block font-inter text-[10px] tracking-[0.3em] uppercase text-[rgba(245,230,200,0.5)] mb-2">{label}</label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={form[name]}
                          onChange={e => setForm(f => ({ ...f, [name]: e.target.value }))}
                          required
                          className="w-full px-5 py-3.5 rounded-xl bg-[rgba(212,175,55,0.04)] border border-[rgba(212,175,55,0.18)] text-[#F5E6C8] font-inter text-sm placeholder-[rgba(245,230,200,0.25)] focus:outline-none focus:border-[rgba(212,175,55,0.6)] transition-colors"
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block font-inter text-[10px] tracking-[0.3em] uppercase text-[rgba(245,230,200,0.5)] mb-2">Message</label>
                      <textarea
                        rows={5}
                        placeholder="Votre message..."
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        required
                        className="w-full px-5 py-3.5 rounded-xl bg-[rgba(212,175,55,0.04)] border border-[rgba(212,175,55,0.18)] text-[#F5E6C8] font-inter text-sm placeholder-[rgba(245,230,200,0.25)] focus:outline-none focus:border-[rgba(212,175,55,0.6)] transition-colors resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl btn-gold text-sm flex items-center justify-center gap-2 mt-2"
                    >
                      <Send size={14} />
                      Envoyer le message
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Map */}
          <AnimatedSection delay={0.3} className="mt-16">
            <div className="rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(212,175,55,0.15)', height: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.6665395!2d2.3440!3d48.8672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e19b900013d%3A0x1ad5bf78b7dd06ad!2s14%20Rue%20Favart%2C%2075002%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eden Perfect Paris"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>

);
}

---

src/pages/ForgotPassword.jsx:

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ArrowLeft, Loader2 } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";

export default function ForgotPassword() {
const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);
const [sent, setSent] = useState(false);

const handleSubmit = async (e) => {
e.preventDefault();
setLoading(true);
try {
await base44.auth.resetPasswordRequest(email);
} catch {
// Always show success regardless
} finally {
setLoading(false);
setSent(true);
}
};

return (
<AuthLayout
icon={Mail}
title="Reset password"
subtitle="We'll send you a link to reset it"
footer={

<Link to="/login" className="text-primary font-medium hover:underline">
<ArrowLeft className="w-3 h-3 inline mr-1" />Back to log in
</Link>
} >
{sent ? (
<p className="text-sm text-foreground text-center">
If an account exists with that email, you'll receive a password reset link shortly.
</p>
) : (
<form onSubmit={handleSubmit} className="space-y-4">
<div className="space-y-2">
<Label htmlFor="email">Email address</Label>
<div className="relative">
<Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
<Input
id="email"
type="email"
autoComplete="email"
autoFocus
placeholder="you@example.com"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="pl-10 h-12"
required
/>
</div>
</div>
<Button type="submit" className="w-full h-12 font-medium" disabled={loading}>
{loading ? (
<>
<Loader2 className="w-4 h-4 mr-2 animate-spin" />
Sending...
</>
) : (
"Send reset link"
)}
</Button>
</form>
)}
</AuthLayout>
);
}

---

src/pages/Gallery.jsx:

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import GoldSeparator from '../components/ui/GoldSeparator';

const images = [
{ src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80', alt: 'Salon luxueux', category: 'Ambiance' },
{ src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', alt: 'Soins beauté', category: 'Soins' },
{ src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', alt: 'Soin visage', category: 'Soins Visage' },
{ src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', alt: 'Onglerie', category: 'Onglerie' },
{ src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80', alt: 'Coiffure', category: 'Coiffure' },
{ src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', alt: 'Maquillage', category: 'Beauté' },
{ src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80', alt: 'Spa', category: 'Bien-être' },
{ src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80', alt: 'Beauté naturelle', category: 'Soins' },
{ src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80', alt: 'Institut beauté', category: 'Ambiance' },
{ src: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80', alt: 'Soins cheveux', category: 'Coiffure' },
{ src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', alt: 'Portrait beauté', category: 'Beauté' },
{ src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80', alt: 'Ambiance salon', category: 'Ambiance' },
];

export default function Gallery() {
const [selected, setSelected] = useState(null);

return (

<div className="bg-[#0B0B0B]">
{/_ Hero _/}
<section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
<div
className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1920&q=80')` }}
/>
<div className="absolute inset-0 bg-[rgba(11,11,11,0.8)]" />
<div className="relative z-10 text-center">
<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
<span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] block mb-4">L'art de la beauté</span>
<h1 className="font-cormorant text-6xl md:text-8xl font-light text-[#F5E6C8]">Galerie</h1>
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
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="break-inside-avoid relative group overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setSelected(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[rgba(26,11,8,0)] group-hover:bg-[rgba(26,11,8,0.55)] transition-all duration-400 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center">
                      <ZoomIn size={18} className="text-[#D4AF37]" />
                    </div>
                    <span className="font-inter text-xs tracking-widest uppercase text-[#D4AF37]">{image.category}</span>
                  </div>
                </div>
                <div className="absolute inset-0 border border-[rgba(212,175,55,0)] group-hover:border-[rgba(212,175,55,0.4)] rounded-2xl transition-all duration-400 pointer-events-none" />
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
            className="fixed inset-0 z-50 bg-[rgba(11,11,11,0.97)] flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-[rgba(212,175,55,0.4)] flex items-center justify-center text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)] transition-all z-10"
              onClick={() => setSelected(null)}
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={e => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <img
                src={selected.src}
                alt={selected.alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <div className="text-center mt-4">
                <p className="font-cormorant text-xl text-[#F5E6C8]">{selected.alt}</p>
                <p className="font-inter text-xs tracking-widest uppercase text-[#D4AF37] mt-1">{selected.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

);
}

---

src/pages/Home.jsx:

import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import GalleryPreview from '../components/home/GalleryPreview';
import CTABanner from '../components/home/CTABanner';

export default function Home() {
return (

<div>
<HeroSection />
<IntroSection />
<StatsSection />
<TestimonialsSection />
<GalleryPreview />
<CTABanner />
</div>
);
}

---

src/pages/Legal.jsx:

import { motion } from 'framer-motion';
import GoldSeparator from '../components/ui/GoldSeparator';

export default function Legal() {
return (

<div className="bg-[#0B0B0B]">
<section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[rgba(26,11,8,0.95)]" />
<div className="relative z-10 text-center">
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
<h1 className="font-cormorant text-5xl md:text-6xl font-light text-[#F5E6C8]">Mentions Légales</h1>
<p className="font-inter text-xs tracking-[0.3em] uppercase text-[#D4AF37] mt-3">Politique de confidentialité & RGPD</p>
</motion.div>
</div>
</section>

      <section className="section-spacing">
        <div className="max-w-3xl mx-auto px-6">
          <GoldSeparator className="mb-12" />

          <div className="space-y-10 font-inter text-sm text-[rgba(245,230,200,0.65)] leading-relaxed">
            {[
              {
                title: '1. Informations légales',
                content: `Eden Perfect Institut de Beauté\nAdresse : 14 Rue Favart, 75002 Paris, France\nE-mail : contact@edenperfect.fr\n\nLe présent site est édité par Eden Perfect.`,
              },
              {
                title: '2. Hébergement',
                content: `Ce site est hébergé par des services cloud conformes aux standards européens de protection des données.`,
              },
              {
                title: '3. Propriété intellectuelle',
                content: `L'ensemble des contenus de ce site (textes, images, design, logo) est la propriété exclusive d'Eden Perfect et est protégé par les lois en vigueur relatives à la propriété intellectuelle. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable.`,
              },
              {
                title: '4. Protection des données personnelles (RGPD)',
                content: `Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données personnelles.\n\nLes données collectées via le formulaire de contact sont uniquement utilisées pour répondre à vos demandes et ne sont jamais transmises à des tiers.\n\nPour exercer vos droits, contactez-nous à : contact@edenperfect.fr`,
              },
              {
                title: '5. Cookies',
                content: `Ce site peut utiliser des cookies techniques pour améliorer votre expérience de navigation. Vous pouvez les désactiver depuis les paramètres de votre navigateur.`,
              },
              {
                title: '6. Réservation en ligne',
                content: `Les réservations en ligne sont gérées par Planity, tiers de confiance certifié. Veuillez consulter les conditions générales de Planity pour toute information relative à la gestion de vos données dans le cadre de la prise de rendez-vous.`,
              },
              {
                title: '7. Limitation de responsabilité',
                content: `Eden Perfect s'efforce d'assurer l'exactitude des informations présentes sur ce site mais ne peut garantir l'exhaustivité ou l'actualité des contenus. L'établissement décline toute responsabilité pour les erreurs ou omissions.`,
              },
            ].map(({ title, content }) => (
              <div key={title}>
                <h2 className="font-cormorant text-2xl font-medium text-[#F5E6C8] mb-4"
                  style={{ color: '#D4AF37', fontFamily: 'Cormorant Garamond, serif' }}>
                  {title}
                </h2>
                <p className="whitespace-pre-line">{content}</p>
              </div>
            ))}

            <div className="pt-8">
              <GoldSeparator />
              <p className="text-center mt-6 font-inter text-xs text-[rgba(245,230,200,0.35)]">
                © {new Date().getFullYear()} Eden Perfect Institut de Beauté · Paris 2ème
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

);
}

---

src/pages/Services.jsx:

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Sparkles, Hand, Star, Eye, Zap, Flower2, Droplets, Feather, Crown, Wind } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import GoldSeparator from '../components/ui/GoldSeparator';
import CTABanner from '../components/home/CTABanner';

const PLANITY_URL = 'https://www.planity.com/eden-perfect-75002-paris-23v';

const categories = [
{ id: 'all', label: 'Tout voir' },
{ id: 'coloration', label: 'Coloration & Mèches' },
{ id: 'soins-cheveux', label: 'Soins Cheveux' },
{ id: 'coupe', label: 'Coupe & Coiffure' },
{ id: 'lissage', label: 'Lissage & Défrisage' },
{ id: 'tresses', label: 'Tresses' },
{ id: 'soins-visage', label: 'Soins Visage' },
{ id: 'massage', label: 'Massage' },
{ id: 'ongles', label: 'Onglerie' },
{ id: 'epilation', label: 'Épilation' },
];

const services = [
// Coloration
{ cat: 'coloration', icon: Droplets, name: 'Coloration, shampoing, brushing — Cheveux courts', duration: '1h 10min', price: '60 €' },
{ cat: 'coloration', icon: Droplets, name: 'Coloration, shampoing, brushing — Cheveux mi-longs', duration: '1h 15min', price: '65 €' },
{ cat: 'coloration', icon: Droplets, name: 'Coloration, shampoing, brushing — Cheveux longs', duration: '1h 20min', price: '70 €' },
{ cat: 'coloration', icon: Droplets, name: 'Coloration, shampoing, brushing — Cheveux très longs', duration: '1h 20min', price: 'Sur devis' },
{ cat: 'coloration', icon: Droplets, name: 'Coloration + brushing racines', duration: '45min', price: 'À partir de 55 €' },

// Soins cheveux
{ cat: 'soins-cheveux', icon: Sparkles, name: 'Shampoing Soin express cheveux courts afro + coiffage', duration: '45min', price: '45 €' },
{ cat: 'soins-cheveux', icon: Sparkles, name: 'Rituel bien-être fauteuil massant (masque + huiles essentielles)', duration: '1h 30min', price: '75 €' },
{ cat: 'soins-cheveux', icon: Sparkles, name: 'Soin capillaire rajeunissant avec brushing', duration: '45min', price: '65 €' },
{ cat: 'soins-cheveux', icon: Sparkles, name: 'Soin Botox – Silk Press', duration: '45min', price: '90 €' },
{ cat: 'soins-cheveux', icon: Sparkles, name: 'Soin capillaire entretien + coiffage (cheveux courts)', duration: '40min', price: '42 €' },

// Coupe
{ cat: 'coupe', icon: Scissors, name: 'Homme — Shampoing & Coupe', duration: '30min', price: '28 €' },
{ cat: 'coupe', icon: Scissors, name: 'Homme — Shampoing soin profond + Brushing', duration: '1h', price: 'À partir de 55 €' },
{ cat: 'coupe', icon: Scissors, name: 'Homme — Shampoing + Brushing + Nattes', duration: '1h', price: 'À partir de 55 €' },
{ cat: 'coupe', icon: Scissors, name: 'Femme — Shampoing traitant + Soin + Coupe (mi-longs/longs)', duration: '45min', price: '55 € – 65 €' },
{ cat: 'coupe', icon: Scissors, name: 'Femme — Coupe Transformation + Séchage (courts)', duration: '30min', price: '45 €' },

// Lissage
{ cat: 'lissage', icon: Wind, name: 'Lissage Brésilien — Cheveux courts (+ soin Botox offert)', duration: '2h', price: '200 €' },
{ cat: 'lissage', icon: Wind, name: 'Lissage Brésilien — Cheveux mi-longs (+ soin Botox offert)', duration: '2h', price: '220 €' },
{ cat: 'lissage', icon: Wind, name: 'Lissage Brésilien — Cheveux longs + coupe (+ soin Botox offert)', duration: '2h 30min', price: '230 €' },
{ cat: 'lissage', icon: Wind, name: 'Lissage Brésilien — Cheveux très longs + coupe simple', duration: '2h 30min', price: '200 €' },
{ cat: 'lissage', icon: Wind, name: 'Soin Botox — Cheveux courts', duration: '1h 30min', price: '90 €' },
{ cat: 'lissage', icon: Zap, name: 'Défrisage AFFIRM — Cheveux courts', duration: '1h 30min', price: '80 €' },
{ cat: 'lissage', icon: Zap, name: 'Défrisage AFFIRM — Cheveux mi-longs', duration: '1h 30min', price: '90 €' },
{ cat: 'lissage', icon: Zap, name: 'Défrisage AFFIRM — Cheveux longs', duration: '2h 25min', price: '100 €' },
{ cat: 'lissage', icon: Zap, name: 'Défrisage AFFIRM — Cheveux très longs', duration: '2h 25min', price: 'Sur devis' },

// Tresses
{ cat: 'tresses', icon: Crown, name: 'Retrait de natte', duration: '15min', price: '15 €' },
{ cat: 'tresses', icon: Crown, name: 'Tresse pour perruque', duration: '30min', price: '15 € – 25 €' },
{ cat: 'tresses', icon: Crown, name: 'Entretien de natte', duration: '40min', price: '25 € – 35 €' },
{ cat: 'tresses', icon: Crown, name: 'Retrait de Braid', duration: '40min', price: '25 € – 35 €' },
{ cat: 'tresses', icon: Crown, name: '2 Grosses nattes + rajout', duration: '15min', price: '30 €' },

// Soins visage
{ cat: 'soins-visage', icon: Flower2, name: 'Soin visage hydratant express', duration: '30min', price: '45 €' },
{ cat: 'soins-visage', icon: Flower2, name: 'Soin visage anti-âge complet', duration: '1h', price: '75 €' },
{ cat: 'soins-visage', icon: Flower2, name: 'Ritual visage au collagène', duration: '1h 15min', price: '90 €' },

// Massage
{ cat: 'massage', icon: Hand, name: 'Massage Californien — 30 minutes', duration: '30min', price: '45 €' },
{ cat: 'massage', icon: Hand, name: 'Massage Californien — 1 heure', duration: '1h', price: '75 €' },
{ cat: 'massage', icon: Hand, name: 'Rituel Corps Complet', duration: '1h 30min', price: '110 €' },

// Ongles
{ cat: 'ongles', icon: Star, name: 'Pose gel couleur (mains)', duration: '1h', price: '45 €' },
{ cat: 'ongles', icon: Star, name: 'Nail Art classique', duration: '45min', price: '35 €' },
{ cat: 'ongles', icon: Star, name: 'Faux ongles — Pose complète', duration: '1h 15min', price: '55 €' },
{ cat: 'ongles', icon: Star, name: 'Manucure + Vernis semi-permanent', duration: '50min', price: '40 €' },

// Épilation
{ cat: 'epilation', icon: Feather, name: 'Épilation sourcils', duration: '15min', price: '10 €' },
{ cat: 'epilation', icon: Feather, name: 'Épilation lèvre supérieure', duration: '10min', price: '8 €' },
{ cat: 'epilation', icon: Feather, name: 'Épilation demi-jambes', duration: '30min', price: '22 €' },
{ cat: 'epilation', icon: Feather, name: 'Épilation jambes complètes', duration: '45min', price: '35 €' },
{ cat: 'epilation', icon: Feather, name: 'Épilation maillot intégral', duration: '45min', price: '40 €' },
];

export default function Services() {
const [activeCategory, setActiveCategory] = useState('all');

const filtered = activeCategory === 'all'
? services
: services.filter(s => s.cat === activeCategory);

return (

<div className="bg-[#0B0B0B]">
{/_ Hero _/}
<section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
<div
className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: `url('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=80')` }}
/>
<div className="absolute inset-0 bg-[rgba(11,11,11,0.82)]" />
<div className="relative z-10 text-center">
<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
<span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] block mb-4">Excellence & Savoir-faire</span>
<h1 className="font-cormorant text-6xl md:text-8xl font-light text-[#F5E6C8]">Nos Prestations</h1>
</motion.div>
</div>
</section>

      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6">
          <GoldSeparator className="mb-12" />

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-inter text-xs px-5 py-2.5 rounded-full transition-all duration-300 tracking-wider ${
                  activeCategory === cat.id
                    ? 'btn-gold glow-gold'
                    : 'border border-[rgba(212,175,55,0.25)] text-[rgba(245,230,200,0.6)] hover:border-[rgba(212,175,55,0.5)] hover:text-[#D4AF37]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Services grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((service, i) => (
                <ServiceCard key={i} service={service} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTABanner />
    </div>

);
}

function ServiceCard({ service, index }) {
const Icon = service.icon;
return (
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.4) }}
className="group relative rounded-2xl p-6 flex flex-col gap-4 cursor-default transition-all duration-400"
style={{
        background: 'rgba(212,175,55,0.03)',
        border: '1px solid rgba(212,175,55,0.12)',
      }}
onMouseEnter={e => {
e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)';
e.currentTarget.style.boxShadow = '0 0 25px rgba(212,175,55,0.1)';
e.currentTarget.style.transform = 'translateY(-3px)';
}}
onMouseLeave={e => {
e.currentTarget.style.borderColor = 'rgba(212,175,55,0.12)';
e.currentTarget.style.boxShadow = 'none';
e.currentTarget.style.transform = 'translateY(0)';
}} >

<div className="flex items-start justify-between gap-3">
<div className="w-10 h-10 rounded-full bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center flex-shrink-0">
<Icon size={16} className="text-[#D4AF37]" />
</div>
<span className="font-cormorant text-2xl font-light text-[#D4AF37]">{service.price}</span>
</div>

      <div className="flex-1">
        <h3 className="font-cormorant text-lg font-medium text-[#F5E6C8] leading-snug mb-2">{service.name}</h3>
        <div className="flex items-center gap-2">
          <div className="w-4 h-px bg-[#D4AF37]" />
          <span className="font-inter text-xs text-[rgba(245,230,200,0.45)] tracking-wide">{service.duration}</span>
        </div>
      </div>

      <a
        href={PLANITY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full btn-outline-gold text-[11px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Réserver ce soin →
      </a>
    </motion.div>

);
}

---

src/components/home/CTABanner.jsx:

import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

const PLANITY_URL = 'https://www.planity.com/eden-perfect-75002-paris-23v';

export default function CTABanner() {
return (

<section className="relative py-32 overflow-hidden">
{/_ Background _/}
<div
className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1920&q=80')` }}
/>
<div className="absolute inset-0 bg-[rgba(11,11,11,0.85)]" />
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 gold-separator" />
            <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#D4AF37]">Réservation en ligne</span>
            <div className="h-px w-12 gold-separator" />
          </div>

          <h2 className="font-cormorant text-5xl md:text-7xl font-light text-[#F5E6C8] leading-tight mb-6">
            Prenez rendez-vous avec
            <span className="block" style={{
              background: 'linear-gradient(135deg, #D4AF37, #F0D060, #D4AF37)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              l'excellence
            </span>
          </h2>

          <p className="font-inter text-base text-[rgba(245,230,200,0.6)] tracking-wide mb-10 max-w-xl mx-auto">
            Réservez votre soin en ligne 24h/24, gratuitement, avec confirmation immédiate.
          </p>

          <motion.a
            href={PLANITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full btn-gold text-sm glow-gold"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Réserver maintenant</span>
            <span className="text-[#0B0B0B]">→</span>
          </motion.a>

          <div className="flex items-center justify-center gap-8 mt-10">
            {['Confirmation immédiate', '24h/24 · 7j/7', 'Gratuit'].map(text => (
              <div key={text} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="font-inter text-xs text-[rgba(245,230,200,0.5)] tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

);
}

---

src/components/home/GalleryPreview.jsx:

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../ui/AnimatedSection';

const images = [
{ src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', alt: 'Salon de beauté', span: 'col-span-1 row-span-2' },
{ src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', alt: 'Soin visage', span: 'col-span-1 row-span-1' },
{ src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', alt: 'Onglerie', span: 'col-span-1 row-span-1' },
{ src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80', alt: 'Coiffure', span: 'col-span-1 row-span-1' },
{ src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', alt: 'Maquillage', span: 'col-span-1 row-span-1' },
];

export default function GalleryPreview() {
return (

<section className="section-spacing bg-[#080808]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<AnimatedSection>
<span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] block mb-4">Notre Univers</span>
<h2 className="font-cormorant text-5xl md:text-6xl font-light text-[#F5E6C8] mb-4">
L'art de la beauté
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
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[rgba(26,11,8,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                <span className="font-cormorant text-lg text-[#F5E6C8]">{alt}</span>
              </div>
              <div className="absolute inset-0 border border-[rgba(212,175,55,0)] group-hover:border-[rgba(212,175,55,0.4)] rounded-2xl transition-all duration-400" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full btn-outline-gold"
          >
            Voir toute la galerie
            <span className="text-[#D4AF37]">→</span>
          </Link>
        </div>
      </div>
    </section>

);
}

---

src/components/home/HeroSection.jsx:

import { motion } from 'framer-motion';
import ParticleField from '../ui/ParticleField';

const PLANITY_URL = 'https://www.planity.com/eden-perfect-75002-paris-23v';

const textVariants = {
hidden: { opacity: 0, y: 40 },
visible: (i) => ({
opacity: 1,
y: 0,
transition: { duration: 1, delay: i \* 0.2, ease: [0.25, 0.1, 0.25, 1] }
}),
};

export default function HeroSection() {
return (

<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
{/_ Background image _/}
<div
className="absolute inset-0 bg-cover bg-center bg-no-repeat"
style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80')`,
        }}
/>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Dark vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(11,11,11,0.8)_100%)]" />

      {/* Particles */}
      <ParticleField />

      {/* Gold ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-3 mb-8"
        >
          <div className="h-px w-12 gold-separator" />
          <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#D4AF37]">Paris 2ème · Institut de Beauté Premium</span>
          <div className="h-px w-12 gold-separator" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-light text-[#F5E6C8] leading-none mb-2"
        >
          Votre beauté
        </motion.h1>
        <motion.h1
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-8"
          style={{
            background: 'linear-gradient(135deg, #D4AF37, #F0D060, #B8860B, #F0D060)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          à la perfection
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-inter text-base md:text-lg text-[rgba(245,230,200,0.7)] tracking-[0.15em] uppercase mb-12"
        >
          Institut de beauté premium au cœur de Paris
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/services"
            className="inline-flex items-center px-8 py-4 rounded-full btn-outline-gold text-sm font-inter tracking-widest"
          >
            Découvrir nos prestations
          </a>
          <a
            href={PLANITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full btn-gold text-sm glow-gold"
          >
            Réserver maintenant
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-inter text-[9px] tracking-[0.4em] uppercase text-[rgba(212,175,55,0.6)]">Découvrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-[#D4AF37] to-transparent"
        />
      </motion.div>
    </section>

);
}

---

src/components/home/IntroSection.jsx:

import AnimatedSection from '../ui/AnimatedSection';
import GoldSeparator from '../ui/GoldSeparator';
import { Scissors, Sparkles, Hand, Star, Eye } from 'lucide-react';

const pillars = [
{ icon: Scissors, title: 'Coiffure', desc: 'Coupes, colorations, lissages et tresses par des experts passionnés.' },
{ icon: Sparkles, title: 'Soins Visage', desc: 'Rituels de beauté sur-mesure pour une peau éclatante et régénérée.' },
{ icon: Hand, title: 'Massage', desc: 'Massages californiens et rituels bien-être pour une détente absolue.' },
{ icon: Star, title: 'Onglerie', desc: "Nail art, faux ongles et soins manucure d'exception." },
{ icon: Eye, title: 'Extensions de Cils', desc: 'Extensions naturelles et volumineuses pour un regard envoûtant.' },
];

export default function IntroSection() {
return (

<section className="section-spacing bg-[#0B0B0B] relative overflow-hidden">
{/_ Background pattern _/}
<div className="absolute inset-0 opacity-5 pointer-events-none"
style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)', backgroundSize: '40px 40px' }}
/>

      <div className="max-w-7xl mx-auto px-6">
        <GoldSeparator className="mb-16" />

        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] block mb-4">Notre Univers</span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-[#F5E6C8] mb-8 leading-tight">
              Un temple dédié à<br />
              <em className="not-italic" style={{ color: '#D4AF37' }}>votre élégance</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="font-inter text-base md:text-lg text-[rgba(245,230,200,0.65)] leading-relaxed max-w-3xl mx-auto">
              Situé au cœur de Paris, Eden Perfect est plus qu'un simple salon de beauté. Véritable temple du bien-être et de l'élégance, notre institut vous accueille dans un univers raffiné où <span className="text-[#D4AF37]">expertise</span>, <span className="text-[#D4AF37]">détente</span> et <span className="text-[#D4AF37]">perfection</span> se rencontrent.
            </p>
          </AnimatedSection>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.1}>
              <div className="group relative glass-gold rounded-2xl p-6 text-center hover:border-[#D4AF37] transition-all duration-500 cursor-default h-full"
                style={{
                  border: '1px solid rgba(212,175,55,0.15)',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(212,175,55,0.12), inset 0 0 30px rgba(212,175,55,0.03)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="w-12 h-12 rounded-full bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.25)] flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-cormorant text-xl font-medium text-[#F5E6C8] mb-2">{title}</h3>
                <p className="font-inter text-xs text-[rgba(245,230,200,0.55)] leading-relaxed">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <GoldSeparator className="mt-16" />
      </div>
    </section>

);
}

---

src/components/home/StatsSection.jsx:

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

const stats = [
{ value: 500, suffix: '+', label: 'Clientes fidèles' },
{ value: 10, suffix: ' ans', label: "D'expertise beauté" },
{ value: 98, suffix: '%', label: 'Satisfaction client' },
{ value: 15, suffix: '+', label: 'Prestations offertes' },
];

function Counter({ value, suffix, inView }) {
const [count, setCount] = useState(0);

useEffect(() => {
if (!inView) return;
let start = 0;
const duration = 2000;
const step = (value / duration) \* 16;
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
<span className="font-cormorant text-5xl md:text-6xl font-light" style={{
      background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>
{count}{suffix}
</span>
);
}

export default function StatsSection() {
const ref = useRef(null);
const inView = useInView(ref, { once: true, margin: '-100px' });

return (

<section
ref={ref}
className="relative py-24 overflow-hidden"
style={{
        background: 'linear-gradient(135deg, #1A0B08 0%, #0B0B0B 50%, #1A0B08 100%)',
      }} >
{/_ Gold glow background _/}
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
</div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] block mb-4">Excellence & Expertise</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#F5E6C8]">
              L'expérience Eden Perfect
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, suffix, label }, i) => (
            <AnimatedSection key={label} delay={i * 0.1}>
              <div
                className="text-center p-8 rounded-2xl"
                style={{
                  background: 'rgba(212,175,55,0.04)',
                  border: '1px solid rgba(212,175,55,0.12)',
                }}
              >
                <Counter value={value} suffix={suffix} inView={inView} />
                <p className="font-inter text-sm text-[rgba(245,230,200,0.55)] mt-3 tracking-wide">{label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

);
}

---

src/components/home/TestimonialSection.jsx:

const testimonials = [
{ name: 'Sophie M.', role: 'Cliente fidèle', text: 'Un endroit magique au cœur de Paris. Le soin visage était absolument divin, ma peau n\'avait jamais été aussi lumineuse. Le personnel est attentionné et professionnel.', rating: 5 },
{ name: 'Isabelle R.', role: 'Cliente depuis 3 ans', text: 'Je viens régulièrement pour mes extensions de cils et je suis toujours époustouflée par le résultat. Un vrai savoir-faire, une ambiance raffinée, je recommande vivement !', rating: 5 },
{ name: 'Nadia K.', role: 'Nouvelle cliente', text: 'Mon lissage brésilien est parfait ! L\'équipe m\'a conseillée avec expertise et le résultat dépasse mes attentes. Une expérience premium du début à la fin.', rating: 5 },
{ name: 'Amina B.', role: 'Cliente VIP', text: 'Le massage californien était une véritable parenthèse de bien-être. L\'ambiance de l\'institut est luxueuse et apaisante. Je reviendrai sans hésiter.', rating: 5 },
{ name: 'Céline T.', role: 'Cliente régulière', text: 'Mes tresses sont toujours parfaites. L\'équipe est talentueuse, à l\'écoute et les produits utilisés sont de haute qualité. Eden Perfect est mon salon de confiance.', rating: 5 },
];

export default function TestimonialsSection() {
const [current, setCurrent] = useState(0);

const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
const next = () => setCurrent(c => (c + 1) % testimonials.length);

return (
<section className="section-spacing bg-[#0B0B0B]">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<AnimatedSection>
<span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] block mb-4">Témoignages</span>
<h2 className="font-cormorant text-5xl md:text-6xl font-light text-[#F5E6C8]">
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
                background: 'rgba(212,175,55,0.03)',
                border: '1px solid rgba(212,175,55,0.15)',
              }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              {/* Quote mark */}
              <div className="font-cormorant text-8xl text-[rgba(212,175,55,0.15)] leading-none mb-0 -mt-4">"</div>

              <p className="font-cormorant text-2xl md:text-3xl font-light italic text-[rgba(245,230,200,0.85)] leading-relaxed -mt-6 mb-8">
                {testimonials[current].text}
              </p>

              <div className="h-px gold-separator w-24 mx-auto mb-6" />

              <div>
                <p className="font-cormorant text-xl font-medium text-[#D4AF37]">{testimonials[current].name}</p>
                <p className="font-inter text-xs tracking-widest uppercase text-[rgba(245,230,200,0.45)] mt-1">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[rgba(212,175,55,0.08)] transition-all duration-300"
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
                      ? 'w-8 h-2 bg-[#D4AF37]'
                      : 'w-2 h-2 bg-[rgba(212,175,55,0.3)]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[rgba(212,175,55,0.08)] transition-all duration-300"
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

---

src/components/layout/Footer.jsx:

import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Clock, Mail } from 'lucide-react';

const PLANITY_URL = 'https://www.planity.com/eden-perfect-75002-paris-23v';

export default function Footer() {
return (
<footer className="bg-[#080808] border-t border-[rgba(212,175,55,0.15)] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
{/_ Brand _/}
<div className="md:col-span-1">
<div className="mb-4">
<div className="font-cormorant text-2xl font-light tracking-[0.2em] text-[#F5E6C8]">EDEN PERFECT</div>
<div className="font-inter text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase mt-1">Institut de Beauté · Paris</div>
</div>
<p className="font-inter text-sm text-[rgba(245,230,200,0.55)] leading-relaxed mt-4">
Votre temple du bien-être et de l'élégance au cœur de Paris.
</p>
<div className="flex items-center gap-4 mt-6">
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)] hover:border-[#D4AF37] transition-all duration-300">
<Instagram size={15} />
</a>
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)] hover:border-[#D4AF37] transition-all duration-300">
<Facebook size={15} />
</a>
</div>
</div>

          {/* Navigation */}
          <div>
            <h4 className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', to: '/' },
                { label: 'À propos', to: '/about' },
                { label: 'Prestations', to: '/services' },
                { label: 'Galerie', to: '/gallery' },
                { label: 'Contact', to: '/contact' },
                { label: 'Réserver', to: '/booking' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="font-inter text-sm text-[rgba(245,230,200,0.6)] hover:text-[#D4AF37] transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span className="font-inter text-sm text-[rgba(245,230,200,0.6)]">14 Rue Favart<br />75002 Paris</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+33" className="font-inter text-sm text-[rgba(245,230,200,0.6)] hover:text-[#D4AF37] transition-colors">Nous appeler</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:contact@edenperfect.fr" className="font-inter text-sm text-[rgba(245,230,200,0.6)] hover:text-[#D4AF37] transition-colors">contact@edenperfect.fr</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] mb-5">Horaires</h4>
            <ul className="space-y-2">
              {[
                { day: 'Lun – Ven', hours: '9h00 – 20h00' },
                { day: 'Samedi', hours: '9h00 – 19h00' },
                { day: 'Dimanche', hours: 'Fermé' },
              ].map(({ day, hours }) => (
                <li key={day} className="flex justify-between gap-4">
                  <span className="font-inter text-sm text-[rgba(245,230,200,0.5)]">{day}</span>
                  <span className="font-inter text-sm text-[rgba(245,230,200,0.8)]">{hours}</span>
                </li>
              ))}
            </ul>
            <a
              href={PLANITY_URL}
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
          <p className="font-inter text-xs text-[rgba(245,230,200,0.35)] tracking-wide">
            © {new Date().getFullYear()} Eden Perfect Institut de Beauté. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/legal" className="font-inter text-xs text-[rgba(245,230,200,0.35)] hover:text-[#D4AF37] transition-colors">
              Mentions légales
            </Link>
            <Link to="/legal" className="font-inter text-xs text-[rgba(245,230,200,0.35)] hover:text-[#D4AF37] transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>

);
}

---

src/components/layout/Layout.jsx:

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function Layout() {
const location = useLocation();

return (
<div className="min-h-screen bg-[#0B0B0B]">
<CustomCursor />
<Navbar />
<AnimatePresence mode="wait">
<motion.main
key={location.pathname}
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.4 }} >
<Outlet />
</motion.main>
</AnimatePresence>
<Footer />
</div>
);
}

---

src/components/layout/Navbar.jsx:

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const PLANITY_URL = 'https://www.planity.com/eden-perfect-75002-paris-23v';

const links = [
{ label: 'Accueil', to: '/' },
{ label: 'À propos', to: '/about' },
{ label: 'Prestations', to: '/services' },
{ label: 'Galerie', to: '/gallery' },
{ label: 'Contact', to: '/contact' },
];

export default function Navbar() {
const [scrolled, setScrolled] = useState(false);
const [open, setOpen] = useState(false);
const location = useLocation();

useEffect(() => {
const onScroll = () => setScrolled(window.scrollY > 60);
window.addEventListener('scroll', onScroll);
return () => window.removeEventListener('scroll', onScroll);
}, []);

useEffect(() => {
setOpen(false);
}, [location.pathname]);

return (
<>
<motion.nav
initial={{ y: -80, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.7, ease: 'easeOut' }}
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark border-b border-[rgba(212,175,55,0.15)] py-3' : 'py-5'
        }`} >
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
{/_ Logo _/}
<Link to="/" className="flex flex-col items-start">
<span className="font-cormorant text-2xl font-light tracking-[0.2em] text-[#F5E6C8] leading-none">EDEN PERFECT</span>
<span className="font-inter text-[9px] tracking-[0.35em] text-[#D4AF37] uppercase mt-0.5">Institut de Beauté · Paris</span>
</Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ label, to }) => (
              <NavLink key={to} label={label} to={to} active={location.pathname === to} />
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={PLANITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full btn-gold pulse-glow"
            >
              Réserver
            </a>
            <button
              className="md:hidden text-[#D4AF37]"
              onClick={() => setOpen(o => !o)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass-dark flex flex-col items-center justify-center gap-8"
          >
            {links.map(({ label, to }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={to}
                  className="font-cormorant text-4xl text-[#F5E6C8] hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href={PLANITY_URL}
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

function NavLink({ label, to, active }) {
return (
<Link to={to} className="relative group font-inter text-sm tracking-widest uppercase text-[#F5E6C8] hover:text-[#D4AF37] transition-colors duration-300">
{label}
<span className={`absolute -bottom-1 left-0 h-px bg-[#D4AF37] transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
</Link>
);
}

---

tailwind.config.js:

/** @type {import('tailwindcss').Config} \*/
module.exports = {
darkMode: ["class"],
content: ["./index.html", "./src/**/\*.{ts,tsx,js,jsx}"],
theme: {
extend: {
borderRadius: {
lg: 'var(--radius)',
md: 'calc(var(--radius) - 2px)',
sm: 'calc(var(--radius) - 4px)'
},
colors: {
background: 'hsl(var(--background))',
foreground: 'hsl(var(--foreground))',
card: {
DEFAULT: 'hsl(var(--card))',
foreground: 'hsl(var(--card-foreground))'
},
popover: {
DEFAULT: 'hsl(var(--popover))',
foreground: 'hsl(var(--popover-foreground))'
},
primary: {
DEFAULT: 'hsl(var(--primary))',
foreground: 'hsl(var(--primary-foreground))'
},
secondary: {
DEFAULT: 'hsl(var(--secondary))',
foreground: 'hsl(var(--secondary-foreground))'
},
muted: {
DEFAULT: 'hsl(var(--muted))',
foreground: 'hsl(var(--muted-foreground))'
},
accent: {
DEFAULT: 'hsl(var(--accent))',
foreground: 'hsl(var(--accent-foreground))'
},
destructive: {
DEFAULT: 'hsl(var(--destructive))',
foreground: 'hsl(var(--destructive-foreground))'
},
border: 'hsl(var(--border))',
input: 'hsl(var(--input))',
ring: 'hsl(var(--ring))',
gold: '#D4AF37',
'gold-deep': '#B8860B',
'gold-light': '#F0D060',
'gold-champagne': '#F5E6C8',
'dark-bg': '#0B0B0B',
'dark-brown': '#1A0B08',
'dark-card': '#141010',
},
fontFamily: {
cormorant: ['Cormorant Garamond', 'serif'],
inter: ['Inter', 'DM Sans', 'sans-serif'],
},
keyframes: {
'accordion-down': {
from: { height: '0' },
to: { height: 'var(--radix-accordion-content-height)' }
},
'accordion-up': {
from: { height: 'var(--radix-accordion-content-height)' },
to: { height: '0' }
}
},
animation: {
'accordion-down': 'accordion-down 0.2s ease-out',
'accordion-up': 'accordion-up 0.2s ease-out',
}
}
},
plugins: [require("tailwindcss-animate")],
safelist: [
'font-cormorant', 'font-inter', 'text-gold', 'text-gold-light', 'text-champagne',
'bg-gold', 'bg-dark-brown', 'bg-dark-card', 'border-gold', 'gold-gradient',
'gold-text-gradient', 'gold-border-glow', 'glass-dark', 'glass-gold',
'glow-gold', 'btn-gold', 'btn-outline-gold', 'pulse-glow'
]
}
