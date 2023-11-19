import dotenv from "dotenv";
import mongoose from "mongoose";

import validCategories from "../config/categories.js";

dotenv.config();
const { DEFAULT_REVIEW_URL } = process.env;

const reviewSchema = new mongoose.Schema({
  coverImageUrl: {
    type: String,
    default: DEFAULT_REVIEW_URL,
  },
  title: { type: String, required: true, maxlength: 70 },
  product: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  category: { type: String, enum: validCategories, required: true },
  tags: [{ type: String, maxlength: 22 }],
  text: { type: String, required: true },
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
