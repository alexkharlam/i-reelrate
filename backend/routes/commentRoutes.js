import express from "express";

import { protect } from "../controllers/authController.js";
import {
  createComment,
  getComments,
  deleteComment,
} from "../controllers/commentController.js";

const router = express.Router({ mergeParams: true });

router.get("/:reviewId", getComments);

router.use(protect);

router.post("/:reviewId", createComment);
router.delete("/:reviewId", deleteComment);

export default router;
