import express from "express";

import {
  protect,
  checkAuth,
  restrictTo,
} from "../controllers/authController/authController.js";
import {
  deleteUser,
  getUser,
} from "../controllers/userController/userController.js";

const router = express.Router();

router.get("/checkAuth", checkAuth);
router.get("/", protect, getUser);
router.delete("/deleteMe", protect, deleteUser);

router.use(protect);
router.use(restrictTo("admin"));

export default router;
