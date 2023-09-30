import express from "express";

import { protect } from "../controllers/authController/authController.js";
import {
  createReview,
  getReview,
  getAllReviews,
  uploadUserPhoto,
  searchReviews,
  getUserReviews,
} from "../controllers/reviewController/reviewController.js";

import commentRoutes from "./commentRoutes.js";

const router = express.Router();

router.get("/user", protect, getUserReviews);
router.post("/search", searchReviews);
router.get("/:id", getReview);
router.get("/", getAllReviews);
router.post("/", protect, uploadUserPhoto, createReview);

router.use("/:reviewId/comments", commentRoutes);

// TEST

export default router;
