import express from "express";
import { proccessPayment } from "./payment";
import stripeConfigKey from "./configKey";

const router = express.Router();

router.post("/create-payment-intent", proccessPayment);
router.get("/pubkey", stripeConfigKey);

const paymentRoutes = router;

export default paymentRoutes;
