import axios from "axios";
import { UserDocument } from "../../../types";
import { makeApiRequest } from "../helpers/makeRequest";

const userAPI = axios.create({
  baseURL: "http:localhost:3300/user/",
  withCredentials: true,
});

export type CreateUserData = Omit<UserDocument, "role">
export const createUser = async (
  data: CreateUserData
): Promise<UserDocument | null> =>
  makeApiRequest(() => userAPI.post("create", data));

export type LoginData = Pick<UserDocument, "email" | "password">;

export const loginUser = async (data: LoginData): Promise<UserDocument | null> =>
  makeApiRequest(() => userAPI.post("login", data));

export const getUser = async (): Promise<UserDocument | null> =>
  makeApiRequest(() => userAPI.get(""));

export const getUserById = async (
  userId: string
): Promise<UserDocument | null> => makeApiRequest(() => userAPI.get(userId));

export const updateUser = async (
  userId: string,
  data: Partial<UserDocument>
): Promise<UserDocument | null> =>
  makeApiRequest(() => userAPI.put(userId, data));

export const deleteUser = async (userId: string) =>
  makeApiRequest(() => userAPI.delete(userId));
