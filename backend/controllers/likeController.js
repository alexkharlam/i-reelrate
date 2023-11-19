import Like from "../models/likeModel.js";
import catchAsync from "../utils/catchAsync.js";

export const createLike = catchAsync(async (req, res, next) => {
  const { reviewId } = req.params;

  const like = await Like.create({ review: reviewId, user: req.user?._id });

  res.status(201).json({
    like,
  });
});

export const getLike = catchAsync(async (req, res, next) => {
  const { reviewId } = req.params;

  const like = await Like.findOne({ review: reviewId, user: req.user?._id });

  const totalLikes = await Like.countDocuments({ review: reviewId });

  res.status(200).json({
    like: like || null,
    totalLikes,
  });
});

export const deleteLike = catchAsync(async (req, res, next) => {
  const { reviewId } = req.params;

  await Like.deleteOne({ review: reviewId, user: req.user?._id });

  res.status(204).json({
    like: null,
  });
});
