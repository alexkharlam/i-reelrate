import express from "express";

import { protect } from "../controllers/authController.js";
import {
  createLike,
  getLike,
  deleteLike,
} from "../controllers/likeController.js";
import { getLikedReviews } from "../controllers/reviewController.js";

const router = express.Router();

router.use(protect);

router.get("/", getLikedReviews);
router.post("/:reviewId", createLike);
router.get("/:reviewId", getLike);
router.delete("/:reviewId", deleteLike);

export default router;
