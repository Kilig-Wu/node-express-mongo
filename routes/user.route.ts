import { NextFunction, Request, Response, Router } from "express";
import validate from "@/middlewares/validate.middleware";
import { createUserValidate } from "@/validations/user.validation";
import { createUser } from "@/controllers/user.controller";
const router = Router();

router.route("/").post(validate(createUserValidate), createUser);

export default router;
