import Rate from "../../models/rateModel.js";
import Review from "../../models/reviewModel.js";
import catchAsync from "../../utils/catchAsync.js";
import AppError from "../errorController/AppError.js";

const calculateAverageRating = async (reviewId) => {
    const reviewRatings = await Rate.find({ review: reviewId });
    const totalRates = reviewRatings.length;

    if (totalRates === 0) return { averageRating: 0, totalRates: 0 };

    const sumRatings = reviewRatings.reduce(
        (sum, rating) => sum + rating.rating,
        0
    );
    const averageRating = sumRatings / totalRates;

    return { averageRating, totalRates };
};

export const updateReviewRating = async (reviewId) => {
    const { averageRating, totalRates } = await calculateAverageRating(
        reviewId
    );

    await Review.findByIdAndUpdate(reviewId, {
        rating: { value: averageRating, numRates: totalRates },
    });
};

export const deleteRating = catchAsync(async (req, res) => {
    const { reviewId } = req.params;

    await Rate.deleteOne({ review: reviewId });

    await updateReviewRating(reviewId);

    res.status(200).json({
        status: "success",
        data: null,
    });
});

export const createRating = catchAsync(async (req, res, next) => {
    const { reviewId: review } = req.params;
    const { rating } = req.body;

    const existingRate = await Rate.findOneAndUpdate(
        { review, user: req.user._id },
        { rating }
    );
    if (!existingRate)
        await Rate.create({ review, user: req.user._id, rating });

    await updateReviewRating(review);
    res.status(200).json({
        status: "success",
    });
});

export const getUsersRating = catchAsync(async (req, res, next) => {
    const { reviewId } = req.params;

    const usersRate = await Rate.findOne({
        review: reviewId,
        user: req.user._id,
    });

    res.status(200).json({
        rate: usersRate || null,
    });
});

export const getRating = catchAsync(async (req, res, next) => {
    const { reviewId } = req.params;

    const review = await Review.findById(reviewId);
    if (!review) return next(new AppError("Review does not exist", 400));

    res.status(200).json({
        rating: review.rating,
    });
});
