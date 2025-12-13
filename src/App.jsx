import { useEffect, useState } from "react";

/* Components */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import OrderForm from "./components/Orderform";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";

/* AOS Animation */
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  /* Loader timing */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  /* AOS Init */
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out",
      once: true,
      offset: 120,
    });
  }, []);

  /* Show loader first */
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app-container">
      {/* Progress bar paling atas */}
      <ScrollProgress />

      <Navbar />
      <Hero />
      <Services />
      <About />
      <OrderForm />
      <Contact />

      {/* Footer selalu terakhir */}
      <Footer />
    </div>
  );
}

export default App;
