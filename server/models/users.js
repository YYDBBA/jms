//引入模块
let mongoose = require("mongoose");
let Scheam = mongoose.Schema;

//创建新的数据模型
let userScheam = new Scheam({
  "token":String,
  "userId": String,
  "userHead": String,
  "userName": String,
  "userPwd": String,
  "userSex":String,
  "userEmail": String,
  "userBath": String,
  "userMajor": String,
  "userAddress":String,
  "userHometown":String,
  "userPersonal": String,
  "userHoppy":String,
  "userSignDayList": [
    {
      "signDay": String,
      "isSign": String
    }
  ],
  "userCareList": [
    {
      "userName": String,
      "userPersonal": String,
      "userHead": String
    }
  ],
  "userFriendList": [
    {
      "userName": String,
      "userPersonal": String,
      "userHead": String
    }
  ],
  "uploadPicList": [
    {
      "picId": String,
      "name": String
    }
  ],
  "uploadHeadList": [
    {
      "picId": String,
      "name": String
    }
  ],
  "chatList": [
    {
      "from": String,
      "to": String,
      "message": String,
      "liClass": String,
      "imgClass": String,
      "spanClass": String
    }
  ]
}, {collection: 'user_info'});

//导出数据模型
module.exports = mongoose.model('Users', userScheam);
