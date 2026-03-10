import express from "express";
import UserModel from "./db/user";
import router from "./routes";

const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(3000);
