import Tool from "../Tool.tsx";
import { FaHtml5 } from "react-icons/fa";

export default function SectionTwo() {
  return (
    <>
      <div
        className="flex h-min-100 justify-center items-center mt-3 px-4"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="300"
      >
        <section className="parent grid grid-cols-1 md:grid-cols-5 grid-rows-6 md:grid-rows-5 w-full max-w-[1200px] rounded-lg gap-4">
          <div
            className="div3 flex flex-col justify-start items-center col-span-1 md:col-span-3 row-span-4 md:row-span-5 border-2 
                      bg-black/60 border-[var(--dark)] dark:border-[var(--white)] text-[var(--white)] p-4 rounded-lg animate-fade-left animate-duration-700 animate-delay-300 gap-2"
          >
            <h2 className="text-green-400 text-2xl text-shadow-black text-shadow-md/40">
              PROYECTOS
            </h2>
          </div>
          <div
            className="div2 flex flex-wrap justify-center items-center col-span-1 md:col-span-2 row-span-2 md:row-span-5 border-2 
                      border-[var(--dark)] text-[var(--white)] bg-black/60 dark:border-[var(--white)] p-4 rounded-lg animate-fade-up 
                      animate-duration-700 animate-delay-300 gap-2"
          >
            <h2 className="text-green-400 text-2xl text-shadow-black text-shadow-md/40">
              TÉCNOLOGIAS
            </h2>
            <div className="flex justify-center flex-wrap gap-1">
              <Tool icono={FaHtml5} nombre="HTML5" />
              <Tool icono={FaHtml5} nombre="HTML5" />
              <Tool icono={FaHtml5} nombre="HTML5" />
              <Tool icono={FaHtml5} nombre="HTML5" />
              <Tool icono={FaHtml5} nombre="HTML5" />
              <Tool icono={FaHtml5} nombre="HTML5" />
              <Tool icono={FaHtml5} nombre="HTML5" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
