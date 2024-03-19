import { NextFunction, Request, Response, Router } from "express";
import validate from "@/middlewares/validate.middleware";
import { loginValidate } from "@/validations/auth.validation";
import { login } from "@/controllers/auth.controller";
const router = Router();

router.get("/login", validate(loginValidate), login);

export default router;
