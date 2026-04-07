import { Request, Response } from "express";
import ContentModel from "../db/content";
import { randomHash } from "../utils/randomHash";
import LinkModel from "../db/links";

export const shareLink = async (req: any, res: Response) => {
  const { share } = req.body;

  if (share) {
    const link = await LinkModel.findOne({ userId: req.userId });
    if (link) {
      return res.status(400).json({
        msg: "Link already exists",
      });
    }
    const hash = randomHash(8);
    try {
      const newLink = await LinkModel.create({
        hash: hash,
        userId: req.userId,
      });
      return res.status(200).json({
        msg: "Link created successfully",
      });
    } catch (e) {
      return res.status(500).json({
        msg: "Link creation falied",
      });
    }
  } else {
    await LinkModel.deleteOne({
      userId: req.userId,
    });
    return res.status(201).json({
      msg: "Link removed successfully",
    });
  }
};
