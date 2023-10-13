import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    barks: {
        type: Object,
    },

    dateofcreation: {
        type: Date,
        required: true,
    },

});

const userModel = mongoose.model("user", userSchema);

export default userModel;