import userModel from "../models/userModel.js";


const getAllUsers = async (req, res) => {
    const allUsers = await userModel.find();
    res.json({
        number: allUsers.length,
        allUsers,
    });
};

export { getAllUsers };