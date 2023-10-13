import mongoose from "mongoose";

const postSchema = new mongoose.Schema({

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

const postModel = mongoose.model("bark", postSchema);

export default postModel;