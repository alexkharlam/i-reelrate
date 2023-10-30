import express from "express";

import { protect } from "../controllers/authController/authController.js";
import {
  createComment,
  getComments,
  deleteComment,
} from "../controllers/commentController/commentController.js";

const router = express.Router({ mergeParams: true });

router.get("/:reviewId", getComments);
router.post("/:reviewId", protect, createComment);
router.delete("/:reviewId", protect, deleteComment);

export default router;
