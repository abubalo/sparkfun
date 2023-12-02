import { makeApiRequest } from "@utils/helpers/makeRequest";
import apiClient from "@utils/helpers/apiClient";

export const getConfigKey = () =>
  makeApiRequest(() => apiClient.get("stripe/pub-key"));

export const getClientKey = () =>
  makeApiRequest(() => apiClient.post("stripe/create-payment-intent", {}));
