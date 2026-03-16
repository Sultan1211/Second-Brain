import express from "express";
import { addContent, fetchDocs, signIn, signUp } from "../controllers";
import { authMiddleware } from "../middlewares/auth-middleware";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.post("/add-content", authMiddleware, addContent);
router.get("fetch-docs", authMiddleware, fetchDocs);

export default router;
