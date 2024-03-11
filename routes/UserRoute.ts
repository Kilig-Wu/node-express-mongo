import { NextFunction, Request, Response, Router } from "express";
import { login } from "../controllers/UserController";
const router = Router();

router.get("/login", login);

export default router;
