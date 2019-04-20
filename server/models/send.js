//引入模块
let mongoose = require("mongoose");
let Scheam = mongoose.Schema;

//创建新的数据模型
let sendScheam = new Scheam({
  "userName": String,
  "content": String,
  "time": String,
  "up": Number,
  "down": Number,
  "commentList": [{
    "commentUserName": String,
    "commentContent": String,
    "commentTime": String
  }]
}, {
  collection: 'send_data'
});

//导出数据模型
module.exports = mongoose.model('Send', sendScheam);
