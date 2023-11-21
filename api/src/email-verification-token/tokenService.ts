import { handleServiceError } from "@/utils/error/serviceError";
import logger from "@/utils/lib/logger";
import { TokenDoc } from "../../../types";
// import { TokenDoc } from "@type/types";
import VerificationModel from "./model";

export const setToken = (token: TokenDoc) => {
  try {
    const tokenData = VerificationModel.create(token);

    logger.info(`Token successfully generated`);
    return tokenData;
  } catch (error) {
    handleServiceError(error);
    return false
  }
};

export const getToken = (token: string) => {
  try {
    const tokenData = VerificationModel.findOne({ token });

    if (!tokenData) {
      logger.error(`Token is invalid`);
      return false;
    }

    return tokenData;
  } catch (error) {
    handleServiceError(error);
    return false
  }
};
