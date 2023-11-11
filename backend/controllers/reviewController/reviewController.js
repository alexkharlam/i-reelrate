import dotenv from "dotenv";

import ApiFeatures from "../../config/ApiFeatures.js";
import Like from "../../models/likeModel.js";
import Review from "../../models/reviewModel.js";
import catchAsync from "../../utils/catchAsync.js";
import { uploadImageBuffer } from "../../utils/cloudinaryUpload.js";
import AppError from "../errorController/AppError.js";

dotenv.config();
const { DEFAULT_PAGE_LIMIT } = process.env;

function getQueryFilter(query) {
  const { category, user } = query;

  const queryFilter = {};

  if (category && category !== "all") queryFilter.category = category;
  if (user) queryFilter.user = user;

  return queryFilter;
}

export const getReviews = catchAsync(async (req, res, next) => {
  const queryFilter = getQueryFilter(req.query);

  const reviewsLength = await Review.countDocuments(queryFilter);

  const pageLimit = req.query.limit || DEFAULT_PAGE_LIMIT;
  const totalPages = Math.ceil(reviewsLength / pageLimit);

  const reviewPromise = new ApiFeatures(Review.find(queryFilter), req.query)
    .sort()
    .paginate()
    .limitFields();

  const reviews = await reviewPromise.query;

  res.status(200).json({
    results: reviewsLength,
    totalPages,
    reviews,
    page: +req.query.page || 1,
  });
});

export const getLikedReviews = catchAsync(async (req, res, next) => {
  const userLikes = await Like.find({ user: req.user?._id }).populate({
    path: "review",
    select: "-text",
  });

  const likedReviews = userLikes.map((like) => like.review);

  const reviewsLength = likedReviews.length;

  const totalPages = Math.ceil(reviewsLength / DEFAULT_PAGE_LIMIT);

  res.status(200).json({
    results: reviewsLength,
    totalPages,
    likes: likedReviews,
  });
});

export const getReview = catchAsync(async (req, res, next) => {
  const review = await Review.findById(req.params.id);

  res.status(200).json({
    review,
  });
});

export const createReview = catchAsync(async (req, res, next) => {
  let imgUrl;
  if (req.file) {
    const uploadedImgData = await uploadImageBuffer(
      req.file.buffer,
      "reviewCovers"
    );
    imgUrl = uploadedImgData.secure_url;
  }

  const review = await Review.create({
    ...req.body,
    user: req.user._id,
    coverImageUrl: imgUrl || undefined,
  });

  res.status(200).json({
    message: "success",
    review,
  });
});

export const searchReviews = catchAsync(async (req, res, next) => {
  const { query } = req.body;
  if (!query) return next(new AppError("Query cannot be empty"));

  const results = await Review.aggregate([
    {
      $search: {
        index: "searchReviews",
        text: {
          query,
          path: {
            wildcard: "*",
          },
        },
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $addFields: {
        user: { $arrayElemAt: ["$user", 0] },
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    results,
  });
});

export const deleteReview = catchAsync(async (req, res, next) => {
  const review = await Review.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!review)
    return next(new AppError("Review must exist and belong to a user", 400));

  await Review.findByIdAndRemove(review._id);

  res.status(204).json({
    review: null,
  });
});
