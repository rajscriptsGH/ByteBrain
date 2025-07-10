import mongoose, { Schema, model } from "mongoose";

mongoose.connect('process.env.MONGODB_URI')

const UserSchema = new Schema({
    username: { type: String, unique: true, require: true },
    password: { type: String, require: true }
})


export const UserModel = model("User", UserSchema);
