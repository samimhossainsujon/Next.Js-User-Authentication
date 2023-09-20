import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please Provide a User Name"],
    },
    email: {
        type: String,
        required: [true, " Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Pleasse Provide a password "]
    },

    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPosswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.User || mongoose.model("User", userSchema);


export default User;