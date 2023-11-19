import Comment from "../models/commentModel.js";
import Like from "../models/likeModel.js";
import Rate from "../models/rateModel.js";
import Review from "../models/reviewModel.js";
import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";

export const getUser = catchAsync(async (req, res) => {
  if (!req.user)
    return res.status(200).json({
      status: "success",
      isAuthenticated: false,
      message: "Not authenticated",
    });

  const reviewsQuantity = await Review.countDocuments({ user: req.user._id });

  res.status(200).json({
    status: "success",
    user: {
      reviewsQuantity,
      role: req.user.role,
      name: req.user.name,
      email: req.user.email,
      photo: req.user.photo,
    },
  });
});

export const deleteUser = catchAsync(async (req, res) => {
  const userId = req.user._id;

  await Comment.deleteMany({ user: userId });
  await Like.deleteMany({ user: userId });
  await Rate.deleteMany({ user: userId });
  await Review.deleteMany({ user: userId });
  await User.findByIdAndDelete(userId);

  res.status(204).json({
    data: null,
  });
});
