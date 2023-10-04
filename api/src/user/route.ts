import express from "express";
import verifyTokenMiddleware from "../middleware/verifyTokenMiddleware";

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

// Attact verifyTokenMiddleware to routes that requires authentication
router.get("/:userId", verifyTokenMiddleware, getUser);
router.patch("/:userId", verifyTokenMiddleware, updateUser);
router.delete("/:userId", verifyTokenMiddleware, deleteUser);

const userRoutes = router;
export default userRoutes;
