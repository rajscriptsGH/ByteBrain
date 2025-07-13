import mongoose, { Schema, model } from "mongoose";

mongoose.connect('mongodb://localhost:27017/ByteBrain')
    .then(() => console.log("db connected")
    )

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
})


export const UserModel = model("User", UserSchema);


const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: [{ type: mongoose.Types.ObjectId, ref: 'User', required: true }],
})


const LinkShare = new Schema({
    hash: String,
    userId: [{ type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true }],
})

export const ContentModel = model("Content", ContentSchema)
export const LinkModel = model("Content", LinkShare)

