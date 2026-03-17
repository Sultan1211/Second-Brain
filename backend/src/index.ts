import dotenv from "dotenv";
dotenv.config();

import express from "express";
import UserModel from "./db/user";
import router from "./routes";
import { connectDb } from "./db/db";

const app = express();

connectDb();

app.use(express.json());

app.use("/api", router);

app.listen(3000);
