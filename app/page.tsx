import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import GalleryPreview from "@/components/sections/GalleryPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        {/* <Experience /> */}
        {/* <Testimonials /> */}
        <GalleryPreview />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
