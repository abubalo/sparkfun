import { AxiosError, AxiosResponse } from "axios";
import { handleApiError } from "../lib/apiErrorLog";
import { Logging } from "../lib/Logging";

export const makeApiRequest = async <T>(
  axiosFn: () => Promise<AxiosResponse<T>>
): Promise<T | null> => {
  try {
    const response = await axiosFn();
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      handleApiError(error);
    } else {
      Logging.error(error);
    }
    return null;
  }
};
