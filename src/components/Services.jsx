import mamaGue from "../assets/mamaGue.jpg";
import coba_lagi from "../assets/coba_lagi.jpg";

function Services() {
  const openCurtainPDF = () => {
    window.open("/nirwana-interior/assets/pdf/portoCurtain.pdf", "_blank");
  };

  const openInteriorPDF = () => {
    window.open("/nirwana-interior/assets/pdf/porto3D.pdf", "_blank");
  };

  return (
    <section className="services" id="services">
      <h2 data-aos="fade-up">Layanan Kami</h2>

      

      {/* ✨ Tambahan teks instruksi */}
      <p className="service-instruction">
        Tekan salah satu layanan di bawah untuk melihat portofolio kami.
      </p>

      <div className="service-card" onClick={openCurtainPDF} data-aos="fade-up">


        {/* CARD 1 — Curtain */}
        <div
          className="service-card"
          onClick={openCurtainPDF}
          style={{ cursor: "pointer" }}
        >
          <img src={mamaGue} alt="Pembuatan Curtain" />
          <h3>Pembuatan Curtain</h3>
          <p>Kualitas premium, bahan terbaik, dan hasil rapi.</p>
        </div>

        {/* CARD 2 — Interior Design 3D */}
        <div
          className="service-card"
          onClick={openInteriorPDF}
          style={{ cursor: "pointer" }}
        >
          <img src={coba_lagi} alt="Interior Design 3D" />
          <h3>Interior Design 3D</h3>
          <p>Sketsa 3D modelling interior profesional & presisi.</p>
        </div>

      </div>
    </section>
  );
}

export default Services;
