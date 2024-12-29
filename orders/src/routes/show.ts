import express, { Request, Response } from "express";
import { Order } from "../models/order";

const router = express.Router();

router.get("/api/orders/:id", async (req: Request, res: Response) => {
  const order = await Order.findById(req.params.id);
  res.status(200);
});

export { router as showOrderRouter };
