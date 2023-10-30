import Comment from "../../models/commentModel.js";
import catchAsync from "../../utils/catchAsync.js";

export const createComment = catchAsync(async (req, res, next) => {
  const { reviewId } = req.params;
  const { text } = req.body;

  const comment = await Comment.create({
    review: reviewId,
    user: req.user._id,
    text,
  });

  res.status(200).json({
    comment,
  });
});

export const getComments = catchAsync(async (req, res, next) => {
  const { reviewId } = req.params;

  const comments = await Comment.find({ review: reviewId }).sort("-createdAt");

  res.status(200).json({
    comments,
  });
});

export const deleteComment = catchAsync(async (req, res, next) => {
  const { reviewId } = req.params;

  await Comment.deleteOne({ review: reviewId, user: req.user._id });

  res.status(204).json({
    comment: null,
  });
});
