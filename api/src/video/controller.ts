import { Request, Response } from "express";
import { validationVideoUpload } from "../utils/validation/videoUploadValidation";
import { VideoDocument } from "../../../types";
import { getVideoById, saveVideoData } from "./service";

export const createVideo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const requestData: VideoDocument = req.body;
    const validData = await validationVideoUpload(requestData);
    const { isValid, data, errors } = validData;

    if (!isValid || !data) {
      res.status(422).json({ error: errors });
      return;
    }

    const videoData = await saveVideoData(data);

    if (!videoData) {
      res.status(500).json({ error: "Unbale to deliver video" });
      return;
    }

    res.status(201).json(videoData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error!" });
  }
};

export const getVideo = async (req: Request, res: Response): Promise<void> => {
  try {
    const videoId = req.params.id;

    const videoData = await getVideoById(videoId);

    if (!videoData) {
      res.status(500).json({ error: "Unbale to deliver video" });
      return;
    }

    res.status(201).json(videoData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error!" });
  }
};

export const getVideoByUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const videoId = req.params.id;

    const videoData = await getVideoById(videoId);

    if (!videoData) {
      res.status(500).json({ error: "Unbale to deliver video" });
      return;
    }

    res.status(201).json(videoData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error!" });
  }
};
