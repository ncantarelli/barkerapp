import userModel from "../models/userModel.js";


const getAllUsers = async (req, res) => {
    const allUsers = await userModel.find().populate({ path: "barks", select:["text","likes", "date"] });
    res.json({
        number: allUsers.length,
        allUsers,
    });
};

export { getAllUsers };