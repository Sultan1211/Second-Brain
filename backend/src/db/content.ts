import mongoose, { Mongoose } from "mongoose";

const ContentSchema = new mongoose.Schema(
  {
    title: { type: String },
    type: { type: String },
    link: { type: String },
    tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

const ContentModel = mongoose.model("Content", ContentSchema);

export default ContentModel;
