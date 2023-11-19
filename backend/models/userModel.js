import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const { DEFAULT_AVATAR_URL } = process.env;

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  name: {
    type: String,
    required: [true, "Please provide your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    lowercase: true,
  },
  photo: {
    type: String,
    default: DEFAULT_AVATAR_URL,
  },
  blocked: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
