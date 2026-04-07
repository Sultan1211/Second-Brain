import mongoose from "mongoose";

const LinksSchema = new mongoose.Schema({
  hash: { type: String },
  userId: { type: mongoose.Types.ObjectId, ref: "User",unique:true },
});

const LinkModel = mongoose.model("Link", LinksSchema);

export default LinkModel;
