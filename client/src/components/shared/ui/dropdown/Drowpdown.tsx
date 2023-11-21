import {
  FC,
  KeyboardEvent,
  ReactNode,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  toggle: ReactNode;
  content: ReactNode;
};

const Dropdown: FC<Props> = ({ toggle, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const hanldeKeydown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      setIsOpen(!isOpen);
    } else if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
      dropdownRef.current?.focus();
    }
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <motion.div
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-max"
    >
      <div role="button" onKeyDown={hanldeKeydown} tabIndex={0}>
        {toggle}
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Dropdown;
