import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import About from "./components/About";
import OrderForm from "./components/Orderform";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out",
      once: true,
      offset: 120,
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="app-container">
      {/* Progress bar harus di paling atas */}
      <ScrollProgress />

      <Navbar />
      <Hero />
      <Services />
      <Footer />
      <About />
      <OrderForm />
      <Contact />

      {/* FOOTER SELALU PALING BAWAH */}
      <Footer />
    </div>
  );
}

export default App;
