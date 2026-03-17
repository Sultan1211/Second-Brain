import { Request, Response } from "express";
import ContentModel from "../db/content";

export const fetchDocs = async (req: any, res: Response) => {
  const userId = req.userId;
  const docs = await ContentModel.find({ userId: userId });
  res.status(200).json({
    msg: "Sending the records for the user",
    docs,
  });
};
