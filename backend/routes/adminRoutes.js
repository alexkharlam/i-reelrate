import express from "express";

import {
  getAllUsers,
  blockUser,
  unblockUser,
} from "../controllers/adminController.js";
import { protect, restrictTo } from "../controllers/authController.js";

const router = express.Router();

router.use(protect);
router.use(restrictTo("admin"));

router.get("/users", getAllUsers);
router.patch("/users/block/:userId", blockUser);
router.patch("/users/unblock/:userId", unblockUser);

export default router;
