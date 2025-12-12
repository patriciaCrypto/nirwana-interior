import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section" data-aos="fade-up">

      <h2 className="contact-title">Kontak Kami</h2>
      <p className="contact-subtitle">
        Klik salah satu layanan di bawah untuk langsung terhubung
      </p>

      <div className="contact-container">

        <a
          href="https://wa.me/6285100580607?text=Halo%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="icon-wrapper whatsapp-bg">
            <FaWhatsapp className="contact-icon" />
          </div>
          <h4>WhatsApp</h4>
          <p>0851-0058-0607</p>
        </a>

        <a
          href="mailto:jennysie2707@gmail.com"
          className="contact-card"
        >
          <div className="icon-wrapper email-bg">
            <FaEnvelope className="contact-icon" />
          </div>
          <h4>Email</h4>
          <p>jennysie2707@gmail.com</p>
        </a>

        <a
          href="https://www.google.com/maps/place/Surabaya"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="icon-wrapper location-bg">
            <FaMapMarkerAlt className="contact-icon" />
          </div>
          <h4>Lokasi</h4>
          <p>Surabaya & Malang</p>
        </a>

      </div>
    </section>
  );
}

export default Contact;
