import apiClient from "@utils/helpers/apiClient";
import { makeApiRequest } from "../helpers/makeRequest";



export const upload = async (data: FormData) =>
  makeApiRequest(() => apiClient.post("/video/upload", data));

export const getVideo = async (videoId: string) =>
  makeApiRequest(() => apiClient.get(`/video/${videoId}`));
