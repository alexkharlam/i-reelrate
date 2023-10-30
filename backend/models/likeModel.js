import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  review: {
    type: mongoose.Schema.ObjectId,
    ref: "Review",
    required: [true, "Like must belong to a review"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Like must belong to a user"],
  },
});

likeSchema.index({ review: 1, user: 1 }, { unique: true });

const Like = mongoose.model("Like", likeSchema);

export default Like;
