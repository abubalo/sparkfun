import { FC, KeyboardEvent, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown } from "../../icons/Icons";

type Props = {
  onChange: (val: string) => void;
  options: { value: string; label: string; icon: JSX.Element }[];
  className?: string;
  ulClassName?: string;
  title: string | null;
};

const SelectMenu: FC<Props> = ({
  onChange,
  className,
  ulClassName,
  options,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectLabel, setSelectLabel] = useState(title);
  const [selectIcon, setSelectIcon] = useState<JSX.Element | string>("");
  const [activeOptionIndex, setActiveOptionIndex] = useState(-1);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const parentClassName = twMerge(`relative w-full`, className);

  ulClassName = twMerge(
    `w-full px-4 py-2 bg-foreground hover:bg-slate-800  cursor-pointer transition-all ease-in-out`,
    ulClassName
  );

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setActiveOptionIndex(-1);
    selectRef.current?.focus();
  };

  const handleMouseEnter = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseLeave = () => {
    setIsOpen(!isOpen);
    setActiveOptionIndex(-1);
    selectRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      if (isOpen) {
        handleClose();
      } else {
        handleOpen();
      }
    } else if (e.key === "Escape") {
      if (isOpen) {
        handleClose();
      }
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (isOpen) {
        const newActiveOptionIndex =
          activeOptionIndex + (e.key === "ArrowDown" ? 1 : -1);
        if (
          newActiveOptionIndex >= 0 &&
          newActiveOptionIndex < options.length
        ) {
          setActiveOptionIndex(newActiveOptionIndex);
        }
      }
    }
  };
  // const handleSelection = (e: KeyboardEvent<HTMLDListElement>)=>{
  //   if(e.key === "Enter" || e.key == " "){
  //     set
  //   }
  // }

  const handleOptionClick = (
    value: string,
    label: string,
    icon: JSX.Element
  ) => {
    onChange(value);
    setSelectLabel(label);
    setSelectIcon(icon);
    handleClose();
  };

  return (
    <div
      ref={selectRef}
      className={parentClassName}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        role="combobox"
        aria-expanded={isOpen}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        className="p-3 bg-foreground flex justify-between border border-white/20 rounded-md"
        onClick={handleOpen}
      >
        <motion.p
          role="option"
          layout="position"
          className="flex gap-2 items-center"
        >
          <span>{selectIcon}</span>
          <span>{selectLabel}</span>
        </motion.p>
        <div
          className={`transfor transition-all ease-in-out duration-500 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <ArrowDown />
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen ? (
          <motion.ul
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="absolute w-full mt-2 border border-white/20 rounded-md overflow-hidden"
          >
            {options.map((option, index) => (
              <motion.li
                key={option.value}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() =>
                  handleOptionClick(option.value, option.label, option.icon)
                }
                className={twMerge(
                  ulClassName,
                  activeOptionIndex === index && "bg-gray-300"
                )}
                role="option"
                aria-selected={activeOptionIndex === index}
                aria-setsize={options.length}
                aria-posinset={index + 1}
              >
                <div className="flex gap-2 items-center text-textColor">
                  {option.icon ? <div>{option.icon}</div> : null}
                  <div>{option.label}</div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default SelectMenu;
