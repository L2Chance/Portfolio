import type { ComponentType } from "react";
import type { IconBaseProps } from "react-icons";

interface Props {
  icon: ComponentType<IconBaseProps>;
  title: string;
}

export default function Aptitud({ icon: Icon, title }: Props) {
  return (
    <article className="flex flex-col justify-center items-center w-50 h-50 bg-black/50 rounded-lg gap-3">
      <p className="text-[15px] text-yellow-300 dark:text-gray-300">{title}</p>
      <Icon size={80} className="dark:text-[var(--blue)] transition-all" />
    </article>
  );
}
