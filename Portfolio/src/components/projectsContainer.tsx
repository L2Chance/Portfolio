import { useState } from "react";
import { TechIcon } from "./TechIcon";

import Mecanografiando_imagen_1 from "../assets/Mecanografiando/imagen-1.png";
import Mecanografiando_imagen_2 from "../assets/Mecanografiando/imagen-2.png";
import Mecanografiando_imagen_3 from "../assets/Mecanografiando/imagen-3.png";

import GestorDeTareasNet_imagen_1 from "../assets/GestorDeTareasNET/imagen-1.png";
import GestorDeTareasNet_imagen_2 from "../assets/GestorDeTareasNET/imagen-2.png";
import GestorDeTareasNet_imagen_3 from "../assets/GestorDeTareasNET/imagen-3.png";
import GestorDeTareasNet_imagen_4 from "../assets/GestorDeTareasNET/imagen-4.png";
import GestorDeTareasNet_imagen_5 from "../assets/GestorDeTareasNET/imagen-5.png";

import SentirseBienSpa_imagen_1 from "../assets/SentirseBienSpa/imagen-1.png";
import SentirseBienSpa_imagen_2 from "../assets/SentirseBienSpa/imagen-2.png";
import SentirseBienSpa_imagen_3 from "../assets/SentirseBienSpa/imagen-3.png";
import SentirseBienSpa_imagen_4 from "../assets/SentirseBienSpa/imagen-4.png";
import SentirseBienSpa_imagen_5 from "../assets/SentirseBienSpa/imagen-5.png";

import Lecturopolis_imagen_1 from "../assets/Lecturopolis/imagen-1.png"
import Lecturopolis_imagen_2 from "../assets/Lecturopolis/imagen-2.png"
import Lecturopolis_imagen_3 from "../assets/Lecturopolis/imagen-3.png"
import Lecturopolis_imagen_4 from "../assets/Lecturopolis/imagen-4.png"

import NetflixClone_imagen_1 from "../assets/NetflixClone/imagen-1.png"
import NetflixClone_imagen_2 from "../assets/NetflixClone/imagen-2.png"
import NetflixClone_imagen_3 from "../assets/NetflixClone/imagen-3.png"

export interface Proyecto {
  titulo: string;
  descripcion: string;
  imagenes: string[];
  demo: string;
  codigo: string;
  tecnologias: string[];
}

interface ProjectContainerProps {
  onImageClick: (
    proyectoIndex: number,
    imageIndex: number,
    proyectosData: Proyecto[]
  ) => void;
}

