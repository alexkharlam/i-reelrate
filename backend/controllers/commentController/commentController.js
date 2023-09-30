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

  const comments = await Comment.find({ review: reviewId });

  res.status(200).json({
    comments,
  });
});
