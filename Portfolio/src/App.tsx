import { useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import "./global.css";
import SectionOne from "./components/section-1/sectionOne";
import SectionTwo from "./components/section-2/sectionTwo";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <SectionOne />
      <SectionTwo />
    </>
  );
}

export default App;
