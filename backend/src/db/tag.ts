import mongoose from "mongoose";

const TagSchema = new mongoose.Schema({
  title: { type: String, unique: true },
});

const TagModel = mongoose.model("Tag", TagSchema);

export default TagModel;
