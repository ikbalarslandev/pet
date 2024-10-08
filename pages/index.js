import React, { useRef } from "react";
import Pets from "../components/Pets";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto overflow-hidden">
      <Hero scrollToServices={scrollToServices} scrollToAbout={scrollToAbout} />
      <Pets />
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <Newsletter />
      <Footer
        scrollToServices={scrollToServices}
        scrollToAbout={scrollToAbout}
      />
    </div>
  );
};

export default Home;
