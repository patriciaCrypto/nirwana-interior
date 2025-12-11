import "./Orderform.css";

export default function Orderform() {
  const phoneNumber = "6285100580607";
  const message = encodeURIComponent("Halo, saya ingin bertanya tentang jasa layanan gorden dan interior anda.");

  return (
    <div className="wa-box">
      <h2>Hubungi Kami</h2>
      <p>Klik tombol di bawah untuk langsung menghubungi kami via WhatsApp.</p>

      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-button"
      >
        Chat via WhatsApp
      </a>
    </div>
  );
}
