import { useMutation } from "react-query";
import {
  loginUser,
  LoginData,
} from "../queries/userQueries"; // Assuming LoginData is imported

type Options = {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
};

export function useLoginUser(options: Options) {
  return useMutation(
    "loginUser",
    async (data: LoginData) => {
      const response = await loginUser(data);
      return response;
    },
    {
      onSuccess: () => {
        options.onSuccess && options.onSuccess();
      },
      onError: (error) => {
        options.onError && options.onError(error);
      },
    }
  );
}
