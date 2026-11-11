import { useEffect } from "react";
import About from "./components/About/About";
import Agenda from "./components/Agenda/Agenda";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Members from "./components/Members/Members";
import { Analytics } from '@vercel/analytics/next';

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.setAttribute("data-revealed", "true"));
      return;
    }

    document.documentElement.classList.add("has-scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-scroll-reveal");
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Members />
        <Agenda />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
