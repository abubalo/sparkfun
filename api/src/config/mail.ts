import { config } from "@/config/config";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.nodemailer.user,
    pass: config.nodemailer.password,
  },
});

export default transport;
