import { useMutation } from "react-query";
import {
  CreateUserData,
  createUser,
} from "../queries/userQueries"; // Assuming LoginData is imported

type Options = {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
};

export function useRegisterUser(options: Options) {
  return useMutation(
    "createUser",
    async (data: CreateUserData) => {
      const response = await createUser(data);
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
