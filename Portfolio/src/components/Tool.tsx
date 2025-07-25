import type { IconType } from "react-icons";

interface Props {
  icono: IconType;
  nombre: string;
  color: string;
}

export default function Tool({ icono: Icono, nombre, color }: Props) {
  return (
    <div
      className="
        group relative flex flex-col items-center justify-center w-36 h-44 p-4
        rounded-2xl shadow-lg transition-transform transform hover:scale-105
        bg-gradient-to-br from-white via-gray-100 to-gray-300
        dark:from-gray-800 dark:via-gray-700 dark:to-gray-900
        border border-gray-300 dark:border-gray-700
      "
    >
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white dark:bg-gray-800 shadow-md mb-3">
        <Icono size={50} style={{ color }} />
      </div>
      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center">
        {nombre}
      </p>
    </div>
  );
}
