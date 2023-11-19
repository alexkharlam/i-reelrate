import dotenv from "dotenv";

import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";

import QueryFeatures from "./QueryFeatures.js";

dotenv.config();
const { DEFAULT_PAGE_LIMIT } = process.env;

export const getAllUsers = catchAsync(async (req, res, next) => {
  const usersLength = await User.countDocuments();

  const pageLimit = req.query.limit || DEFAULT_PAGE_LIMIT;
  const totalPages = Math.ceil(usersLength / pageLimit);

  const usersPromise = new QueryFeatures(User.find(), req.query).paginate();

  const users = await usersPromise.mongooseQuery;

  res.status(200).json({
    users,
    totalPages,
  });
});

export const blockUser = catchAsync(async (req, res, next) => {
  const user = req.params.userId;

  const updatedUser = await User.findByIdAndUpdate(user, { blocked: true });

  res.status(200).json({
    user: updatedUser,
  });
});

export const unblockUser = catchAsync(async (req, res, next) => {
  const user = req.params.userId;

  const updatedUser = await User.findByIdAndUpdate(user, { blocked: false });

  res.status(200).json({
    user: updatedUser,
  });
});
