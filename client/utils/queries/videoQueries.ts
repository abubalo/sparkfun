import axios from "axios";
import { makeApiRequest } from "../lib/makeRequest";

const videoApi = axios.create({
  baseURL: "http:localhost:3300/video",
  withCredentials: true,
});

export const upload = async (data: FormData) =>
  makeApiRequest(() => videoApi.post("/upload", data));

export const getVideo = async (videoId: string) =>
  makeApiRequest(() => videoApi.get(`/${videoId}`));
