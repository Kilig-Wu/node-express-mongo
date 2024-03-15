import { NextFunction, Request, Response, Router } from "express";
import { loginService } from "../services/auth.service";
import { catchAsync } from "../helpers/common";

export const login = catchAsync(async (req: Request, res: Response) => {
  await loginService(req.body);
  res.sendResponse(null, "", 200);
});
