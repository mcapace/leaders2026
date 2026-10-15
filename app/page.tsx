import Archive from "@/components/Archive";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import LeadersChoice from "@/components/LeadersChoice";
import Navbar from "@/components/Navbar";
import Winners from "@/components/Winners";

export default function Home() {
  return (
    <>
      <section id="hero" className="relative min-h-screen">
        <Navbar />
        <Hero />
      </section>
      <Winners />
      <LeadersChoice />
      <Gallery />
      <Archive />
      <ContactForm />
      <Footer />
    </>
  );
}
