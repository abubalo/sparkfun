import transport from "@/config/mail";
import logger from "@/utils/lib/logger";
import { config } from "@/config/config";

export const sendEmailVerification = async (email: string, token: string) => {
  const mailOptions = {
    from: config.nodemailer.user,
    to: email,
    subject: "Account Verification",
    text: `Please click the following link to verify your account: http://localhost:5173/verify/${token}`,
  };

  new Promise<void>((resolve, reject) => {
    transport.sendMail(mailOptions, (error) => {
      if (error) {
        logger.error(`Failed to send verification mail: ${email}`);
        reject(error);
      }

      logger.info(`Email verification sent to: ${email}`);
      resolve();
    });
  });
};
