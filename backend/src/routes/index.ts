import express from "express";
import {
  addContent,
  deleteDoc,
  fetchDocs,
  signIn,
  signUp,
} from "../controllers";
import { authMiddleware } from "../middlewares/auth-middleware";

const router = express.Router();

router.post("/auth/sign-up", signUp);
router.post("/auth/sign-in", signIn);
router.post("/add-content", authMiddleware, addContent);
router.get("/content", authMiddleware, fetchDocs);
router.delete("/content/:id", authMiddleware, deleteDoc);

export default router;
