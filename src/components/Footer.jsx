import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h3 className="footer-title">Nirwana Curtain & Interior</h3>

        <p className="footer-desc">
          Layanan curtain & desain interior profesional — Elegan, presisi, dan berkualitas tinggi.
        </p>

        {/* Social Icons */}
        <div className="footer-socials">
          <a
            href="https://wa.me/6285100580607"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaWhatsapp />
          </a>

          <a
            href="mailto:jennysie2707@gmail.com"
            className="social-icon"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© 2025 Nirwana Curtain & Interior — All Rights Reserved</p>
      </div>

    </footer>
  );
}
