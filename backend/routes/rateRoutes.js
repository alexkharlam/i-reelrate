import express from "express";

import { protect } from "../controllers/authController/authController.js";
import {
    createRating,
    getUsersRating,
    getRating,
    deleteRating,
} from "../controllers/rateController/rateController.js";

const router = express.Router();

router.post("/:reviewId", protect, createRating);
router.delete("/:reviewId", protect, deleteRating);
router.get("/:reviewId", getRating);

router.get("/getUserRate/:reviewId", protect, getUsersRating);
router.get("/getRating/:reviewId", getRating);

export default router;
