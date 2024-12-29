import express, { Request, Response } from "express";
import { Order } from "../models/order";

const router = express.Router();

router.get("/api/orders", async (req: Request, res: Response) => {
  const orders = await Order.find({});

  res.status(200).send(orders);
});

export { router as indexOrderRouter };
