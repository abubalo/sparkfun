import { AxiosError } from "axios";
import { Logging } from "./Logging";

export const handleApiError = (error: AxiosError) => {
  if (error.response) {
    // The request was made, but the server responded with a non-2xx status code
    Logging.error(`HTTP Error - Status Code: ${error.response.status}`);
  } else if (error.request) {
    // The request was made, but no response was received
    Logging.error("No response received from the server.");
  } else {
    // Something happened in setting up the request
    Logging.error("An error occurred while setting up the request.");
  }
  // Log the error message
  Logging.error(`Error: ${error.message}`);
};
