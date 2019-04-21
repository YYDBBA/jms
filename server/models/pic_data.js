//引入模块
let mongoose = require("mongoose");
let Scheam = mongoose.Schema;

//创建新的数据模型
let picScheam = new Scheam(
  {
    "pic":[{
      "id":Number,
      "width":String,
      "height":String,
      "img":String,
      "des":String,
      "name":String
    }]
  }, {collection: 'pic_data'});

//导出数据模型
module.exports = mongoose.model('Pic', picScheam);
