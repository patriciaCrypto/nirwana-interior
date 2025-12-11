import curtain from "../assets/curtain.jpg";
import design3d from "../assets/design3d.jpg";
import coba_lagi from "../assets/coba_lagi.jpg";
import mamaGue from "../assets/mamaGue.jpg";

function Services() {
  return (
    <section className="services" id="services">
      <h2>Layanan Kami</h2>

      <div className="service-grid">

        {/* ❌ CARD TIDAK BISA DIKLIK */}
        <div className="service-card">
          <img src={mamaGue} alt="Curtain" />
          <h3>Pembuatan Curtain</h3>
          <p>Kualitas premium, bahan terbaik, dan hasil rapi.</p>
        </div>

        {/* ✅ CARD BISA DIKLIK -> BUKA PDF */}
        <div
          className="service-card"
          onClick={() => window.open("/pdf/portoSheila.pdf", "_blank")}
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
