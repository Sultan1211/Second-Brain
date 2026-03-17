import { Response } from "express";
import ContentModel from "../db/content";

export const deleteDoc = async (req: any, res: Response) => {
  const userId = req.userId;
  const { id } = req.params;
  const deleted = await ContentModel.deleteOne({ _id: id, userId: userId });
  if (deleted.deletedCount === 0) {
    return res.status(404).json({
      msg: "Document not found",
    });
  }
  return res.status(200).json({
    msg: "Deleted successfully",
  });
};
