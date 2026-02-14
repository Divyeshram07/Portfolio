import { useEffect, useRef, useState } from "react";

export default function Loader({ onFinish }) {
  const [exit, setExit] = useState(false);
  const canvasRef = useRef(null);

  // Particle Background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 70 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.8 + 0.2,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,0,0,0.08)";
        ctx.fill();

        p.y -= p.speed;
        if (p.y < 0) p.y = canvas.height;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  // Exit animation after page fully loads
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setExit(true);
        setTimeout(() => onFinish(), 900);
      }, 2200);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-[9999] transition-all duration-1000 ${
        exit ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />

      {/* Logo Section */}
      <div className="relative text-black dark:text-white animate-dock">

        <svg
          width="140"
          height="140"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="70"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="logo-path"
          />

          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fontSize="38"
            fill="currentColor"
            fontFamily="sans-serif"
            letterSpacing="3"
          >
            DR
          </text>
        </svg>

      </div>
    </div>
  );
}
