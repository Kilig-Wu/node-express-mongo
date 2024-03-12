import { NextFunction, Request, Response, Router } from "express";
import { createUserService } from "../services/user.service";
import { catchAsync } from "../utils";

export const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = await createUserService(req.body);
  res.status(200).send(user);
});
