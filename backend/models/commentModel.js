import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  review: {
    type: mongoose.Schema.ObjectId,
    ref: "Review",
    required: [true, "Review rating must belong to a review"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Review rating must belong to a user"],
  },
  text: {
    type: String,

    required: [true, "Comment must have a text"],
  },
  createdAt: { type: Date, default: Date.now },
});

commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });

  next();
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
