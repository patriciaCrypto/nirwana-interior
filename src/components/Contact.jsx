import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="kontak" className="contact-section">
      <h2 className="contact-title">Kontak Kami</h2>

      <div className="contact-container">

        <a
          href="https://wa.me/6285100580607?text=Halo,%20saya%20ingin%20memesan%20layanan%20Curtain%20%26%20Interior."
          target="_blank"
          className="contact-card"
        >
          <div className="icon-wrapper whatsapp-bg">
            <FaWhatsapp className="contact-icon" />
          </div>
          <div>
            <h4>WhatsApp</h4>
            <p>0851-0058-0607</p>
          </div>
        </a>

        <a
          href="mailto:jennysie2707@gmail.com"
          className="contact-card"
        >
          <div className="icon-wrapper email-bg">
            <FaEnvelope className="contact-icon" />
          </div>
          <div>
            <h4>Email</h4>
            <p>jennysie2707@gmail.com</p>
          </div>
        </a>

        <a
          href="https://www.google.com/maps?q=Surabaya,+Malang"
          target="_blank"
          className="contact-card"
        >
          <div className="icon-wrapper location-bg">
            <FaMapMarkerAlt className="contact-icon" />
          </div>
          <div>
            <h4>Lokasi</h4>
            <p>Surabaya & Malang</p>
          </div>
        </a>

      </div>
    </section>
  );
}

export default Contact;
