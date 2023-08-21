import cookieParser from "cookie-parser";
import express from "express";

const expressHelpers = (app) => {
  app.use(express.json({ limit: "10kb" }));
  app.use(express.urlencoded({ extended: true, limit: "10kb" }));
  app.use(cookieParser());
};

export default expressHelpers;
