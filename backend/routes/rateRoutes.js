import express from "express";

import { protect } from "../controllers/authController/authController.js";
import {
  createRating,
  getUsersRating,
  getRating,
} from "../controllers/rateController/rateController.js";

const router = express.Router();

router.post("/:reviewId", protect, createRating);
router.get("/:reviewId/userRate", protect, getUsersRating);
router.get("/:reviewId", protect, getRating);

export default router;
