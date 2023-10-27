import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { FC, ReactNode } from "react";

type Props<T = unknown> = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (val: T) => void;
  onHover?: (val: T) => void;
};
const LinkButton: FC<Props> = ({
  href,
  children,
  className,
  onClick,
  onHover,
}) => {
  className = twMerge(
    ` "text-sm leading-6 text-white text-center font-white semibold px-4 py-2 bg-primary rounded-md hover:bg-purple-800 trasition-all" ${
      className ?? ""
    }`
  );
  return (
    <Link
      to={href}
      className={className}
      onClick={onClick}
      onMouseMove={onHover}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
