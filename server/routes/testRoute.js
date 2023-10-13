import express from "express";
import { getAllBarks } from "../controller/barkController.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    message: "test route"
  });
});

export default router