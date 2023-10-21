import express, {Request, Response} from "express";
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
router.get("/:id", verifyTokenMiddleware, getUser);
router.patch("/:id", verifyTokenMiddleware, updateUser);
router.delete("/:id", verifyTokenMiddleware, deleteUser);

const userRoutes = router;
export default userRoutes;
