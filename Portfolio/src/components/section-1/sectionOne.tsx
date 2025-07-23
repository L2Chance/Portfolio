import TerminalContainer from "../terminalContainer";

export default function SectionOne() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 min-h-[85vh] pl-3 pr-3">
      {/* Bloque izquierdo */}
      <div className="flex flex-col justify-center items-center border-2 border-[var(--dark)] dark:border-[var(--white)] text-[var(--white)] p-6 rounded-lg animate-fade-up animate-duration-700 animate-delay-300 gap-4 bg-black/60 w-full md:w-1/2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-6xl underline underline-offset-4 text-shadow-black text-shadow-md/40 text-center">
          Perez Lautaro Ivan
        </h1>
        <span className="flex items-center space-x-2">
          <p className="text-green-400 text-xl sm:text-2xl">Programador</p>
          <p className="text-green-400 text-xl sm:text-2xl animate-fade animate-infinite animate-duration-500 animate-ease-in-out animate-alternate-reverse">
            |
          </p>
        </span>
      </div>

      {/* Bloque derecho */}
      <div className="flex flex-col justify-start items-center text-[var(--white)] p-6 rounded-lg animate-fade-left animate-duration-700 animate-delay-300 gap-4 bg-black/60 w-full md:w-1/2 max-w-lg">
        <TerminalContainer>
          <div className="flex justify-between w-full">
            <p className="text-green-400">$ Introducción</p>
            <p>Bash</p>
          </div>
          <p className="text-center md:text-left text-base sm:text-lg">
            Apasionado por el mundo de la computación desde joven y actualmente
            enfocado en mi desarrollo profesional. Mi objetivo es seguir
            estudiando, aprendiendo y mejorando día a día.
          </p>
        </TerminalContainer>
      </div>
    </div>
  );
}
