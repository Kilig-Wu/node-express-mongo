import { NextFunction, Request, Response, Router } from "express";
import { createUser } from "../controllers/user.controller";
import validate from "../middlewares/validate.middleware";
import { createUserValidate } from "../validations/user.validation";
const router = Router();

router.route("/").post(validate(createUserValidate), createUser);

export default router;
