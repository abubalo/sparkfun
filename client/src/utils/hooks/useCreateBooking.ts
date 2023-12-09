import { useMutation } from "react-query";
import { BookingData, createBooking } from "../queries/bookingQueries";

type Options = {
  onSuccess?: (data: any ) => void;
  onError?: (error: unknown) => void;
};

export function useCreateBooking(options: Options) {
  return useMutation(
    "createBooking",
    async (data: BookingData) => {
      const response = await createBooking(data);
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
