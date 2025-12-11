import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="kontak" className="contact-section">
      <h2>Kontak Kami</h2>

      <div className="contact-container">

        <div className="contact-item">
          <FaWhatsapp className="contact-icon whatsapp" />
          <div>
            <h4>WhatsApp</h4>
            <p>085100580607</p>
          </div>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon email" />
          <div>
            <h4>Email</h4>
            <p>jennysie2707@gmail.com</p>
          </div>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon location" />
          <div>
            <h4>Lokasi</h4>
            <p>Seputar Surabaya & Malang</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
