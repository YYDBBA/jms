//引入模块
let mongoose = require("mongoose");
let Scheam = mongoose.Schema;

//创建新的数据模型
let homeDataScheam = new Scheam(
  {
    "hotList": [
      {
        "hotImg": String,
        "hotCount": Number,
        "cityName": String
      }
    ],
    "forYouList": [
      {
        "forYouImg": String,
        "forYouCount": Number
      }
    ],
    "tipList": [
      {
        "id": Number,
        "title": String,
        "tipBigImg": String,
        "tipImgList": [
          {
            "id": Number,
            "tipSmallImg": String
          }
        ],
        "tipContentCnaList": [
          {
            "id": Number,
            "content": String
          }
        ],
        "tipContentForList": [
          {
            "id": Number,
            "content": String
          }
        ]
      }
    ]
  }, {collection: 'home_data'});

//导出数据模型
module.exports = mongoose.model('HomeData', homeDataScheam);
