import express from "express";

import { protect } from "../controllers/authController/authController.js";
import { addImageToBuffer } from "../controllers/multerController/multerController.js";
import {
  createReview,
  getReview,
  searchReviews,
  getReviews,
  deleteReview,
} from "../controllers/reviewController/reviewController.js";

import commentRoutes from "./commentRoutes.js";

const router = express.Router();

router.get("/", getReviews);
router.delete("/:id", protect, deleteReview);
router.post("/search", searchReviews);
router.get("/:id", getReview);
router.post("/", protect, addImageToBuffer, createReview);

router.use("/:reviewId/comments", commentRoutes);

export default router;
