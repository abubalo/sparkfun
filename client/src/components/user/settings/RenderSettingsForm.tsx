import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import BillingSettings from "./BillingSettings";
import DefaultSettings from "./DefaultSettings";
import EmailSettings from "./EmailSettings";
import PasswordSettings from "./PasswordSettings";
import SocialSettings from "./SocialSettings";
import NotificationSettings from "./NotificationSettings";

function RenderSettingsForm() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") as string;

  // Animation
  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const tabComponentMapping: {[key: string]: JSX.Element} = {
    password: <PasswordSettings />,
    billing: <BillingSettings />,
    email: <EmailSettings />,
    notification: <NotificationSettings />,
    integration: <SocialSettings />,
  };

  const componentToRender = tabComponentMapping[tab] || <DefaultSettings />;

  return (
    <motion.div
      className="text-white"
      initial="hidden"
      animate="visible"
      variants={fadeAnimation}
      transition={{ duration: 0.5 }}
    >
      {componentToRender}
    </motion.div>
  );
}

export default RenderSettingsForm;
