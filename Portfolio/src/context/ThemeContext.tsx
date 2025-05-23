import { createContext, useContext, useEffect, useState } from "react";

import React from "react"; // Necesario para React.Dispatch y React.SetStateAction

// 1. Define la interfaz para el valor que el contexto va a proveer
interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

// 2. Crea el contexto, especificando el tipo que va a contener.
//    El valor por defecto debe ser `undefined` al principio y luego chequearse
//    cuando se usa con `useContext`, o puedes proveer un objeto vacío
//    que cumpla con la interfaz pero esto puede llevar a errores en tiempo de ejecución
//    si no se usa dentro del ThemeProvider. `undefined` es la práctica recomendada.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Tipa las props de tu ThemeProvider
interface ThemeProviderProps {
  children: React.ReactNode; // `React.ReactNode` es el tipo para contenido JSX
}

// 3. Tipa el componente ThemeProvider como un Functional Component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>( // <-- Aquí también tipas el estado
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    // 4. Asegúrate de que el 'value' que provees coincida con la interfaz
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 5. Modifica useDarkMode para asegurar que el contexto no sea undefined
export const useDarkMode = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Es una buena práctica lanzar un error si el hook se usa fuera de su Provider
    throw new Error("useDarkMode must be used within a ThemeProvider");
  }
  return context;
};
