import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    displayName: { type: String },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
