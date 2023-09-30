import express from "express";

import { protect } from "../controllers/authController/authController.js";
import {
  createComment,
  getComments,
} from "../controllers/commentController/commentController.js";

const router = express.Router({ mergeParams: true });

router.get("/", protect, getComments);
router.post("/", protect, createComment);

export default router;
