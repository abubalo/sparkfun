import { Request, Response } from "express";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { config } from "../../config/config";
import formidable, { Fields, Files } from "formidable";
import { ReadStream } from "fs";

export const uploadToS3 = async (req: Request, res: Response) => {
  const form = new formidable.IncomingForm({
    maxFiles: 1,
    maxFileSize: 1024 * 1024, // 1 MB limit (adjust as needed)
    uploadDir: "./tmp", // Directory to store uploaded files temporarily
    keepExtensions: true,
  });

  form.parse(req, async (err, fields: Fields, files: Files) => {
    if (err) {
      console.error("Error parsing form:", err);
      res.status(500).json({ error: "Error parsing form" });
      return;
    }

    const file = files.file;

    if (!file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    const fileName = `delivery-${Date.now()}`;

    const s3 = new S3Client({
      region: "us-east-1",
      credentials: {
        accessKeyId: config.s3.accesskey,
        secretAccessKey: config.s3.secretKey,
      },
    });

    const uploadParams = {
      Bucket: "sparkfun/videos",
      Key: fileName,
      Body: file as unknown as ReadStream,
    };

    try {
      const data = await s3.send(new PutObjectCommand(uploadParams));
      console.log("File uploaded successfully:", data);

      // You can send a response to the client indicating success
      res.status(200).json(data);
    } catch (error) {
      console.error("Error uploading file to S3:", error);
      res.status(500).json({ error: "Error uploading file to S3" });
    }
  });
};
