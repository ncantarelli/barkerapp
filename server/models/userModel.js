import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    barks: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: "bark"}],
    },

    dateOfCreation: {
        type: Date,
        // required: true,
    },

    userImage: {
        type: String,
    },

    favorites: [],

    followedBy: [],

    follows: [],
});

const userModel = mongoose.model("user", userSchema);

export default userModel;