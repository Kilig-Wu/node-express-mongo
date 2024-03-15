import { NextFunction, Request, Response, Router } from "express";

//格式化返回结果
const responseMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.sendResponse = (data: any = null, message: string, status = 200) => {
    res.status(status).json({
      code: status,
      success: true,
      message,
      data: data,
    });
    return res;
  };

  res.sendError = (message: string, status = 200) => {
    res.status(status).json({
      code: status,
      success: false,
      message,
    });
    return res;
  };

  next();
};

export default responseMiddleware;
