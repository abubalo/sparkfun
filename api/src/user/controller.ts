import { Request, Response } from "express";
import generateToken from "utils/auth/generateToken";
import {
  validateLoginInput,
  validateRegistrationInput,
} from "utils/validation/userValidation";
import { UserDocument } from "../../../types";
import UserService from "./service";

export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData: UserDocument = req.body;

    const { isValid, data, errors } = validateRegistrationInput(userData);

    if (!isValid) {
      res.status(422).json({ error: errors });
      return;
    }

    if (!data) {
      res.status(422).json({ error: "Data is missing" });
      return;
    }

    const { firstName, lastName, email, password } = data;

    const isUserExist = await UserService.getUserByEmail(email);

    if (isUserExist) {
      res.status(409).json({ error: `User with email:${email} already exist` });
      return;
    }

    const newUser = await UserService.addUser(
      firstName,
      lastName,
      email,
      password
    );

    res.status(201).json(newUser);
  } catch (error) {
    console.log("Error in addUser:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const { isValid, data, errors } = validateLoginInput(email, password);

    if (!isValid) {
      res.status(422).json({ error: errors });
      return;
    }

    if (!data) {
      res.status(422).json({ error: "Data is missing" });
      return;
    }

    const user = await UserService.authenticateUser(data.email, data.password);

    if (!user) {
      res.status(404).json("User does not exist");
      return;
    }

    const token = await generateToken(user);

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: true,
        // domain: ".sparkfun.vercel.app",
        path: "/",
      })
      .json();
  } catch (error) {
    console.log("Error in loginUser:", error);
    res.status(500).json("Internal server error");
  }
};

export const getUser = async (
  req: Request & { userId?: string },
  res: Response
): Promise<void> => {
  try {
    const userId: string | undefined = req.userId;

    if (!userId) {
      res.status(401).json({ error: "Auathorized: userId is missing" });
      return;
    }
    const userData = await UserService.getUserById(userId);

    if (!userData) {
      res.status;
      return;
    }

    res.status(200).json(userData);
  } catch (error) {
    console.log("Error in getUser:", error);
    res.status(500).json("Internal server error");
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId: string = req.params.id;
    const updateData: Partial<UserDocument> = req.body;

    const userData = await UserService.updateUser(userId, updateData);

    if (!userData) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.status(200).json(userData);
  } catch (error) {
    console.log("Error in updatUser:", error);
    res.status(500).json("Internal server error");
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId: string = req.params.id;
    const isDelete = await UserService.deleteUser(userId);

    if (!isDelete) {
      res
        .status(500)
        .json({ error: "Error: Unable to delete user, please try again" });
      return;
    }

    res.status(200).json({ error: "User successfully  deleted!" });
  } catch (error) {
    console.error("Error in deleteUser:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
