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
      message: message || "请求成功",
      data: data,
    });
    return res;
  };

  res.sendError = (message: string, status = 200) => {
    res.status(status).json({
      code: status,
      success: false,
      message: message || "服务器错误",
    });
    return res;
  };

  next();
};

export default responseMiddleware;
