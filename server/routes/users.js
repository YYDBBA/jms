//1.引入需要的模块
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Users = require('../models/users');

//2.连接MongoDB数据库
mongoose.connect('mongodb://localhost/jms',{ useNewUrlParser: true });

//3.监听连接状态
//3.1连接成功
mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.");
});

//3.2连接失败
mongoose.connection.on("err", function () {
  console.log("MongoDB connected failed.");
});

//3.3断开连接
mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected");
});

//4.对数据库的操作
//4.1获取用户信息
router.get('/', (req, res, next)=> {
  Users.find({},(err,doc)=>{
    if(err){
      res.json({
        status:"1",
        msg:err.message,
        result:''
      })
    }else{
      res.json({
        status:"0",
        msg:'',
        result:{
          count:doc.length,
          list:doc
        }
      })
    }
  });
});

//4.2增加一个用户信息
router.post('/addUser',(req,res,next)=>{
  Users.create(req.body,(err1,doc1)=>{
    if(err1){
      res.json({
        status:"1",
        msg:err1.message,
        result:''
      })
    }else{
      res.json({
        status:"0",
        msg:'',
        result:{
          count:doc1.length,
          list:doc1
        }
      })
    }
  });
});

//4.3删除一个用户信息
router.post('/delUser',(req,res,next)=>{
  Users.deleteOne(req.body,(err2,doc2)=>{
    console.log(req.body);
    if(err2){
      res.json({
        status:"1",
        msg:err2.message,
        result:''
      })
    }else{
      res.json({
        status:"0",
        msg:'',
        result:{
          count:doc2.length,
          list:doc2
        }
      })
    }
  });
});

//4.4修改一个用户信息
router.post('/changeUser',(req,res,next)=>{
  let updataData = req.body;
  Users.updateOne({id:updataData.changeId},{$set:{
    name:updataData.changeName,
    age:updataData.changeAge,
    sendId:updataData.changeSendId,
    sendName:updataData.changeSendName,
    sendTop:updataData.changeSendTop,
    sendBottom:updataData.changeSendBottom
    }},(err3,doc3)=>{
    if(err3){
      res.json({
        status:"1",
        msg:err3.message,
        result:''
      })
    }else{
      res.json({
        status:"0",
        msg:'',
        result:{
          count:doc3.length,
          list:doc3
        }
      })
    }
  });
});

module.exports = router;
