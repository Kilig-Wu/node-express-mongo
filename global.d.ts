//.d.ts文件中存在import那么里面的类型和模块就不能在全局使用了;原因就是只要存在import就会将这个文件视为模块,里面声明的类型什么的自然就不能被其他.d.ts 文件获取到了

// import { Response } from "express";
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

declare interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>;
}

// declare module "express" {
//   interface Response {
//     sendResponse: (data: any, message: string, status: number) => Response;
//     sendError: (message: string, status: number) => Response;
//   }
// }
