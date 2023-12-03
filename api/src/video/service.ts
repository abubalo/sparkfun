import { MongooseError } from "mongoose";
import { VideoDocument } from "../../../types";
import VideoModel from "./model";

export const saveVideoData = async (data: VideoDocument) => {
  try {
    const videoData = await VideoModel.create(data);

    if (!videoData) {
      throw new Error("Error: Unable to save video data");
    }

    return videoData;
  } catch (error) {
    if (error instanceof MongooseError) {
      throw new Error(`Error in saveVideoData: ${error.message}`);
    }

    throw error;
  }
};

export const getVideoById = async (videoId: string) => {
  try {
    const videoData = await VideoModel.findById(videoId);

    if (!videoData) {
      throw new Error(`Error: Cannot find video with id: ${videoId}`);
    }

    return videoData;
  } catch (error) {
    if (error instanceof MongooseError) {
      throw new Error(`Error in saveVideoData: ${error.message}`);
    }

    throw error;
  }
};

export const getVideoByUserId = async (userId: string) => {
  try {
    const videoData = await VideoModel.find({ userId });

    if (!videoData) {
      throw new Error(`Error: Cannot find video with user id: ${userId}`);
    }
    return videoData;
  } catch (error) {
    if (error instanceof MongooseError) {
      throw new Error(`Error in saveVideoData: ${error.message}`);
    }

    throw error;
  }
};
