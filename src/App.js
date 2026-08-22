import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Model from "./components/Model";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import Work from "./components/Work";
import Platform from "./components/Platform";
import Faq from "./components/Faq";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { setLenis } from "./lib/scroll";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E\")";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    setLenis(lenis);
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);


  return (
    <>
      <Router>
        {/* The Toaster is now global so it works on the legal pages too */}
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#F3F2EE",
            },
          }}
        />

        <Routes>
         
          <Route path="/" element={
            <div className="min-h-screen bg-[#0A0A0A] text-[#F3F2EE]">
              <div
                aria-hidden
                className="pointer-events-none fixed inset-0 z-[90] opacity-[0.035]"
                style={{ backgroundImage: NOISE }}
              />
              <Navbar />
              <main>
                <Hero />
                <Marquee />
                <Model />
                <Services />
                <Workflow />
                <Work />
                <Platform />
                <Faq />
                <CTA />
              </main>
              <Footer />
            </div>
          } />

          {/* Legal Pages */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          
        </Routes>
      </Router>
    </>
  );

