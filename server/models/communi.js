//引入模块
let mongoose = require("mongoose");
let Scheam = mongoose.Schema;

//创建新的数据模型
let comScheam = new Scheam([{
  "newOne": [{
    "id": Number,
    "name": String
  }],
  "newTwo": [{
    "id": Number,
    "name": String
  }],
  "newThree": [{
    "id": Number,
    "name": String
  }],
  "superList": [{
    "id": Number,
    "name": String
  }],
  "hotComment": [{
    "id": Number,
    "name": String
  }],
  "moreNew": [{
    "id": Number,
    "name": String
  }],
}], {
  collection: 'communi_data'
});

//导出数据模型
module.exports = mongoose.model('Com', comScheam);
