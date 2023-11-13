import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();
const { NODE_ENV } = process.env;

const rateLimitOptions = {
  max: NODE_ENV === "production" ? 100 : 100000,
  message: "Too many requests from this ip. Please try again in a hour",
};

const security = (app) => {
  const limiter = rateLimit(rateLimitOptions);
  app.use("/api", limiter);
};

export default security;
