import express from "express";
import {
  archiveBooking,
  cancelBooking,
  createBooking,
  deliverBooking,
  getAllBooking,
  getBookingById,
  updateBooking,
} from "./controller";

const router = express.Router();

router.post("/create", createBooking);
router.get("/:id", getBookingById);
router.get("/bookings/:userId", getAllBooking);
router.patch("/deliver/:id", deliverBooking);
router.patch("/modify/:id", updateBooking);
router.patch("/cancel/:id", cancelBooking);
router.delete("/archive/:id", archiveBooking);

const bookingRoutes = router;
export default bookingRoutes;
