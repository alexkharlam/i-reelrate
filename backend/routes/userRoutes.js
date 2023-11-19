import express from "express";

import { protect, checkAuth } from "../controllers/authController.js";
import { deleteUser, getUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/checkAuth", checkAuth);

router.use(protect);

router.get("/", getUser);
router.delete("/deleteMe", deleteUser);

export default router;
