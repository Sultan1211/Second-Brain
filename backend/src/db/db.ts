import mongoose from "mongoose";

export const connectDb = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/second-brain");
    console.log("Connected to mongoDb");
  } catch (err) {
    console.log("Mongo connection failed");
  }
};
