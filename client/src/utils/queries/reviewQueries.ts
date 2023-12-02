import apiClient from "@utils/helpers/apiClient";
import { ReviewDocument } from "../../../../types";
import { makeApiRequest } from "../helpers/makeRequest";

export const writeReview = (data: ReviewDocument) =>
  makeApiRequest(() => apiClient.post("/review/write", data));

export const getReviewByUserId = (id: string) =>
  makeApiRequest(() => apiClient.get(`/review/${id}`));
