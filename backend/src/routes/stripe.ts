import express, { Request, Response } from "express";
import stripe from "../config/stripe";
import { validateCheckout } from "../middleware/validateCheckout";

interface PaymentRequestBody {
  currency: string;
  productName: string;
  unitAmount: number;
}

const router = express.Router();

router.post("/create-checkout-session", async (req: Request, res: Response) => {
  try {
    const { currency, productName, unitAmount } = req.body as PaymentRequestBody;

    validateCheckout(currency, productName, unitAmount);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency,
            product_data: { name: productName },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ url: session.url });
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    
    res.status(400).json({ error: error.message || "Internal Server Error" });
  }
});

export default router;
