import mongoose from "mongoose";

const rateSchema = new mongoose.Schema({
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
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, "Review rating must have rating value"],
  },
});

const Rate = mongoose.model("Rate", rateSchema);

export default Rate;
