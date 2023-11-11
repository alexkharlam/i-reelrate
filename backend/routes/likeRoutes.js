import express from "express";

import { protect } from "../controllers/authController/authController.js";
import {
  createLike,
  getLike,
  deleteLike,
} from "../controllers/likeController/likeController.js";
import { getLikedReviews } from "../controllers/reviewController/reviewController.js";

const router = express.Router();

router.use(protect);

router.get("/", getLikedReviews);
router.post("/:reviewId", createLike);
router.get("/:reviewId", getLike);
router.delete("/:reviewId", deleteLike);

export default router;
