// App.tsx
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar";
import "./global.css";
import SectionOne from "./components/section-1/sectionOne";
import SectionTwo from "./components/section-2/sectionTwo";
import ModalGallery from "./components/ModalGallery";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectContainer from "./components/projectsContainer";

interface Proyecto {
  titulo: string;
  descripcion: string;
  imagenes: string[];
  demo: string;
  codigo: string;
}

interface ModalState {
  isOpen: boolean;
  currentProjectIndex: number;
  currentImageIndex: number;
  allProjectsData: Proyecto[];
}

function App() {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    currentProjectIndex: 0,
    currentImageIndex: 0,
    allProjectsData: [],
  });

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const handleImageClick = (
    projectIndex: number,
    imageIndex: number,
    projectsData: Proyecto[]
  ) => {
    setModalState({
      isOpen: true,
      currentProjectIndex: projectIndex,
      currentImageIndex: imageIndex,
      allProjectsData: projectsData,
    });
  };

  const handleCloseModal = () => {
    setModalState((prevState) => ({ ...prevState, isOpen: false }));
  };

  const handleNavigateImage = (direction: number) => {
    setModalState((prevState) => {
      const currentProject =
        prevState.allProjectsData[prevState.currentProjectIndex];

      if (!currentProject) {
        return prevState;
      }
      const totalImages = currentProject.imagenes.length;
      let newImageIndex = prevState.currentImageIndex + direction;

      if (newImageIndex < 0) {
        newImageIndex = totalImages - 1;
      } else if (newImageIndex >= totalImages) {
        newImageIndex = 0;
      }

      return {
        ...prevState,
        currentImageIndex: newImageIndex,
      };
    });
  };

  const currentImageSrc = modalState.isOpen
    ? modalState.allProjectsData[modalState.currentProjectIndex]?.imagenes[
        modalState.currentImageIndex
      ] || ""
    : "";

  return (
    <>
      <Navbar />
      <SectionOne />
      <SectionTwo>
        <ProjectContainer onImageClick={handleImageClick} />
      </SectionTwo>

      <ModalGallery
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        currentImageSrc={currentImageSrc}
        onNavigate={handleNavigateImage}
        totalImages={
          modalState.isOpen
            ? modalState.allProjectsData[modalState.currentProjectIndex]
                ?.imagenes.length || 0
            : 0
        }
        currentImageIndex={modalState.currentImageIndex}
      />
    </>
  );
}

export default App;
