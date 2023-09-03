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
    // validate: [validator.isEmail, "Please provide correct email"],
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
});

// userSchema.pre(/^find/, function (next) {
//   this.find({ active: { $ne: false } });

//   next();
// });

const User = mongoose.model("User", userSchema);

export default User;