export default function ProjectContainer({
  onImageClick,
}: ProjectContainerProps) {
  const proyectos: Proyecto[] = [
    {
      titulo: "Mecanografiando",
      descripcion:
        "un juego de mecanografía web inspirado en 10FastFingers, con el objetivo de fortalecer mi lógica de programación, profundizar en el uso de lenguajes web y disfrutar del proceso creativo. Este proyecto frontend fue construido utilizando JavaScript para la lógica interactiva del juego, HTML para la estructura de la página y CSS para el diseño y la presentación visual, aplicando una arquitectura sencilla y funcional para una experiencia de usuario directa y enfocada en la práctica de la escritura.",
      imagenes: [
        Mecanografiando_imagen_1,
        Mecanografiando_imagen_2,
        Mecanografiando_imagen_3,
      ],
      demo: "https://mecanografiando.vercel.app/",
      codigo: "https://github.com/L2Chance/Mecanografiando",
      tecnologias: ["JavaScript", "HTML", "CSS"],
    },
    {
      titulo: "Gestor De Tareas / .NET + React",
      descripcion:
        "Este proyecto es una aplicación CRUD Fullstack robusta, que combina un Backend seguro desarrollado con .NET y C# y un Frontend dinámico construido con React y Tailwind CSS. El backend gestiona usuarios e implementa funcionalidades como registro, inicio de sesión y cambio de contraseña. La seguridad fue una prioridad, integrando Password Hashing (HashSet) para proteger las credenciales y autenticación basada en tokens JWT para una comunicación segura y escalable. Para el frontend, se utilizó React por su eficiencia y enfoque basado en componentes, facilitando una interfaz de usuario interactiva. Tailwind CSS se empleó para un diseño ágil y moderno. Este proyecto demuestra la capacidad de integrar diversas tecnologías y aplicar buenas prácticas de desarrollo en un entorno Fullstack.",

      imagenes: [
        GestorDeTareasNet_imagen_1,
        GestorDeTareasNet_imagen_2,
        GestorDeTareasNet_imagen_3,
        GestorDeTareasNet_imagen_4,
        GestorDeTareasNet_imagen_5,
      ],
      demo: "",
      codigo: "https://github.com/L2Chance/GestorDeTareas",
      tecnologias: ["React", "TypeScript", ".NET", "C#", "Tailwind", "SQL"],
    },
    {
      titulo: "Sistema de gestión para Sentirse Bien SPA",
      descripcion:
        "Este proyecto universitario es una aplicación web monolítica diseñada para la administración integral de un SPA, desarrollada para una asignatura de la UTN FRRe. El sistema permite la gestión de una amplia gama de funcionalidades, incluyendo servicios, turnos de clientes, profesionales, roles de usuario, simulación de pagos y respuestas automáticas vía chatbot. Construida sobre una base de Python y Django, la aplicación utiliza HTML, CSS y JavaScript para el frontend, con una integración parcial de Tailwind CSS a través de Django-Tailwind para el diseño y la interfaz de usuario. Este proyecto demuestra mi capacidad para desarrollar soluciones web completas y multifuncionales en un entorno de arquitectura monolítica.",
      imagenes: [
        SentirseBienSpa_imagen_1,
        SentirseBienSpa_imagen_2,
        SentirseBienSpa_imagen_3,
        SentirseBienSpa_imagen_4,
        SentirseBienSpa_imagen_5,
      ],
      demo: "",
      codigo: "https://github.com/L2Chance/Elcieloenlatierra_SPA",
      tecnologias: [
        "Python",
        "Django",
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "SQLite"
      ],
    },
    {
      titulo: "Lecturopolis",
      descripcion:
        "Aplicación web para la gestión integral de una biblioteca, desarrollada con un enfoque en eficiencia y facilidad de uso. El sistema permite registrar y administrar socios, gestionar el catálogo de libros y llevar un control detallado del historial de préstamos y devoluciones. Cada préstamo se asocia a un socio y un libro, con validación automática de disponibilidad para evitar conflictos de reserva.",
      imagenes: [
        Lecturopolis_imagen_1,
        Lecturopolis_imagen_2,
        Lecturopolis_imagen_3,
        Lecturopolis_imagen_4,
      ],
      demo: "",
      codigo: "https://github.com/L2Chance/GestorBiblioteca-API",
      tecnologias: [
        "Node",
        "Express",
        "HTML",
        "CSS",
        "React",
        "Tailwind",
        "SQLite",
      ],
    },
    {
      titulo: "Netflix Clone",
      descripcion:
        "Clon de la interfaz de Netflix desarrollado con React y TypeScript. Permite explorar un catálogo de películas, ver detalles, agregar favoritas, reproducir trailers y crear nuevas películas mediante un servicio simulado en memoria, sin base de datos.",
      imagenes: [
        NetflixClone_imagen_1,
        NetflixClone_imagen_2,
        NetflixClone_imagen_3,
      ],
      demo: "https://netflix-clone-phi-sepia.vercel.app/",
      codigo: "https://github.com/L2Chance/NetflixClone",
      tecnologias: [
        "TypeScript",
        "HTML",
        "CSS",
        "React",
        "Tailwind",
      ],
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});

  const goToPrevImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex((prev) => {
      const current = prev[projectIndex] !== undefined ? prev[projectIndex] : 0;
      const newIndex = (current - 1 + totalImages) % totalImages;
      return { ...prev, [projectIndex]: newIndex };
    });
  };

  const goToNextImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex((prev) => {
      const current = prev[projectIndex] !== undefined ? prev[projectIndex] : 0;
      const newIndex = (current + 1) % totalImages;
      return { ...prev, [projectIndex]: newIndex };
    });
  };

  return (
    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
      {proyectos.map((proyecto, proyectoIndex) => {
        const totalImages = proyecto.imagenes.length;
        const currentImgSrc =
          proyecto.imagenes[currentImageIndex[proyectoIndex] || 0];

        return (
          <article
            key={proyectoIndex}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-400 border border-transparent hover:border-blue-500 cursor-pointer overflow-hidden flex flex-col md:flex-row"
          >
            {/* Contenido textual */}
            <div className="flex flex-col justify-between p-6 w-full md:w-[55%]">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 relative inline-block w-fit after:block after:h-0.5 after:bg-blue-500 after:absolute after:left-0 after:bottom-0 after:w-full after:scale-x-100 after:transition-transform after:duration-300 hover:after:scale-x-110">
                {proyecto.titulo}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {proyecto.descripcion}
              </p>
              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proyecto.tecnologias.map((tech, index) => (
                  <TechIcon key={`${tech}-${index}`} tech={tech} />
                ))}
              </div>

              <div className="flex gap-4 mt-2">
                {proyecto.demo ? (
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300"
                  >
                    Ver demo
                  </a>
                ) : (
                  <span
                    className="flex-1 text-center bg-gray-300 text-gray-600 font-medium py-2 px-4 rounded-lg shadow-inner cursor-not-allowed"
                    title="Este proyecto no tiene demo disponible"
                  >
                    Sin demo
                  </span>
                )}

                <a
                  href={proyecto.codigo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300"
                >
                  Código fuente
                </a>
              </div>
            </div>

            {/* Imagen con controles */}
            <div className="relative w-full md:w-[45%] flex items-center justify-center">
              {totalImages > 0 && (
                <img
                  src={currentImgSrc}
                  alt={`${proyecto.titulo} ${
                    currentImageIndex[proyectoIndex] || 0 + 1
                  }`}
                  className="w-full h-auto max-h-[400px] object-cover cursor-pointer"
                  onClick={() =>
                    onImageClick(
                      proyectoIndex,
                      currentImageIndex[proyectoIndex] || 0,
                      proyectos
                    )
                  }
                  draggable={false}
                />
              )}

              {totalImages > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrevImage(proyectoIndex, totalImages);
                    }}
                    aria-label="Imagen anterior"
                  >
                    &#8249;
                  </button>
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNextImage(proyectoIndex, totalImages);
                    }}
                    aria-label="Imagen siguiente"
                  >
                    &#8250;
                  </button>
                </>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
}
