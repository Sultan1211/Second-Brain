import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserModel from "../db/user";
import bcrypt from "bcrypt";
import z from "zod";

const jwtSecret = process.env.JWT_SECRET as string;

const signInSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const signIn = async (req: Request, res: Response) => {
  const { success, data } = signInSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      msg: "Invalid Inputs",
    });
  }
  const existingUser: any = await UserModel.findOne({
    username: data?.username,
  });
  if (!existingUser) {
    return res.status(404).json({
      msg: "User not found",
    });
  }
  const isValidUser = await bcrypt.compare(
    data?.password,
    existingUser?.password,
  );
  if (!isValidUser) {
    return res.status(401).json({
      msg: "Invalid Password",
    });
  }
  const token = jwt.sign({ userId: existingUser?._id }, jwtSecret);

  return res.status(200).json({
    msg: "User logged in Successfully",
    token: token,
  });
};
