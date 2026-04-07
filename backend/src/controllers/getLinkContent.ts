import { Response } from "express";
import LinkModel from "../db/links";
import ContentModel from "../db/content";
import UserModel from "../db/user";

export const getLinkContent = async (req: any, res: Response) => {
  const hash = req.params.shareLink;
  const link = await LinkModel.findOne({
    hash,
  });
  if (!link) {
    return res.status(411).json({
      msg: "Incorrect Share link",
    });
  }
  const content = await ContentModel.find({ userId: link.userId });
  if (!content) {
    return res.status(411).json({
      msg: "No content found",
    });
  }
  const user = await UserModel.findOne({
    _id: link.userId,
  });
  return res.status(200).json({
    username: user?.username,
    msg: "Here is the Content",
    content,
  });
};
