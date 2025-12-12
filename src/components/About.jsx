import "./About.css";
import { Instagram, Phone } from "lucide-react";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container" data-aos="fade-up">

        <h2 className="about-title">Tentang Kami</h2>
        <div className="about-divider"></div>

        <p className="about-text">
          Nirwana Curtain & Interior Design Sketch Modelling 3D adalah layanan
          profesional yang menyediakan pembuatan gorden custom serta pembuatan
          desain interior 3D modelling untuk kebutuhan rumah, kantor, café,
          hotel, dan proyek interior lainnya.
          <br /><br />
          Dengan pengalaman dan kualitas terbaik, kami siap membantu mewujudkan
          ruangan impian Anda menjadi lebih elegan, nyaman, dan estetik.
        </p>

        <h3 className="founder-title">Founder & Co-Founder</h3>
        <div className="founder-divider"></div>

        <div className="founder-grid">

          {/* Founder */}
          <div className="founder-card emperor">
            <div className="aura"></div>
            <div className="particle"></div>

            <div className="founder-img-box emperor-frame">
              <img
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=ElegantGirlA&skinColor=ffdbb4&hair=longStraight"
                alt="Founder Avatar"
                className="founder-img"
              />
              <div className="gold-shimmer"></div>
              <div className="diamond-overlay"></div>
            </div>

            <h4 className="founder-name">Jenny</h4>
            <p className="founder-role">Founder</p>

            <div className="signature">Jenny</div>

            <div className="social-links">
              <a href="#"><Instagram className="icon" /></a>
              <a href="#"><Phone className="icon" /></a>
            </div>
          </div>

          {/* Co-Founder */}
          <div className="founder-card emperor">
            <div className="aura"></div>
            <div className="particle"></div>

            <div className="founder-img-box emperor-frame">
              <img
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=ElegantGirlB&skinColor=ffdbb4&hair=longStraight2"
                alt="Co-Founder Avatar"
                className="founder-img"
              />
              <div className="gold-shimmer"></div>
              <div className="diamond-overlay"></div>
            </div>

            <h4 className="founder-name">Patricia Sheila</h4>
            <p className="founder-role">Co-Founder</p>

            <div className="signature">P.Sheila</div>

            <div className="social-links">
              <a href="https://www.instagram.com/sheila.b.c.d?igsh=MXRvNDBxZXBxOGZqbg==" target="_blank">
                <Instagram className="icon" />
              </a>
              <a href="https://wa.me/6285934352681" target="_blank">
                <Phone className="icon" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
