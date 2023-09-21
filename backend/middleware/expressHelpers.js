import cookieParser from "cookie-parser";
import express from "express";

const expressHelpers = (app) => {
  app.use(express.json({ limit: "3000kb" }));
  app.use(express.urlencoded({ extended: true, limit: "3000kb" }));
  app.use(cookieParser());
};

export default expressHelpers;
