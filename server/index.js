import express, { Router } from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import colors from "colors";

import router from "./routes/testRoute.js";
import barkRoutes from "./routes/barkRoutes.js";
import userRoutes from "./routes/userRoutes.js";


dotenv.config();

const app = express();

const addMiddlewares = () => {
    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({
            extended: true,
        })
    );
};

const addRoutes = () => {

    app.use("/api", router);
    app.use("/api/feed", barkRoutes);
    app.use("/api/users", userRoutes);
}

const DBConnection = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log('Connection to MONGODB stablished'.bgGreen);
    } catch (error) {
        console.log('Connection to MONGODB failed'.bgRed, error);
    };
};

const startServer = () => {

    const port = process.env.PORT || 6969;

    app.listen(port, () => {
    console.log('Server running in port :>>'.bgYellow, port);
    });  
};

(async function controller() {

    await DBConnection();
    addMiddlewares();
    addRoutes();
    startServer();
})();