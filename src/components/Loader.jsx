import { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Loader tampil 2 detik lalu fade out
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`loader-wrapper ${fadeOut ? "fade-out" : ""}`}
      aria-label="Page loading"
    >
      <div className="loader-content">
        <div className="loader-logo">NIRWANA</div>
        <div className="loader-subtext">Curtain & Interior</div>
        <div className="gold-spinner" />
      </div>
    </div>
  );
}
