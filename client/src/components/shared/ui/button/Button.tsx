import { twMerge } from "tailwind-merge";
import { FC, ReactNode } from "react";

type Props<T = unknown> = {
  type: "submit" | "reset" | "button";
  children: ReactNode;
  className?: string;
  onClick?: (val: T) => void;
  onHover?: (val: T) => void;
};
const Button: FC<Props> = ({
  type = "submit",
  children,
  className,
  onClick,
  onHover,
}) => {
  className = twMerge(
    ` "w-full font-bold leading-6 text-white font-white semibold px-4 py-2 bg-primary rounded-md hover:bg-purple-800 transition-all ease-in-out" ${
      className ?? ""
    }`
  );
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      onMouseMove={onHover}
    >
      {children}
    </button>
  );
};

export default Button;
