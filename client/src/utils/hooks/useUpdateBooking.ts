import { useMutation } from "react-query";
import { deliverBooking } from "../queries/bookingQueries";

type Options = {
  onSuccess?: (data: any) => void;
  onError?: (error: unknown) => void;
};

export function useUpdateBooking(options: Options) {
  return useMutation(
    "updateBooking",
    async (bookingId: string) => {
      const response = await deliverBooking(bookingId);
      return response;
    },
    {
      onSuccess: (data) => {
        options.onSuccess && options.onSuccess(data);
      },
      onError: (error) => {
        options.onError && options.onError(error);
      },
    }
  );
}
