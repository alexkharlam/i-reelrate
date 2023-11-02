import dotenv from "dotenv";

dotenv.config();

export default {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://reelrate.onrender.com/auth/google/callback",
  },
  github: {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "https://reelrate.onrender.com/auth/github/callback",
  },
};
