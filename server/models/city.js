//引入模块
let mongoose = require("mongoose");
let Scheam = mongoose.Schema;

//创建新的数据模型
let cityDataScheam = new Scheam(
  {
    "cities":[
    {
      "id":Number,
      "spell":String,
      "name":String
    }
    ]
  }, {collection: 'city_data'});

//导出数据模型
module.exports = mongoose.model('CityData', cityDataScheam);
