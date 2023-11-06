import { makeApiRequest } from "@/utils/helpers/makeRequest";
import axios from "axios";

const stripeApi = axios.create({
  baseURL: "http://localhost:5000/stripe",
  withCredentials: true,
});

export const getConfigKey = () =>
  makeApiRequest(() => stripeApi.get("/pub-key"));

export const getClientKey = () =>
  makeApiRequest(() => stripeApi.post("/create-payment-intent", {}));
