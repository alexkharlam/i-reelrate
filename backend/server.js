import path from "path";

import { v2 as cloudinary } from "cloudinary";
import compression from "compression";
// TODO: DELETE CORS
/*eslint-disable*/
import cors from "cors";
/*eslint-enable*/

import dotenv from "dotenv";
import express from "express";
import passport from "passport";

import errorHandler from "./controllers/errorController/errorController.js";
import connectDB from "./middleware/db.js";
import expressHelpers from "./middleware/expressHelpers.js";
import sanitization from "./middleware/sanitization.js";
import security from "./middleware/security.js";
import authRoutes from "./routes/authRoutes.js";
import rateRoutes from "./routes/rateRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// TODO: DELETE CORS
app.use(cors({ origin: "http://localhost:8000" }));
// TODO:

passport.initialize();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

security(app);
expressHelpers(app);
sanitization(app);
app.use(compression());

app.use("/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/rates", rateRoutes);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
);

// else {
//   app.get("/", (req, res) => {
//     res.send("Hello, world! In development");
//   });
// }

app.use(errorHandler);

connectDB().then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`🟢 Server is running on port ${port}`);
  });
});
