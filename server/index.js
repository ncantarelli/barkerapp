import express, { Router } from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import colors from "colors";
import postModel from "./models/postModel.js";

dotenv.config();

const router = express.Router();

const app = express();

const port = process.env.PORT || 6969;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
        extended: true,
    })
);

app.use("/api", router);

// router.get("/test", (req, res) => {

//     res.json({
//         message: "test route",
//     });
// });

router.get("/posts", async (req, res) => {

    const allPosts = await postModel.find();

    console.log('allPosts :>> ', allPosts);
    res.json({
        data: allPosts,
        info: {
            number: allPosts.length,
            pages: 1,
        }
    });
});



const DBConnection = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log('Connection to MONGODB stablished'.bgGreen);
    } catch (error) {
        console.log('Connection to MONGODB failed'.bgRed, error);
    };
};
DBConnection();

app.listen(port, () => {
  console.log('Server running in port :>>'.bgMagenta, port);
});