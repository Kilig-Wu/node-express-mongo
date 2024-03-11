import { NextFunction, Request, Response, Router } from "express";
import { loginService } from "../services/UserService";

export const login = async (req: Request, res: Response) => {
  await loginService(req.body);
  res.json({
    code: 200,
  });
};
