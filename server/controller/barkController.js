import barkModel from "../models/barkModel.js";

const getAllBarks = async (req, res) => {

    const allBarks = await barkModel.find();

    console.log('allBarks :>> ', allBarks);

    res.json({
        number: allBarks.length,   
        allBarks,
    });
};

export {getAllBarks}; 