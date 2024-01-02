import { motion } from "framer-motion";

const SocialSettings = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    
    >
      SocialSettings
    </motion.div>
  );
};

export default SocialSettings;
