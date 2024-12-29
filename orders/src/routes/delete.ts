import express, { Request, Response } from "express";

const router = express.Router();

router.delete("/api/orders/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
});

export { router as deleteOrderRouter };
