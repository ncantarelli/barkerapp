import { v2 as cloudinary } from 'cloudinary';
import userModel from "../models/userModel.js";


const getAllUsers = async (req, res) => {
    const allUsers = await userModel.find().populate({ path: "barks", select:["text","likes", "date"] });
    res.json({
        number: allUsers.length,
        allUsers,
    });
};

const uploadImage = async (req, res) => {
    console.log('req.file :>> ', req.file);

    if (req.file) {
        try {
            const uploadedImage = await cloudinary.uploader.upload(req.file.path, { folder: "barkerapp/userProfileImages" })
            console.log('uploadedImage :>> ', uploadedImage);

            
        } catch (error) {
            console.log('error :>> ', error);
        }
    } else {
        res.status(500).json({error:"File type not supported"})
    };
    
};


export { getAllUsers, uploadImage };