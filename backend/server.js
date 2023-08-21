import path from "path";

import compression from "compression";
import dotenv from "dotenv";
import express from "express";

import errorHandler from "./controllers/errorController/errorController.js";
import connectDB from "./middleware/db.js";
import expressHelpers from "./middleware/expressHelpers.js";
import sanitization from "./middleware/sanitization.js";
import security from "./middleware/security.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

security(app);
expressHelpers(app);
sanitization(app);
app.use(compression());

app.use("/api/users", userRoutes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(errorHandler);

connectDB().then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`🟢 Server is running on port ${port}`);
  });
});
