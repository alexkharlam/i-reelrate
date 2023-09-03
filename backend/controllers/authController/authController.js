import User from "../../models/userModel.js";
import catchAsync from "../../utils/catchAsync.js";
import AppError from "../errorController/AppError.js";

import { signSendToken, verifyToken } from "./jwtController.js";

export const startAuth = async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ email: profile._json.email });

  if (existingUser) return done(null, existingUser);

  const user = await User.create({
    name: profile._json.name,
    email: profile._json.email,
  });

  done(null, user);
};

export const handleAuthCallback = (req, res) => {
  signSendToken(res, req.user._id);
  res.redirect("http://localhost:8000/");
};

export const protect = catchAsync(async (req, res, next) => {
  // 1. get the token and check if it's there
  const token = req.cookies.jwt;
  if (!token)
    return res.status(400).json({ message: "You are not authorized" });
  // 2. verify token
  const decoded = await verifyToken(token);
  // 3. If success, check if user still exists
  const freshUser = await User.findById(decoded.id);
  if (!freshUser)
    return res.status(400).json({ message: "User no longer exists" });

  req.user = freshUser;
  next();
});

export const restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(
        new AppError(`You don't have permission to perform this action`, 403)
      );

    next();
  };
