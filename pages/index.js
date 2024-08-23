// import components
import Pets from "../components/Pets";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto overflow-hidden">
      <Hero />
      <Pets />
      <About />
      <Services />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
