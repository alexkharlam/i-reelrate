import express from "express";

import { protect } from "../controllers/authController.js";
import {
  createRating,
  getUsersRating,
  getRating,
  deleteRating,
} from "../controllers/rateController.js";

const router = express.Router();

router.get("/:reviewId", getRating);

router.use(protect);

router.post("/:reviewId", createRating);
router.delete("/:reviewId", deleteRating);
router.get("/getUserRate/:reviewId", getUsersRating);

export default router;
