import axios from "axios";
import { makeApiRequest } from "../helpers/makeRequest";

const videoApi = axios.create({
  baseURL: "http://localhost:5000/video",
  withCredentials: true,
});

export const upload = async (data: FormData) =>
  makeApiRequest(() => videoApi.post("/upload", data));

export const getVideo = async (videoId: string) =>
  makeApiRequest(() => videoApi.get(`/${videoId}`));
