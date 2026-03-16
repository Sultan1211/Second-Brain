import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const jwt_secret = process.env.JWT_SECRET as string;
export const authMiddleware = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  const header = req.headers.authorization;

  const token = header?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      msg: "Token is missing",
    });
  }
  try {
    const decoded = jwt.verify(token, jwt_secret) as JwtPayload;
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(400).json({
      msg: "Invalid token",
    });
  }
};
