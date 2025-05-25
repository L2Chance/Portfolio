import TerminalContainer from "../terminalContainer.tsx";
import Tool from "../Tool.tsx";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { MdOutlineRestartAlt } from "react-icons/md";
import { TbFileTypeSql, TbBrandReactNative } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import ProjectContainer from "../projectsContainer.tsx";

export default function SectionTwo() {
  return (
    <>
      <div className="h-16"></div> {/*Separador*/}
      {/*Contenedor general*/}
      <div
        className="flex flex-col md:flex-row justify-center gap-6 min-h-[85vh] pl-3 pr-3"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <section className="flex flex-col md:w-1/2 gap-1">
          <TerminalContainer>
            <p>Algunas técnologias que manejo</p>
          </TerminalContainer>
          {/* Contenedor de técnologias*/}
          <div className="flex flex-wrap justify-center items-center border-2 border-[var(--dark)] dark:border-[var(--white)] text-[var(--white)] p-6 rounded-lg animate-fade-up animate-duration-700 animate-delay-300 gap-4 bg-black/60 w-full">
            <Tool icono={FaHtml5} nombre="HTML"></Tool>
            <Tool icono={FaCss3Alt} nombre="CSS"></Tool>
            <Tool icono={FaJsSquare} nombre="JavaScript"></Tool>
            <Tool icono={BiLogoTypescript} nombre="TypeScript"></Tool>
            <Tool icono={FaNodeJs} nombre="NodeJS"></Tool>
            <Tool icono={FaReact} nombre="ReactJS"></Tool>
            <Tool icono={TbBrandReactNative} nombre="React Native"></Tool>
            <Tool icono={SiTailwindcss} nombre="TailwindCSS"></Tool>
            <Tool icono={FaPython} nombre="Python"></Tool>
            <Tool icono={MdOutlineRestartAlt} nombre="ApiRest"></Tool>
            <Tool icono={TbFileTypeSql} nombre="SQL"></Tool>
          </div>
        </section>
        <section className="flex flex-col md:w-1/2 gap-1">
          <TerminalContainer>
            <p>Mis proyectos personales</p>
          </TerminalContainer>
          {/*Contenedor de proyectos*/}
          <div className="flex flex-wrap justify-center items-center border-2 border-[var(--dark)] dark:border-[var(--white)] text-[var(--white)] p-6 rounded-lg animate-fade-up animate-duration-700 animate-delay-300 gap-4 bg-black/60 w-full">
            <ProjectContainer></ProjectContainer>
            <ProjectContainer></ProjectContainer>
            <ProjectContainer></ProjectContainer>
          </div>
        </section>
      </div>
    </>
  );
}
