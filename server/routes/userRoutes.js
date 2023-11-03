import express from "express";
import { getAllUsers, register, uploadImage } from "../controller/userController.js";
import multerUpload from "../middlewares/multer.js";


const router = express.Router();

router.get("/all", getAllUsers);

router.post("/imageUpload", multerUpload.single("userImage"), uploadImage);
router.post("/register", multerUpload.single("userImage"), register);

export default router;
