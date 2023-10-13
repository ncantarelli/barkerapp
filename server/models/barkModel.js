import mongoose from "mongoose";

const barkSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
    },

    text: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },

    likes: {
        type: Number,
    },
});

const barkModel = mongoose.model("bark", barkSchema);

export default barkModel;