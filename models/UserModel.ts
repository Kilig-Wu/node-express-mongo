//导入 mongoose
import { Schema, model } from "mongoose";

//创建文档的结构对象
//设置集合中文档的属性以及属性值的类型
let UserSchema = new Schema({
  username: String,
  password: String,
  gender: Number,
});

//创建模型对象  对文档操作的封装对象
let UserModel = model("users", UserSchema);

//暴露模型对象
module.exports = UserModel;
