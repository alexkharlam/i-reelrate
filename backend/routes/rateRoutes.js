import express from "express";

import { protect } from "../controllers/authController/authController.js";

import {
  createRating,
  getUsersRating,
} from "../controllers/rateController/rateController.js";

const router = express.Router();

router.post("/:reviewId", protect, createRating);
router.get("/:reviewId/userRate", protect, getUsersRating);

export default router;
