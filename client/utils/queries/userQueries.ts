import axios from "axios";
import { UserDocument } from "../../../types";
import { makeApiRequest } from "../lib/makeRequest";

const userAPI = axios.create({
  baseURL: "http:localhost:3300/user",
  withCredentials: true,
});

export const createUser = async (data: UserDocument) =>
  makeApiRequest(() => userAPI.post("/create", data));

type LoginData = Pick<UserDocument, "email" | "password">;

export const login = async (data: LoginData) =>
  makeApiRequest(() => userAPI.post("/login", data));

export const getUser = async () => makeApiRequest(() => userAPI.get(""));

export const getUserById = async (userId: string) =>
  makeApiRequest(() => userAPI.get(userId));

export const updateUser = async (userId: string, data: Partial<UserDocument>) =>
  makeApiRequest(() => userAPI.put(`${userId}`, data));

export const deleteUser = async (userId: string) =>
  makeApiRequest(() => userAPI.delete(`${userId}`));
