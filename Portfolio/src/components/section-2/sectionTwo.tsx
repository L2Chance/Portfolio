// components/section-2/SectionTwo.tsx
import React from "react"; // Make sure React is imported for React.ReactNode
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
// ProjectContainer is passed as children now, so it's not directly imported here
// import ProjectContainer from "../projectsContainer.tsx"; // Remove this line if not used directly

// ------------------------------------
// Define the props for SectionTwo
// ------------------------------------
interface SectionTwoProps {
  children?: React.ReactNode; // 'children' is optional and can be any renderable React node
}
// ------------------------------------

// Modify the function to accept 'children' as a prop
export default function SectionTwo({ children }: SectionTwoProps) {
  return (
    <>
      <div className="h-16"></div> {/* Separador */}
      {/* Contenedor general */}
      <div
        className="flex flex-col justify-center items-center gap-6 min-h-[85vh] pl-3 pr-3"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <section className="flex flex-col w-[70%] gap-1">
          <TerminalContainer>
            <p>Algunas técnologias que manejo</p>
          </TerminalContainer>
          <div className="flex flex-wrap justify-center items-center border-2 border-[var(--dark)] dark:border-[var(--white)] text-[var(--white)] p-6 rounded-lg animate-fade-up animate-duration-700 animate-delay-300 gap-4 bg-black/60 w-full">
            <Tool icono={FaHtml5} nombre="HTML" />
            <Tool icono={FaCss3Alt} nombre="CSS" />
            <Tool icono={FaJsSquare} nombre="JavaScript" />
            <Tool icono={BiLogoTypescript} nombre="TypeScript" />
            <Tool icono={FaNodeJs} nombre="NodeJS" />
            <Tool icono={FaReact} nombre="ReactJS" />
            <Tool icono={TbBrandReactNative} nombre="React Native" />
            <Tool icono={SiTailwindcss} nombre="TailwindCSS" />
            <Tool icono={FaPython} nombre="Python" />
            <Tool icono={MdOutlineRestartAlt} nombre="ApiRest" />
            <Tool icono={TbFileTypeSql} nombre="SQL" />
          </div>
        </section>

        <section className="flex flex-col w-[70%] gap-1">
          <TerminalContainer>
            <p>Mis proyectos personales</p>
          </TerminalContainer>
          <div className="w-full">{children} </div>
        </section>
      </div>
    </>
  );
}
