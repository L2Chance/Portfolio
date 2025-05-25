import type { IconType } from "react-icons";
import "../css/bordeEffect.css";

interface Props {
  icono: IconType; // Tipo de componente de icono
  nombre: string;
}

export default function Tool({ icono: Icono, nombre }: Props) {
  return (
    <div
      className="
    borde-effect flex flex-col justify-center items-center w-35 h-35 
    bg-gradient-to-br from-white via-gray-200 to-gray-400 
    dark:bg-gradient-to-br dark:from-[var(--dark)] dark:via-gray-800 dark:to-gray-900
  "
    >
      <div className="relative z-10 flex flex-col justify-center items-center">
        <p className="text-green-400 font-bold">{nombre}</p>
        <div className="flex justify-center items-center w-20 h-20 rounded-full dark:bg-gray-800 bg-gray-400">
          <Icono size={60} className="text-[var(--dark)] dark:text-white" />
        </div>
      </div>
    </div>
  );
}
