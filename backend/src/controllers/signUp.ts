import { success, z } from "zod";
import UserModel from "../db/user";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

const signUpSchema = z.object({
  username: z.string().min(6).max(18),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character",
    ),
});

export const signUp = async (req: Request, res: Response) => {
  try {
    const result = signUpSchema.safeParse(req.body);
console.log(success,"scc")
    if (!result.success) {
      return res.status(400).json({
        errors: result.error.format(),
      });
    }

    const { username, password } = result.data;

    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(409).json({
        msg: "User already Exists",
      });
    }
    const hasedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      username,
      password: hasedPassword,
    });

    return res.json({
      msg: "User added successfully!",
      user,
    });
  } catch {
    res.status(500).json({
      msg: "Couldn't sign-up",
    });
  }
};
