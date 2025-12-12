import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import About from "./components/About";
import OrderForm from "./components/Orderform";
import Contact from "./components/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,      // durasi animasi
      easing: "ease-out", // gaya animasi smooth
      once: true,         // animasi hanya 1x (lebih premium)
      offset: 120,        // jarak trigger
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
      <About />
      <OrderForm />
      <Contact />
    </>
  );
}

export default App;
