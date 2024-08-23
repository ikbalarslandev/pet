import React, { useRef } from "react";
import Pets from "../components/Pets";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto overflow-hidden">
      <Hero scrollToServices={scrollToServices} />
      <Pets />
      <About />
      <Services ref={servicesRef} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
