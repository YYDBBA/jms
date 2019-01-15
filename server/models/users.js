//引入模块
let mongoose = require("mongoose");
let Scheam = mongoose.Schema;

//创建新的数据模型
let userScheam = new Scheam({
  "id": String,
  "name": String,
  "age": String,
  "sendId": String,
  "sendName": String,
  "sendTop": String,
  "sendBottom": String
},{collection:'test'});

//导出数据模型
module.exports = mongoose.model('Users',userScheam);
