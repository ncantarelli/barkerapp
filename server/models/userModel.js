import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    barks: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: "bark"}],
    },

    dateOfCreation: {
        type: Date,
        required: true,
    },

    photo: {
        type: String,
    },

    favorites: [],
});

const userModel = mongoose.model("user", userSchema);

export default userModel;