import mongoose, { Schema, model } from "mongoose";

mongoose.connect('mongodb://localhost:27017/ByteBrain')

const UserSchema = new Schema({
    username: { type: String, unique: true, require: true },
    password: { type: String, require: true }
})


export const UserModel = model("User", UserSchema);
