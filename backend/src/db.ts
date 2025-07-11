import mongoose, { Schema, model } from "mongoose";

mongoose.connect('mongodb://localhost:27017/ByteBrain')
    .then(() => console.log("db connected")
    )

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
})


export const UserModel = model("User", UserSchema);
