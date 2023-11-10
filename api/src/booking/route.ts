import express from "express";
import { checkUserRoleHandler } from "../middleware/checkUserRole";
import {
  archiveBooking,
  cancelBooking,
  createBooking,
  deliverBooking,
  getAllBooking,
  getBookingById,
  modifyBooking,
} from "./controller";

const router = express.Router();

router.post("/create", checkUserRoleHandler, createBooking);
router.get("/:id", getBookingById);
router.get("/bookings/:id", getAllBooking);
router.patch("/deliver/:id", checkUserRoleHandler, deliverBooking);
router.patch("/modify/:id",checkUserRoleHandler, modifyBooking);
router.patch("/cancel/:id", cancelBooking);
router.delete("/archive/:id",checkUserRoleHandler, archiveBooking);

const bookingRoutes = router;
export default bookingRoutes;
