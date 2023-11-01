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
}   


export { getAllUsers, uploadImage };