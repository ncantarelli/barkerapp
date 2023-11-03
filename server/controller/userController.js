import { v2 as cloudinary } from 'cloudinary';
import userModel from "../models/userModel.js";
import { hashPassword } from '../utils/hashPassword.js';


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

            res.status(200).json({
                message: "Image uploaded successfully.",
                userImage: uploadedImage.secure_url,
            });
            
        } catch (error) {
            console.log('error :>> ', error);
        };
    } else {
        res.status(500).json({error:"File type not supported"})
    };
    
};

const register = async (req, res) => {
    // console.log("register controller is working");
    // console.log('req.body :>> ', req.body);
    console.log('req.file :>> ', req.file);


    try {
        const hashedPassword = await hashPassword(req.body.password);
        if (hashedPassword) {
            try {
                const newUser = new userModel({
                    userName: req.body.userName,
                    email: req.body.email,
                    password: hashedPassword,
                    userImage: req.body.userImage,
                    // dateOfCreation:req.body.dateOfCreation,
                });
                const savedUser = await newUser.save();
                res.status(201).json({
                    message: "New user registered.",
                    user: {
                        userName: savedUser.userName,
                        email: savedUser.email,
                        userImage: savedUser.userImage,
                        // dateOfCreation:savedUser.dateOfCreation,
                    }
                });
            } catch (error) {
                console.log('Error saving user :>> ', error);
                res.status(500).json({
                    message: "Something went wrong."
                });
            };       
        };

    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).json({ message: "something went wrong." });
    };





    // try {
    //     const newUser = new userModel({
    //         userName: req.body.userName,
    //         email: req.body.email,
    //         password: req.body.password,
    //         userImage: req.body.userImage,
    //         dateOfCreation:req.body.dateOfCreation,
    //     })
    // } catch (error) {
        
    // }
};

export { getAllUsers, uploadImage, register };