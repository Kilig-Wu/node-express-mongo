import { NextFunction, Request, Response, Router } from "express";
import { login } from "../controllers/auth.controller";
const router = Router();

router.get("/login", login);

export default router;