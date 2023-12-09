import { useMutation } from "react-query";
import { ReviewDocument } from "../../../../types";
import { writeReview } from "../queries/reviewQueries";

type Options = {
  onSuccess: (data: any) => void;
  onError: (error: unknown) => void;
};

export function useWriteReview(options: Options) {
  return useMutation(
    "writeReview",
    async (data: ReviewDocument) => {
      const response = await writeReview(data);
      return response;
    },
    {
      onSuccess: (data) => {
        options.onSuccess && options.onSuccess(data); //Trigers only when onSuccess is invoked
      },
      onError: (error) => {
        options.onError && options.onError(error);
      },
    }
  );
}
