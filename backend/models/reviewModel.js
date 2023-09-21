import mongoose from "mongoose";

import validCategories from "../config/categories.js";

const reviewSchema = new mongoose.Schema({
  coverImageUrl: {
    type: String,
    default:
      "https://res.cloudinary.com/dl3mrqdyz/image/upload/v1695263924/defaults/coverImageDefault_zjctsl.svg",
  },
  reviewTitle: { type: String, required: true, maxlength: 70 },
  subjectTitle: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  category: { type: String, enum: validCategories, required: true },
  tags: [{ type: String, maxlength: 22 }],
  reviewText: { type: String, required: true },
  verdict: { type: Number, min: 1, max: 10, required: true },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Review must belong to a user"],
  },
  rating: {
    value: { type: Number, default: 0 },
    numRates: { type: Number, default: 0 },
  },
});

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });

  next();
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
