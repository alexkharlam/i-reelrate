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
    signSendToken(res, req.user);

    const userParam = encodeURIComponent(
        JSON.stringify({
            name: req.user.name,
            email: req.user.email,
            photo: req.user.photo,
            _id: req.user._id,
        })
    );
    res.redirect(`http://reelrate.site?user=${userParam}`);
};

export const protect = catchAsync(async (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) return next(new AppError("You are not authorized", 401));

    const decoded = await verifyToken(token);

    const freshUser = await User.findById(decoded.id);

    if (!freshUser) return next(new AppError("User not found", 401));

    req.user = freshUser;
    next();
});

export const restrictTo =
    (...roles) =>
    (req, res, next) => {
        if (!roles.includes(req.user.role))
            return next(
                new AppError(
                    `You don't have permission to perform this action`,
                    403
                )
            );

        next();
    };

export const logoutUser = (req, res, next) => {
    res.cookie("jwt", "loggedout", {
        expires: new Date(Date.now() + 1000),
        httpOnly: true,
    });
    res.status(200).json({
        status: "success",
    });
};
