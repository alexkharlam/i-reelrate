import express from "express";
import passport from "passport";
import { Strategy as GithubStrategy } from "passport-github";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import providersConfig from "../config/providersConfig.js";
import {
  handleAuthCallback,
  logoutUser,
  startAuth,
} from "../controllers/authController.js";

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

export default router;
