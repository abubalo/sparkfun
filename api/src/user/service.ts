import bcrypt from "bcrypt";
import { UserDocument, Response } from "../../../types";
import logger from "../utils/lib/logger";
import UserModel from "./model";
import { handleServiceError } from "../utils/error/serviceError";

export default class UserService {
  public static addUser = async (
    firstName: string,
    lastName: string,
    role: string,
    email: string,
    username: string,
    password: string
  ): Promise<Response<UserDocument>> => {
    try {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      const userData = await UserModel.create<UserDocument>({
        firstName,
        lastName,
        role,
        email,
        username,
        password: hashedPassword,
      });

      logger.info(`User added successfully: ${userData?.email}`);

      return { success: true, data: userData };
    } catch (error) {
      handleServiceError(error);
      return { success: false, error: `Service Error: something went wrong` };
    }
  };

  public static getUserById = async (
    id: string
  ): Promise<Response<UserDocument>> => {
    try {
      const userData = await UserModel.findById(id);

      if (!userData) {
        logger.error(`User not found with id: ${id}`);
        return { success: false, error: `User not found with id: ${id}` };
      }

      logger.info(`Successfully retrieved data with id: ${id}`);
      return { success: true, data: userData };
    } catch (error) {
      handleServiceError(error);
      return { success: false, error: `Something went wrong` };
    }
  };

  public static getUserByEmail = async (
    email: string
  ): Promise<Response<UserDocument>> => {
    try {
      const userData = await UserModel.findOne({ email });

      if (!userData) {
        logger.error(`User not found with email: ${email}`);
        return { success: false, error: `User not found with email: ${email}` };
      }

      logger.info(`Successfully retrieved user by email: ${email}`);
      return { success: true, data: userData };
    } catch (error) {
      handleServiceError(error);
      return { success: false, error: `Service Error: something went wrong` };
    }
  };

  public static getUserByUsername = async (
    username: string
  ): Promise<Response<UserDocument>> => {
    try {
      const userData = await UserModel.findOne({ username });

      if (!userData) {
        logger.error(`User not found with username: ${username}`);
        return { success: false, error: `User not found with username: ${username}` };
      }

      logger.info(`Successfully retrieved user by username: ${username}`);
      return { success: true, data: userData };
    } catch (error) {
      handleServiceError(error);
      return { success: false, error: `Service Error: something went wrong` };
    }
  };

  public static authenticateUser = async (
    email: string,
    password: string
  ): Promise<Response<UserDocument>> => {
    try {
      const userData = await UserModel.findOne({ email });

      if (!userData) {
        logger.error(`User with email: ${email} does not exist`);
        return {
          success: false,
          error: `User with email: ${email} does not exist`,
        };
      }

      const passwordMatches = bcrypt.compareSync(password, userData.password);

      if (!passwordMatches) {
        logger.error(`Invalid password for user with email: ${userData.email}`);
        return { success: false, error: `Invalid password` };
      }

      logger.info(`User authenticated successfully: ${userData.email}`);
      return {success: true, data: userData};
    } catch (error) {
      handleServiceError(error);
      return { success: false, error: `Service Error: something went wrong` };
    }
  };

  public static updateUser = async (
    id: string,
    data: Partial<UserDocument>
  ): Promise<Response<UserDocument>> => {
    try {
      const userData = await UserModel.findByIdAndUpdate(id, data);

      if (!userData) {
        logger.error(`User not found or unable to update with id: ${id}`);
        return { success: false, error: `Service Error: something went wrong` };
      }

      logger.info(`User updated successfully: ${userData.email}`);
      return { success: true, data: userData };
    } catch (error) {
      handleServiceError(error);
      return { success: false, error: `Service Error: something went wrong` };
    }
  };

  public static updateUserRole = async (
    id: string,
    role: string
  ): Promise<Response<UserDocument>> => {
    try {
      const userData = await UserModel.findByIdAndUpdate(id, { role });

      if (!userData) {
        logger.error(`User not found or unable to update role with id: ${id}`);
        return {
          success: false,
          error: `User not found or unable to update role with id: ${id}`,
        };
      }

      logger.info(`User role updated successfully: ${userData.email}`);
      return { success: true, data: userData };
    } catch (error) {
      handleServiceError(error);
      return { success: false, error: `Service Error: something went wrong` };
    }
  };

  public static updateVerificationStatus = async (email: string) => {
    try {
      const user = await UserModel.findOne({ email });

      if (!user) {
        logger.error(`User with email: ${email} does not exist`);
        return { success: false, error: `User with email: ${email} does not exist` };
      }

      user.verified = true;
      await user.save();
      logger.info(`User with email: ${email} has been successfully verified`);

      return true;
    }catch (error) {
      handleServiceError(error);
      return { success: false, error: `Service Error: something went wrong` };
    }
  };

  public static isVerified = async (
    email: string
  ): Promise<Response<UserDocument>> => {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        logger.error(`User with email: ${email} does not exist`);
        return {
          success: false,
          error: `User with email: ${email} does not exist`,
        };
      }

      return { success: user.verified };
    } catch (error) {
      return { success: false, error: `Service Error: something went wrong` };
    }
  };

  public static deleteUser = async (
    id: string
  ): Promise<Response<UserDocument>> => {
    try {
      const userData = await UserModel.findByIdAndDelete(id);

      if (!userData) {
        logger.error(`User not found or unable to delete with id: ${id}`);
        return {
          success: false,
          error: `User not found or unable to delete with id: ${id}`,
        };
      }

      logger.info(`User deleted successfully: ${userData.email}`);
      return { success: true };
    } catch (error) {
      handleServiceError(error);
      return { success: false, error: `Service Error: something went wrong` };
    }
  };
}
