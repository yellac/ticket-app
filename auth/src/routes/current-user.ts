import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  res.send("henlo");
});

export { router as currentUserRouter };
