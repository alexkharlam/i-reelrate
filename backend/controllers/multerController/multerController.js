import multer from "multer";

import AppError from "../errorController/AppError.js";

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) cb(null, true);
  else cb(new AppError("Type of file should be image", 400));
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

export const addImageToBuffer = upload.single("file");
