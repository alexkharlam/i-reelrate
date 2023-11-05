import mongoose from "mongoose";

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
    default:
      "https://res.cloudinary.com/dl3mrqdyz/image/upload/v1695052774/defaults/default-user.jpg",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
