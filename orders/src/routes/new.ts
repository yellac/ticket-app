import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { body } from "express-validator";
import {
  NotFoundError,
  requireAuth,
  validateRequest,
} from "@hcyticketing/common";
import { Ticket } from "../models/ticket";
import { Order } from "../models/order";

const router = express.Router();

router.post(
  "/api/orders",
  requireAuth,
  [
    body("ticketId")
      .notEmpty()
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
      .withMessage("Ticket ID must be provided"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { ticketId } = req.body;

    // Find the ticket the user is trying to order in the db
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      throw new NotFoundError();
    }

    // Make sure that this ticket is not yet reserved

    // Calculate an expiration date for this order

    // Build the order and save it to the db

    // Publish an event saying that an order was created
    res.send({});
  }
);

export { router as createOrderRouter };
