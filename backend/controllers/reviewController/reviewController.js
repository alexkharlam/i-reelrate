import multer from "multer";

import ApiFeatures from "../../config/ApiFeatures.js";
import Review from "../../models/reviewModel.js";
import catchAsync from "../../utils/catchAsync.js";
import { uploadImageBuffer } from "../../utils/cloudinaryUpload.js";
import AppError from "../errorController/AppError.js";

const getSendReviews = async (req, res, queryFilter) => {
    const features = new ApiFeatures(Review.find(queryFilter), req.query)
        .sort()
        .limitFields()
        .paginate();
    const reviews = await features.query;

    res.status(200).json({
        status: "success",
        reviews,
    });
};

export const getAllReviews = catchAsync(async (req, res, next) => {
    const { category, user } = req.query;

    const queryFilter = {};
    if (category && category !== "all") queryFilter.category = category;

    if (user) queryFilter.user = user;

    await getSendReviews(req, res, queryFilter);
});

export const getUserReviews = catchAsync(async (req, res, next) => {
    const queryCategory =
        req.query.category === "all" ? "" : req.query.category;

    const queryFilter = queryCategory
        ? { category: queryCategory, user: req.user._id }
        : { user: req.user._id };

    await getSendReviews(req, res, queryFilter);
});

export const getReview = catchAsync(async (req, res, next) => {
    const review = await Review.findById(req.params.id);

    res.status(200).json({
        status: "success",
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

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) cb(null, true);
    else cb(new AppError("Type of file should be image", 400));
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

export const uploadUserPhoto = upload.single("file");
