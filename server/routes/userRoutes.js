import express from "express";
import { getAllUsers, uploadImage } from "../controller/userController.js";
import multerUpload from "../middlewares/multer.js";


const router = express.Router();

router.get("/all", getAllUsers);

router.post("/imageUpload", multerUpload.single("userImage"), uploadImage);

export default router;
