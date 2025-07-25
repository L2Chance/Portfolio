// components/section-3/SectionThree.tsx

import TerminalContainer from "../terminalContainer";
import ProjectContainer from "../projectsContainer";
import type { Proyecto } from "../projectsContainer";

interface SectionThreeProps {
  onImageClick: (
    projectIndex: number,
    imageIndex: number,
    projectsData: Proyecto[]
  ) => void;
}

export default function SectionThree({ onImageClick }: SectionThreeProps) {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center gap-6 min-h-[50vh] pl-3 pr-3 mt-70"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <section className="flex flex-col w-[80%] gap-1">
          <TerminalContainer>
            <p>Mis proyectos personales</p>
          </TerminalContainer>
          <div className="w-full">
            <ProjectContainer onImageClick={onImageClick} />
          </div>
        </section>
      </div>
    </>
  );
}
