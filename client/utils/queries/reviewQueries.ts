import axios from "axios";
import { ReviewDocument } from "../../../types";
import { makeApiRequest } from "../lib/makeRequest";

const reviewApi = axios.create({
  baseURL: "http:localhost:3300/review",
  withCredentials: true,
});

export const writeReview = (data: ReviewDocument) =>
  makeApiRequest(() => reviewApi.post("/write", data));

export const getReviewByUserId = (id: string) =>
  makeApiRequest(() => reviewApi.get(id));
