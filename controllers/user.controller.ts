import { NextFunction, Request, Response, Router } from "express";
import { createUserService } from "../services/user.service";
import { catchAsync } from "../utils";

export const createUser = catchAsync(async (req: Request, res: Response) => {
  await createUserService(req.body);
  res.sendResponse(null, "成功创建用户", 200);
});
