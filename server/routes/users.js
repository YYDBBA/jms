//1.引入需要的模块
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Users = require('../models/users');

//2.连接MongoDB数据库
mongoose.connect('mongodb://localhost/jms', {useNewUrlParser: true});

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
router.get('/', (req, res, next) => {
  Users.find({}, (err, doc) => {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: "0",
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  });
});


//4.2增加一个用户信息
router.post('/addUser', (req, res, next) => {
  Users.create(req.body, (err1, doc1) => {
    if (err1) {
      res.json({
        status: "1",
        msg: err1.message,
        result: ''
      })
    } else {
      res.json({
        status: "0",
        msg: '',
        result: {
          count: doc1.length,
          list: doc1
        }
      })
    }
  });
});


//4.3删除一个用户信息
router.post('/delUser', (req, res, next) => {
  Users.deleteOne(req.body, (err2, doc2) => {
    console.log(req.body);
    if (err2) {
      res.json({
        status: "1",
        msg: err2.message,
        result: ''
      })
    } else {
      res.json({
        status: "0",
        msg: '',
        result: {
          count: doc2.length,
          list: doc2
        }
      })
    }
  });
});


//4.4修改一个用户信息
router.post('/changeUser', (req, res, next) => {
  let updataData = req.body;
  Users.updateOne({id: updataData.changeId}, {
    $set: {
      name: updataData.changeName,
      age: updataData.changeAge,
      sendId: updataData.changeSendId,
      sendName: updataData.changeSendName,
      sendTop: updataData.changeSendTop,
      sendBottom: updataData.changeSendBottom
    }
  }, (err3, doc3) => {
    if (err3) {
      res.json({
        status: "1",
        msg: err3.message,
        result: ''
      })
    } else {
      res.json({
        status: "0",
        msg: '',
        result: {
          count: doc3.length,
          list: doc3
        }
      })
    }
  });
});


//5.登录
//5.1校验用户名是否注册过
router.post('/checkLogin', (req, res, next) => {
  let userName = req.body.userName;
  let userPwd = req.body.userPwd;
  Users.findOne({
    userName: userName,
    userPwd:userPwd
  }, (err, docLogin) => {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
        result: ''
      });
    } else {
      if (docLogin) {
        res.cookie("userName",docLogin.userName,{
          path:'/',
          maxAge:1000*60*60
        });
        res.json({
          status: "0",
          msg: '该用户已经存在！',
          result: ''
        });
      } else {
        res.json({
          status: "0",
          msg: '该用户不存在',
          result: ''
        });
      }
    }
  })
});


//5.2注销登录
router.post('/canelLogin',(req,res,next)=>{
  res.cookie("userName","",{
    path:'/',
    maxAge:-1
  });
  res.json({
    status: "0",
    msg: '',
    result: ''
  });
});


//6.注册
//6.1校验用户名是否注册过
router.post('/checkRegister', (req, res, next) => {
  let userName = req.body.userName;
  Users.findOne({userName: userName}, (err, doc) => {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
        result: ''
      });
    } else {
      if (doc) {
        res.json({
          status: "0",
          msg: '该用户已经存在！',
          result: ''
        });
      } else {
        res.json({
          status: "0",
          msg: '该用户不存在',
          result: ''
        });
      }
    }
  })
});


//6.2用户不存在则添加一条用户信息
router.post('/addRegister', (req, res, next) => {
  Users.countDocuments({},(errId,docId)=>{
    if(errId){
      res.json({
        status:'1',
        msg: errId.message,
        result:''
      })
    }else {
      let newDoc = docId + 1;
      Users.create({
        userId:newDoc,
        userName:req.body.userName,
        userPwd:req.body.userPwd
      }, (err1, doc1) => {
        if (err1) {
          res.json({
            status: "1",
            msg: err1.message,
            result: ''
          })
        } else {
          res.json({
            status: "0",
            msg: '创建成功',
            result: ''
          })
        }
      });
    }
  })
});

module.exports = router;
