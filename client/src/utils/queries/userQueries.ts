import { UserDocument } from "../../../../types";
import apiClient from "../helpers/apiClient";
import { makeApiRequest } from "../helpers/makeRequest";



export type CreateUserData = Omit<UserDocument, "role">;

export const createUser = async (
  data: CreateUserData
): Promise<UserDocument | null> =>
  makeApiRequest(() => apiClient.post("/user/signup", data));

export type LoginData = Pick<UserDocument, "email" | "password">;

export const verifyAccount = async (
  token: string
): Promise<UserDocument | null> =>
  makeApiRequest(() => apiClient.post(`/user/verify?token=${token}`));

export const loginUser = async (
  data: LoginData
): Promise<UserDocument | null> =>
  makeApiRequest(() => apiClient.post("/user/login", data));

export const getUser = async (): Promise<UserDocument | null> =>
  makeApiRequest(() => apiClient.get("/user/"));

export const getUserById = async (
  userId: string
): Promise<UserDocument | null> => makeApiRequest(() => apiClient.get(`/${userId}`));

export const updateUser = async (
  userId: string,
  data: Partial<UserDocument>
): Promise<UserDocument | null> =>
  makeApiRequest(() => apiClient.put(`/user/${userId}`, data));

export const deleteUser = async (userId: string) =>
  makeApiRequest(() => apiClient.delete(`/user/${userId}`));

export const forgotPassword = async (val: { email: string }) =>
  makeApiRequest(() => apiClient.post("/user/forgot-password", { val }));

export const updateUserRole = async (data: { userId: string; role: string }) =>
  makeApiRequest(() => apiClient.post(`/user/update-role/${data.userId}`, { data }));
