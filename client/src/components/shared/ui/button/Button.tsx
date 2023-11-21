import { twMerge } from "tailwind-merge";
import { FC, ReactNode } from "react";

type Props<T = unknown> = {
  type: "submit" | "reset" | "button";
  children: ReactNode;
  id?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (val: T) => void;
  onHover?: (val: T) => void;
};
const Button: FC<Props> = ({
  type = "submit",
  children,
  id,
  disabled = false,
  className,
  onClick,
  onHover,
}) => {
  className = twMerge(
    ` "w-full font-bold leading-6 text-white font-white semibold px-4 py-2 bg-primary rounded-md hover:bg-purple-700 active:scale-[1.03] transition-all ease-in-out duration-75" ${
      className ?? ""
    }`
  );
  return (
    <button
      id={id}
      disabled={disabled}
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
