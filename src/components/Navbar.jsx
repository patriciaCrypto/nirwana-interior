import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.querySelector(".nav").classList.add("shrink");
      } else {
        document.querySelector(".nav").classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="nav">
      <div className="nav-container">
        <h1 className="nav-logo">NIRWANA CURTAIN & INTERIOR</h1>

        <ul className="nav-links">
          <li>
            <Link to="hero" smooth={true} duration={600} offset={-80}>
              Beranda
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={600} offset={-80}>
              Layanan
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={600} offset={-80}>
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
