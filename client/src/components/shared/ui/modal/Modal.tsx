import { FC, ReactNode, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
  title?: string; //** @string give your modal a name */
  className?: string;
};

const Modal: FC<Props> = ({ isOpen, onClose, children, className }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const modalVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      width: "90%",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const modalClass = twMerge(`w-60 m-2 p-2 text-center ${className ?? ""}`);

  return (
    <div>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-labelledly="modal-title"
            aria-describedby="modal-content"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black bg-opacity-60"
          ></motion.div>
          <motion.div
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative z-10 p-6 bg-foreground rounded-lg shadow-md"
          >
            {/* Modal content */}
            <div aria-modal id="modal-tile">
              {/* {title} */}
            </div>
            <div id="modal-content" className={modalClass}>
              {children}
            </div>

            {/* Close button */}
            <button
              className="absolute p-2 text-gray-500 top-2 right-2 hover:text-gray-700"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Modal;
