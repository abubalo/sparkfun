import express from "express";
import authToken from "../middleware/authToken";
import { verifyUser } from "@/email-verification-token/generateVerificationToken";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
  loginUser,
} from "./controller";

const router = express.Router();

router.post("/signup", addUser);
router.post("/login", loginUser);
router.post("/verify/:token", verifyUser);

// Attacth auth token middleware to routes that requires authentication
router.get("/", authToken, getUser);
router.put("/:id", authToken, updateUser);
router.delete("/:id", authToken, deleteUser);

const userRoutes = router;
export default userRoutes;
