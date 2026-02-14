import { useEffect, useState } from "react";
import LogoSVG from "./LogoSVG";
import ParticleCanvas from "./ParticleCanvas";

export default function LoaderCinematic({ onFinish }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
      setTimeout(onFinish, 1000);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white dark:bg-black transition-all duration-1000 ${
        exit ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      <ParticleCanvas />

      <div className="relative text-black dark:text-white animate-dock">
        <LogoSVG />
      </div>
    </div>
  );
}
