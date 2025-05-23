import Aptitud from "../section-1/aptitud";
import { RiTeamFill, RiEnglishInput } from "react-icons/ri";
import { GiNotebook } from "react-icons/gi";
import { FaUserGear } from "react-icons/fa6";

export default function SectionOne() {
  return (
    <>
      <div className="flex justify-center items-center margin mt-3">
        <section className="parent grid grid-cols-5 grid-rows-5 w-300 h-100 rounded-lg gap-2">
          <div
            className="div2 flex flex-col justify-center items-center col-start-1 col-end-3 row-start-1 row-end-6 border-2 
          border-[var(--dark)] text-[var(--white)] bg-black/60 dark:border-[var(--white)] p-4 rounded-lg animate-fade-up 
          animate-duration-700 animate-delay-300 gap-2"
          >
            <h1 className="text-5xl underline underline-offset-4">
              Perez Lautaro Ivan
            </h1>
            <span className="flex items-center space-x-1">
              <p className="text-green-400 text-2xl">Programador</p>
              <p className="text-green-400 text-2xl animate-fade animate-infinite animate-duration-500 animate-ease-in-out animate-alternate-reverse">
                |
              </p>
            </span>
          </div>

          {/* div3: grid-area: 1 / 3 / 6 / 6; */}
          <div
            className="div3 flex flex-col justify-start items-center col-start-3 col-end-6 row-start-1 row-end-6 border-2 
            bg-black/60 border-[var(--dark)] dark:border-[(var(--white))] text-[var(--white)] p-4 rounded-lg animate-fade-left animate-duration-700 animate-delay-300 gap-2"
          >
            <div className="flex justify-between w-full">
              <p className="text-green-400">$ Introducción</p>
              <p>Bash</p>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
              velit, iure pariatur soluta temporibus praesentium dolorem. A
              labore laudantium iure quibusdam dignissimos harum ut, facere
              repellat, veniam dolorem rem excepturi! Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <div className="flex justify-between w-full">
              <p className="text-green-400">$ Aptitudes</p>
            </div>
            <span className="flex justify-center items-center w-full h-70 gap-2">
              <Aptitud icon={RiTeamFill} title="Trabajo en equipo" />
              <Aptitud icon={GiNotebook} title="Gestión de tiempo" />
              <Aptitud icon={FaUserGear} title="Adaptabilidad" />
              <Aptitud icon={RiEnglishInput} title="Manejo de inglés" />
            </span>
          </div>
        </section>
      </div>
    </>
  );
}
