import { promisify } from "util";

import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const verifyToken = (token) =>
  promisify(jwt.verify)(token, process.env.JWT_SECRET);

export const signToken = (id) => {
  const secret = process.env.JWT_SECRET;
  const jwtExpiresIn = `${process.env.JWT_EXPIRES_IN}d`;

  const token = jwt.sign({ id }, secret, {
    expiresIn: jwtExpiresIn,
  });

  return token;
};

export const signSendToken = (res, userId) => {
  const token = signToken(userId);
  const cookieExpiresIn = new Date(
    Date.now() + process.env.JWT_EXPIRES_IN * 86400000
  );

  const cookieOptions = {
    expires: cookieExpiresIn,
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);
};
