import heroImg from "../assets/hero.jpg";


function Hero() {
return (
<section className="hero" id="home">
<img src={heroImg} className="hero-bg" />
<div className="hero-text">
<h1>NIRWANA CURTAIN & INTERIOR DESIGN SKETCH MODELLING 3D</h1>
<p>Melayani pembuatan Curtain & Interior 3D Modelling profesional</p>
<a
href="https://wa.me/6285100580607"
className="hero-button"
target="_blank"
>
Pesan Sekarang
</a>
</div>
</section>
);
}


export default Hero;