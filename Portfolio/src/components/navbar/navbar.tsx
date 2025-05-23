import { FaLinkedin, FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import DarkModeButton from "./DarkModeButton";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-20 ">
        <div className="flex justify-between items-center w-full max-w-screen-xl px-5">
          <ul className="flex space-x-4">
            <a
              href="https://github.com/L2Chance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="hover:scale-120">
                <span className="text-[var(--dark)] dark:text-[var(--white)]">
                  <FaSquareGithub size={40} />
                </span>
              </li>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="transform transition-transform  hover:scale-120">
                <span className="text-[var(--dark)] dark:text-[var(--white)]">
                  <FaSquareInstagram size={40} />
                </span>
              </li>
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="transform transition-transform  hover:scale-120">
                <div className="text-[var(--dark)] dark:text-[var(--white)]">
                  <FaLinkedin size={40} />
                </div>
              </li>
            </a>
          </ul>
          <DarkModeButton></DarkModeButton>
        </div>
      </div>
    </>
  );
}
