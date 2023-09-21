import express from "express";
import passport from "passport";
import { Strategy as GithubStrategy } from "passport-github";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import providersConfig from "../config/providersConfig.js";
import {
  handleAuthCallback,
  logoutUser,
  startAuth,
} from "../controllers/authController/authController.js";
import { signSendToken } from "../controllers/authController/jwtController.js";

const router = express.Router();

passport.use(new GoogleStrategy(providersConfig.google, startAuth));
passport.use(new GithubStrategy(providersConfig.github, startAuth));

router.get("/github", passport.authenticate("github"));

router.get(
  "/github/callback",
  passport.authenticate("github", { session: false }),
  handleAuthCallback
);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  handleAuthCallback
);

router.get("/logout", logoutUser);

router.get("/testAuth", (req, res) => {
  console.log("hey");
  signSendToken(res, {
    _id: "650874cb6c7d0b5f2c9b67dc",
    name: "Alex Kharlamov",
    email: "aakharlam@gmail.com",
    role: "user",
  });

  res.status(200).json({ status: "success" });
});

export default router;
