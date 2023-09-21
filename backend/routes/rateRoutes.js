import express from "express";

import { protect } from "../controllers/authController/authController.js";
import {
  createRating,
  getRating,
  getUsersRating,
} from "../controllers/rateController/RateController.js";

const router = express.Router();

router.post("/:reviewId", protect, createRating);
router.get("/:reviewid", protect, getRating);
router.get("/:reviewId/userRate", protect, getUsersRating);

export default router;
