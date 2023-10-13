import express from "express";
import { getAllBarks } from "../controller/barkController.js";

const router = express.Router();

router.get("/all", getAllBarks);

export default router