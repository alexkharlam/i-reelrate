import express from "express";

import { protect } from "../controllers/authController/authController.js";
import {
  deleteUser,
  getUser,
} from "../controllers/userController/userController.js";

const router = express.Router();

router.get("/", protect, getUser);
router.delete("/deleteMe", protect, deleteUser);

export default router;
