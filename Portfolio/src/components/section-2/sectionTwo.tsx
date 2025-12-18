import TerminalContainer from "../terminalContainer.tsx";
import Tool from "../Tool.tsx";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGitAlt,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDocker,
  SiSpring,
  SiBootstrap,
  SiChakraui,
  SiDbeaver,
  SiCloudinary,
  SiNodedotjs,
} from "react-icons/si";
import { MdOutlineRestartAlt } from "react-icons/md";
import { TbFileTypeSql } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

export default function SectionTwo() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center gap-6 min-h-[90vh] pl-3 pr-3 mt-100"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <section className="flex flex-col w-[60%] w-max-[1200px] gap-6">
          <TerminalContainer>
            <p>Algunas tecnologías que manejo</p>
          </TerminalContainer>

          {/* Backend */}
          <div>
            <h2
              className="text-3xl font-extrabold text-gray-800 dark:text-white mb-4 relative pl-4
              before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
              before:h-5 before:w-1 before:bg-blue-500 before:rounded
              hover:before:bg-blue-600 hover:before:scale-y-110 before:transition-transform before:duration-300"
            >
              Backend
            </h2>
            <div className="flex flex-wrap justify-center items-center border-2 border-[var(--dark)] dark:border-[var(--white)] text-[var(--white)] p-6 rounded-lg bg-black/60 gap-4">
              <Tool icono={FaJava} nombre="Java" color="#007396" />
              <Tool icono={SiSpring} nombre="Spring Boot" color="#6DB33F" />
              <Tool icono={SiNodedotjs} nombre="Node.js" color="#539E43" />
              <Tool icono={SiExpress} nombre="Express.js" color="#000000" />
              <Tool icono={FaPython} nombre="Python" color="#3776AB" />
              <Tool icono={SiDjango} nombre="Django" color="#092E20" />
              <Tool
                icono={MdOutlineRestartAlt}
                nombre="API REST"
                color="#10B981"
              />
              <Tool icono={TbFileTypeSql} nombre="SQL" color="#F29111" />
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h2
              className="text-3xl font-extrabold text-gray-800 dark:text-white mb-4 relative pl-4
              before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
              before:h-5 before:w-1 before:bg-blue-500 before:rounded
              hover:before:bg-blue-600 hover:before:scale-y-110 before:transition-transform before:duration-300"
            >
              Frontend
            </h2>
            <div className="flex flex-wrap justify-center items-center border-2 border-[var(--dark)] dark:border-[var(--white)] text-[var(--white)] p-6 rounded-lg bg-black/60 gap-4">
              <Tool icono={FaHtml5} nombre="HTML" color="#E34F26" />
              <Tool icono={FaCss3Alt} nombre="CSS" color="#1572B6" />
              <Tool icono={FaJsSquare} nombre="JavaScript" color="#F7DF1E" />
              <Tool
                icono={BiLogoTypescript}
                nombre="TypeScript"
                color="#3178C6"
              />
              <Tool icono={FaReact} nombre="ReactJS" color="#61DAFB" />
              <Tool
                icono={SiTailwindcss}
                nombre="TailwindCSS"
                color="#38B2AC"
              />
              <Tool icono={SiBootstrap} nombre="Bootstrap" color="#7952B3" />
              <Tool icono={SiChakraui} nombre="ShadCN UI" color="#319795" />
              <Tool icono={FaReact} nombre="React Native" color="#61DAFB" />
              <Tool icono={SiNextdotjs} nombre="Next.js" color="#000000" />
            </div>
          </div>

          {/* Herramientas / DevOps */}
          <div>
            <h2
              className="text-3xl font-extrabold text-gray-800 dark:text-white mb-4 relative pl-4
              before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
              before:h-5 before:w-1 before:bg-blue-500 before:rounded
              hover:before:bg-blue-600 hover:before:scale-y-110 before:transition-transform before:duration-300"
            >
              Herramientas & DevOps
            </h2>
            <div className="flex flex-wrap justify-center items-center border-2 border-[var(--dark)] dark:border-[var(--white)] text-[var(--white)] p-6 rounded-lg bg-black/60 gap-4">
              <Tool icono={FaGitAlt} nombre="Git" color="#F05032" />
              <Tool icono={FaGithub} nombre="GitHub" color="#172d0b" />
              <Tool icono={SiDocker} nombre="Docker" color="#2496ED" />
              <Tool icono={SiCloudinary} nombre="Cloudinary" color="#FF6C37" />
              <Tool icono={SiDbeaver} nombre="DBeaver" color="#F05032" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
