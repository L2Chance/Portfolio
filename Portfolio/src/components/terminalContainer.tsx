import { IoIosCloseCircle } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { MdOutlineStopCircle } from "react-icons/md";

export default function TerminalContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "flex flex-col rounded-lg overflow-hidden shadow-lg bg-black border border-[var(--dark)] dark:border-[var(--white)] " +
        (className || "")
      }
    >
      <div className="flex items-center justify-between px-4 py-2 bg-gray-700 text-white">
        <div className="font-mono text-sm">$ Terminal</div>
        <div className="flex items-center gap-2">
          <button aria-label="Minimizar" className="hover:text-yellow-400">
            <CiCircleMinus size={20} />
          </button>
          <button aria-label="Maximizar" className="hover:text-green-400">
            <MdOutlineStopCircle size={20} />
          </button>
          <button
            aria-label="Cerrar"
            className="hover:text-red-500"
            onClick={() =>
              alert(
                "Ha ocurrido un error. No se puede pueden cerrar las introducciones de los demás"
              )
            }
          >
            <IoIosCloseCircle size={20} />
          </button>
        </div>
      </div>

      <div className="p-4 text-[var(--white)]">{children}</div>
    </div>
  );
}
