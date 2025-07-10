import { Model, Schema } from "mongoose";
import jwt from 'jsonwebtoken'

const UserSchema = new Schema({
    username: { type: String, require: true, unique: true },
    password: String
})

export const UserModel = new Model(UserSchema, 'User');

