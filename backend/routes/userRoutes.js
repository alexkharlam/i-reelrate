import express from "express";

import { protect } from "../controllers/authController/authController.js";
import { getUser } from "../controllers/userController/userController.js";

const router = express.Router();

router.get("/getUser", protect, getUser);

export default router;
