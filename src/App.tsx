import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { Marquee, TrustedBy } from "./components/Marquee";
import Work from "./components/Work";
import About from "./components/About";
import { Services, Process } from "./components/Services";
import { Testimonials, Engagement, Faq } from "./components/Testimonials";
import { Cta } from "./components/Footer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <TrustedBy />
        <Work />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Engagement />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
