import { motion } from "framer-motion";

const BillingSettings = () => {
  return (
    <motion.div
      className="text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      BillingSettings
    </motion.div>
  );
};

export default BillingSettings;
