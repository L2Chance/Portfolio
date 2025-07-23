import React from "react";
import Slider from "react-slick";

interface Proyecto {
  titulo: string;
  descripcion: string;
  imagenes: string[];
  demo: string;
  codigo: string;
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
      titulo: "Juego de Mecanografía",
      descripcion: "Un juego para practicar tipeo con palabras aleatorias.",
      imagenes: [
        "https://www.emagister.com/blog/wp-content/uploads/2017/12/2-7.jpg",
        "https://www.primeraedicion.com.ar/wp-content/uploads/2018/11/Toma-de-agua-Coopertiva-de-Dos-de-Mayo.jpg",
        "https://www.emagister.com/blog/wp-content/uploads/2017/12/2-7.jpg",
      ],
      demo: "https://mi-demo.vercel.app",
      codigo: "https://github.com/L2Chance/Mecanografiando",
    },
    {
      titulo: "Clon de Netflix",
      descripcion: "Interfaz moderna de streaming con React y Tailwind.",
      imagenes: [
        "https://www.emagister.com/blog/wp-content/uploads/2017/12/2-7.jpg",
        "https://www.emagister.com/blog/wp-content/uploads/2017/12/2-7.jpg",
      ],
      demo: "https://mi-netflix.vercel.app",
      codigo: "https://github.com/L2Chance/Netflix-Clone",
    },
    {
      titulo: "Clon de Netflix",
      descripcion: "Interfaz moderna de streaming con React y Tailwind.",
      imagenes: [
        "https://www.emagister.com/blog/wp-content/uploads/2017/12/2-7.jpg",
        "https://www.emagister.com/blog/wp-content/uploads/2017/12/2-7.jpg",
      ],
      demo: "https://mi-netflix.vercel.app",
      codigo: "https://github.com/L2Chance/Netflix-Clone",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="grid grid-cols-1 gap-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen max-w-7xl mx-auto">
      {proyectos.map((proyecto, proyectoIndex) => (
        <article
          key={proyectoIndex}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-400 border border-transparent hover:border-blue-500 cursor-pointer overflow-hidden flex flex-col md:flex-row h-auto md:h-80"
        >
          {/* Info Izquierda */}
          <div className="flex flex-col justify-between p-6 flex-1">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 tracking-wide">
                {proyecto.titulo}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                {proyecto.descripcion}
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href={proyecto.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-blue-600 hover:bg-blue-700 focus-visible:ring-4 focus-visible:ring-blue-300 text-white font-medium py-2 rounded-lg shadow-md transition duration-300"
              >
                Ver demo
              </a>
              <a
                href={proyecto.codigo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gray-800 hover:bg-gray-900 focus-visible:ring-4 focus-visible:ring-gray-600 text-white font-medium py-2 rounded-lg shadow-md transition duration-300"
              >
                Ver código
              </a>
            </div>
          </div>

          {/* Slider Derecha */}
          <div className="w-full md:w-1/2 min-w-[180px] max-w-full md:max-w-[600px] overflow-hidden rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
            <Slider {...settings} className="h-auto md:h-full">
              {proyecto.imagenes.map((imgSrc, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imgSrc}
                  alt={`${proyecto.titulo} ${imgIndex + 1}`}
                  className="w-full h-64 md:h-80 object-cover cursor-pointer"
                  onClick={() =>
                    onImageClick(proyectoIndex, imgIndex, proyectos)
                  }
                  loading="lazy"
                  draggable={false}
                />
              ))}
            </Slider>
          </div>
        </article>
      ))}
    </section>
  );
}
