import { UserDocument } from "@types/index";
import { useMutation } from "react-query";
import {
  loginUser,
  LoginData,
} from "../queries/userQueries"; // Assuming LoginData is imported

type Options = {
  onSuccess?: (data: any) => void;
  onError?: (error: unknown) => void;
};

export default function useLoginUser(options: Options) {
  return useMutation(
    "loginUser",
    async (data: LoginData) => {
      const response = await loginUser(data);
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
