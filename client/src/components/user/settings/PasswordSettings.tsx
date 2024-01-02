import { motion } from "framer-motion";

const PasswordSettings = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      PasswordSettings
    </motion.div>
  );
};

export default PasswordSettings;
