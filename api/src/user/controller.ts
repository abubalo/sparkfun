import { Request, Response } from "express";
import generateToken from "../utils/auth/generateToken";
import {
  validateLoginInput,
  validateRegistrationInput,
} from "../utils/validation/userValidation";
import { UserDocument } from "../../../types";
import UserService from "./service";

const handleSuccess = <T>(res: Response, data: T, status = 200) => {
  res.status(status).json(data);
};
const handleFailure = <T>(res: Response, message: T, status = 500) => {
  res.status(status).json({ error: message });
};

export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData = req.body;

    const { isValid, data, errors } = validateRegistrationInput(userData);

    if (!isValid) {
      return handleFailure(res, errors, 422);
    }

    if (!data) {
      return handleSuccess(res, "Data is missing", 422);
    }

    const {
      firstName,
      lastName,
      email,
      role = "user",
      username,
      password,
    } = data;

    const isEmailExist = await UserService.getUserByEmail(email);
    const isUsernameExist = await UserService.getUserByUsername(username);

    if (isEmailExist) {
      handleFailure(res, `Email already exist`, 409);
      return;
    }
    if (isUsernameExist) {
      return handleFailure(res, "Username is available", 409);
    }

    const newUser = await UserService.addUser(
      firstName,
      lastName,
      role,
      email,
      username,
      password
    );

    handleSuccess(res, newUser, 201);
  } catch (error) {
    console.log("Error in addUser:", error);
    handleFailure(res, "Internal server error");
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

    // const { success, error:isVerifiedError } = await UserService.isVerified(email);

    // if (success === false) {
    //   handleFailure(res, isVerifiedError, 401);
    // }

    const { data: userData, error } = await UserService.authenticateUser(
      data.email,
      data.password
    );

    if (!userData) {
      return handleFailure(res, error, 404);
    }

    const {
      data: token,
      success,
      error: jwtError,
    } = await generateToken(userData);

    if (jwtError) {
      return handleFailure(res, error, 500);
    }

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true, // To prevent client-side access
        sameSite: "lax",
        secure: true,
        // domain: ".sparkfun.vercel.app",
        path: "/",
        expires: new Date(Date.now() + 48 * 60 * 60 * 1000), // Cookie expires in 24 hours (in milliseconds)
      })
      .json(data);
  } catch (error) {
    console.log("Error in loginUser:", error);
    handleFailure(res, "Internal server error");
  }
};

export const getUser = async (
  req: Request & { userId?: string },
  res: Response
): Promise<void> => {
  try {
    const userId: string | undefined = req.userId;

    if (!userId) {
      return handleFailure(res, "Auathorized: userId is missing", 401);
    }
    const { data, error } = await UserService.getUserById(userId);

    if (!data) {
      return handleFailure(res, error);
    }

    const { _id, email, firstName, lastName, username } = data;

    handleSuccess(res, { id: _id, email, firstName, lastName, username });
  } catch (error) {
    handleFailure(res, "Internal server error");
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId: string = req.params.id;
    const updateData: Partial<UserDocument> = req.body;

    const { data } = await UserService.updateUser(userId, updateData);

    if (!data) {
      return handleFailure(res, "User not found", 404);
    }

    handleSuccess(res, data);
  } catch (error) {
    handleFailure(res, "Internal server error");
  }
};

export const updateUserRole = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { role } = req.body;

    if (!userId) {
      return handleFailure(res, "Invalid paramter", 422);
    }

    const { success } = await UserService.getUserById(userId);

    if (success === false) {
      return handleFailure(res, "User Does not exist", 404);
    }

    const { data, error } = await UserService.updateUserRole(userId, role);

    if (!data) {
      return handleFailure(res, error);
    }

    handleSuccess(res, "User role successfully updated", 204);
  } catch (error) {
    console.log("Error in updatUserRole:", error);
    handleFailure(res, "Internal server error");
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
      return handleFailure(
        res,
        "Error: Unable to delete user, please try again"
      );
    }

    handleSuccess(res, "User successfully  deleted!", 204);
  } catch (error) {
    console.error("Error in deleteUser:", error);
    handleFailure(res, "Internal server error");
  }
};
