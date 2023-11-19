import express from "express";

import { protect } from "../controllers/authController.js";
import { addImageToBuffer } from "../controllers/multerController.js";
import {
  createReview,
  getReview,
  searchReviews,
  getReviews,
  deleteReview,
  getTopReview,
} from "../controllers/reviewController.js";

const router = express.Router();

router.get("/top-review", getTopReview);
router.get("/", getReviews);
router.post("/search", searchReviews);
router.get("/:id", getReview);

router.use(protect);

router.delete("/:id", deleteReview);
router.post("/", addImageToBuffer, createReview);

export default router;
