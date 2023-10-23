import bcrypt from "bcrypt";
import { MongooseError } from "mongoose";
import { UserDocument } from "../../../types";
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
  ): Promise<UserDocument | undefined> => {
    try {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      const userData = await UserModel.create({
        firstName,
        lastName,
        role,
        email,
        username,
        password: hashedPassword,
      });

      // Log a success message
      logger.info(`User added successfully: ${userData?.email}`);

      return userData;
    } catch (error) {
      handleServiceError(error)
    }
  };

  public static getUserById = async (
    id: string
  ): Promise<UserDocument | null> => {
    try {
      const userData = await UserModel.findById(id);

      if (!userData) {
        logger.error(`User not found with id: ${id}`);
        return null;
      }

      logger.info(`Seccussefully retrived data with id:${id}`);
      return userData;
    } catch (error) {
      if (error instanceof MongooseError) {
        logger.error(`Error fetching user by id: ${error.message}`);
        return null;
      }
      // Handle unexpexted error
      logger.error(`Error: ${error}`);
      return null;
    }
  };

  public static getUserByEmail = async (
    email: string
  ): Promise<boolean | undefined> => {
    try {
      const userData = await UserModel.findOne({ email });

      return !!userData;
    } catch (error) {
      handleServiceError(error)
    }
  };

  public static authenticateUser = async (
    email: string,
    password: string
  ): Promise<UserDocument | null> => {
    try {
      const userData = await UserModel.findOne({ email });

      if (!userData) {
        logger.error(`User not found with email: ${email}`);
        return null;
      }

      const passwordMatches = bcrypt.compareSync(password, userData.password);

      if (!passwordMatches) {
        logger.error(`Invalid password for user with email: ${userData.email}`);
        return null;
      }

      return userData;
    } catch (error) {
      if (error instanceof MongooseError) {
        logger.error(`Error authenticating user: ${error.message}`);
        return null;
      }
      // Handle unexpected error
      logger.error(`Error: ${error}`);
      return null;
    }
  };

  public static isUserTalent = async (userId: string): Promise<boolean | undefined > =>{
    try {
      const user = await UserModel.findById(userId);

      if(user.role !== "talent"){
          return false
      }

      return true
    } catch (error) {
      handleServiceError(error)
    }
  }
  public static updateUser = async (
    id: string,
    data: Partial<UserDocument>
  ): Promise<UserDocument | null> => {
    try {
      const userData = await UserModel.findByIdAndUpdate(id, data);

      if (!userData) {
        logger.error(`User not found or unable to update with id: ${id}`);
        return null;
      }

      return userData;
    } catch (error) {
      if (error instanceof MongooseError) {
        logger.error(`Error updating user: ${error.message}`);
        return null;
      }
      // Handle unexpected error
      logger.error(`Error: ${error}`);
      return null;
    }
  };

  public static deleteUser = async (id: string): Promise<boolean | null> => {
    try {
      const userData = await UserModel.findByIdAndDelete(id);

      if (!userData) {
        logger.error(`User not found or unable to delete with id: ${id}`);
        return null;
      }

      return true;
    } catch (error) {
      if (error instanceof MongooseError) {
        logger.error(`Error deleting user: ${error.message}`);
        return null;
      }
      // Handle unexpected error
      logger.error(`Error: ${error}`);
      return null;
    }
  };
}
