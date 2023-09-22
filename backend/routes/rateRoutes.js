import express from "express";

import { protect } from "../controllers/authController/authController.js";
import {
  createRating,
  getUsersRating,
  getRating,
} from "../controllers/rateController/rateController.js";

const router = express.Router();

router.post("/:reviewId", protect, createRating);
router.get("/getUserRate/:reviewId", protect, getUsersRating);
router.get("/getRating/:reviewId", protect, getRating);

export default router;
