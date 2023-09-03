import path from "path";

import compression from "compression";
import dotenv from "dotenv";
import express from "express";
import passport from "passport";

import errorHandler from "./controllers/errorController/errorController.js";
import connectDB from "./middleware/db.js";
import expressHelpers from "./middleware/expressHelpers.js";
import sanitization from "./middleware/sanitization.js";
import security from "./middleware/security.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
passport.initialize();

security(app);
expressHelpers(app);
sanitization(app);
app.use(compression());

app.use("/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Hello, world! In development");
  });
}

app.use(errorHandler);

connectDB().then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`🟢 Server is running on port ${port}`);
  });
});
