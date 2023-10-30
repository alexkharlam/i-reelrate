import express from "express";

import { protect } from "../controllers/authController/authController.js";
import {
  createLike,
  getLike,
  deleteLike,
  getLikedReviews,
} from "../controllers/likeController/likeController.js";

const router = express.Router();

router.use(protect);

router.get("/", getLikedReviews);
router.post("/:reviewId", createLike);
router.get("/:reviewId", getLike);
router.delete("/:reviewId", deleteLike);

export default router;
