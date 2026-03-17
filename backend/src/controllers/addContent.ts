import { Request, Response } from "express";
import ContentModel from "../db/content";
import UserModel from "../db/user";

export const addContent = async (req: any, res: Response) => {
  const userId = req.userId;
  const user = await UserModel.findOne({ _id: userId });
  if (!user) {
    return res.status(404).json({
      msg: "User not found",
    });
  }
  const entry = await ContentModel.create({ userId: userId, ...req.body });

  return res.status(200).json({
    msg: "Content added Successfully",
    entry,
  });
};
