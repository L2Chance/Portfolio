import { FaLinkedin, FaSquareGithub, FaEnvelope } from "react-icons/fa6";
import DarkModeButton from "./DarkModeButton";
import { useState } from "react";

export default function Navbar() {
  const [copiado, setCopiado] = useState(false);
  const email = "Lautaro.perez@hotmail.com.ar";

  const copiarCorreo = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error("Error al copiar el correo:", err);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-20">
      <div className="flex justify-between items-center w-full max-w-screen-xl px-5">
        <ul className="flex space-x-4">
          {/* GitHub */}
          <a
            href="https://github.com/L2Chance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="hover:scale-110 transition-transform">
              <span className="text-[var(--dark)] dark:text-[var(--white)]">
                <FaSquareGithub size={40} />
              </span>
            </li>
          </a>

          {/* Correo */}
          <li
            onClick={copiarCorreo}
            className="cursor-pointer hover:scale-110 transition-transform relative"
          >
            <span className="text-[var(--dark)] dark:text-[var(--white)]">
              <FaEnvelope size={40} />
            </span>
            {copiado && (
              <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow-lg z-10">
                ¡Copiado!
              </span>
            )}
          </li>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lautaro2pe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="hover:scale-110 transition-transform">
              <span className="text-[var(--dark)] dark:text-[var(--white)]">
                <FaLinkedin size={40} />
              </span>
            </li>
          </a>
        </ul>

        <DarkModeButton />
      </div>
    </div>
  );
}
