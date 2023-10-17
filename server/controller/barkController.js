import barkModel from "../models/barkModel.js";

const getAllBarks = async (req, res) => {

    const allBarks = await barkModel.find().populate({ path: "userId", select:["username", "profileImage"]});

    console.log('allBarks :>> ', allBarks);

    res.json({
        number: allBarks.length,   
        allBarks,
    });
};

export {getAllBarks}; 