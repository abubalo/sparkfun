import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { ArrowUp } from "../../icons/Icons";

type Props = {
  onChange: (val: string) => void;
  options: { value: string; label: string }[];
  className?: string;
  ulClassName?: string;
  // selectedValue: string;
  title: string;
};

const SelectMenu: FC<Props> = ({
  onChange,
  className,
  ulClassName,
  options,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const parentClassName = twMerge(`relative w-full`, className);
  
  ulClassName = twMerge(
    `w-full px-4 py-2 bg-foreground hover:bg-slate-800  cursor-pointer transition-all ease-in-out`,
    ulClassName
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleValue = (value: string) => {
    onChange(value);
    setValue(value);
  };

  return (
    <div className={parentClassName}>
      <div
        onClick={toggleMenu}
        className=" p-3 bg-foreground flex justify-between border border-white/20 rounded-md"
      >
        <p>{value || title}</p>
        <ArrowUp />
      </div>
      {isOpen ? (
        <motion.ul
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="absolute w-full mt-2 border border-white/20 rounded-md overflow-hidden"
        >
          {options.map((option) => (
            <motion.li
              key={option.value}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                handleValue(option.value);
                toggleMenu();
              }}
              className={ulClassName}
            >
              {option.label}
            </motion.li>
          ))}
        </motion.ul>
      ) : null}
    </div>
  );
};

export default SelectMenu;
