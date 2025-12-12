import heroImg from "../assets/hero.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background Image */}
      <img src={heroImg} className="hero-bg" alt="Nirwana Interior Banner" />

      {/* Overlay Gradient */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-text">
        <h1>
          NIRWANA CURTAIN & INTERIOR <br />
          <span className="gold">DESIGN SKETCH MODELLING 3D</span>
        </h1>

        <p>
          Melayani pembuatan Curtain & Interior 3D Modelling profesional,
          elegan, dan berkualitas tinggi.
        </p>

        <a
          href="https://wa.me/6285100580607"
          className="hero-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pesan Sekarang
        </a>
      </div>
    </section>
  );
}

export default Hero;
