import type { JSX } from "react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiAdp,
  SiDjango,
  SiPython,
  SiMysql,
  SiJavascript,
  SiSharp,
  SiDotnet,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

interface TechIconProps {
  tech: string;
}

export function TechIcon({ tech }: TechIconProps) {
  const iconsMap: Record<string, JSX.Element> = {
    React: <SiReact className="text-blue-500" title="React" />,
    TypeScript: <SiTypescript className="text-blue-700" title="TypeScript" />,
    Tailwind: <SiTailwindcss className="text-teal-400" title="Tailwind CSS" />,
    API: <SiAdp className="text-gray-600" title="API" />,
    Java: <FaJava className="text-red-600" title="Java" />,
    Django: <SiDjango className="text-green-800" title="Django" />,
    Python: <SiPython className="text-yellow-400" title="Python" />,
    SQL: <SiMysql className="text-blue-600" title="SQL (MySQL)" />,
    JavaScript: <SiJavascript className="text-yellow-300" title="JavaScript" />,

    "C#": <SiSharp className="text-purple-600" title="C#" />,
    ".NET": <SiDotnet className="text-indigo-600" title=".NET" />,
    HTML: <SiHtml5 className="text-orange-600" title="HTML5" />,
    CSS: <SiCss3 className="text-blue-500" title="CSS3" />,
  };

  return (
    <span className="text-2xl mr-2 inline-block" aria-label={tech}>
      {iconsMap[tech] || <span className="text-gray-400">?</span>}
    </span>
  );
}
