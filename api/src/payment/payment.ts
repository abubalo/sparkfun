import type { Request, Response } from "express";
import Stripe from "stripe";
import { config } from "@/config/config";

const stripe = new Stripe(config.stripe.secret);

export const proccessPayment = async (req: Request, res: Response) => {
  try {
    const paymentIntents = await stripe.paymentIntents.create({
      amount: 1099,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.status(200).send({client_secret: paymentIntents.client_secret});
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
