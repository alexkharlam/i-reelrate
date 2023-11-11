import rateLimit from "express-rate-limit";

const security = (app) => {
  const limiter = rateLimit({
    max: 30,
    windowMs: 60 * 1000,
    message: "Too many requests from this ip. Please try again in a hour",
  });
  app.use("/api", limiter);
};

export default security;
