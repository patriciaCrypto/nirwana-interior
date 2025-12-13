import React, { useEffect, useContext } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

/* Dark Mode Context */
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".nav");
      if (!nav) return;

      if (window.scrollY > 50) {
        nav.classList.add("shrink");
      } else {
        nav.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${darkMode ? "dark" : ""}`}>
      <div className="nav-container">
        <h1 className="nav-logo">NIRWANA CURTAIN & INTERIOR</h1>

        <ul className="nav-links">
          <li>
            <Link to="hero" smooth duration={600} offset={-80}>
              Beranda
            </Link>
          </li>
          <li>
            <Link to="services" smooth duration={600} offset={-80}>
              Layanan
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={600} offset={-80}>
              Kontak
            </Link>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          className="darkmode-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
