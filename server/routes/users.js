//1.引入需要的模块
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let formidable = require('formidable');
let fs = require('fs');
let sd = require('silly-datetime');
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

//一.后台对数据库的操作
//4.1获取全部用户信息
router.get('/', (req, res, next) => {
  Users.countDocuments({}, (errId, docId) => {
    if (errId) {
      res.json({
        status: '1',
        msg: errId.message,
        result: ''
      })
    } else {
      let countId = docId;
      let page = parseInt(req.param("page"));
      let pageSize = parseInt(req.param("pageSize"));

      let skip = (page - 1) * pageSize;

      let params = {};
      let usersModel = Users.find(params).skip(skip).limit(pageSize);
      usersModel.exec((err, doc) => {
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
              list: doc,
              countId: countId
            }
          })
        }
      });
    }
  })
});


//4.2增加一个用户信息
router.post('/addUser', (req, res, next) => {
  Users.countDocuments({}, (errId, docId) => {
    if (errId) {
      res.json({
        status: '1',
        msg: errId.message,
        result: ''
      })
    } else {
      let newDoc = docId + 1;
      Users.create({
        userId: newDoc,
        userName: req.body.userName,
        userPwd: req.body.userPwd,
        userBath: req.body.userBath,
        userMajor: req.body.userMajor
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


//4.3删除一个用户信息
router.post('/delUser', (req, res, next) => {
  Users.deleteOne(req.body, (err2, doc2) => {
    if (err2) {
      res.json({
        status: "1",
        msg: err2.message,
        result: ''
      })
    } else {
      res.json({
        status: "0",
        msg: '删除成功',
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


//二.用户操作数据库
//5校验用户名是否注册过
router.post('/checkLogin', (req, res, next) => {
  let userName = req.body.userName;
  let userPwd = req.body.userPwd;
  Users.findOne({
    userName: userName,
    userPwd: userPwd
  }, (err, docLogin) => {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
        result: ''
      });
    } else {
      if (docLogin) {
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
  Users.countDocuments({}, (errId, docId) => {
    if (errId) {
      res.json({
        status: '1',
        msg: errId.message,
        result: ''
      })
    } else {
      let newDoc = docId + 1;
      Users.create({
        userId: newDoc,
        userName: req.body.userName,
        userPwd: req.body.userPwd
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

//7用户获取自身相关信息
router.get('/getPersonalInfo', (req, res, next) => {
  let userName = req.param('userName');
  Users.findOne({userName: userName}, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: '',
        result: ''
      });
    } else {
      res.json({
        status: '0',
        msg: '',
        result: doc
      });
    }
  });
});
//8用户上传图片

//8.1上传图片
router.post('/uploadPic', (req, res, next) => {
  let AVATAR_UPLOAD_FOLDER = '/avatar';
  //创建上传表单
  let form = new formidable.IncomingForm();
  //设置编码格式
  form.encoding = 'utf-8';
  //设置上传目录
  form.uploadDir = './server/public' + AVATAR_UPLOAD_FOLDER;
  //保留后缀
  form.keepExtensions = true;
  //文件大小
  form.maxFieldsSize = 2 * 1024 * 1024;
  form.parse(req, function (err, fields, files) {
    let filesFile = files.file;
    if (err) {
      return res.json({
        status: 500,
        msg: "内部服务器错误",
        result: ''
      })
    }
    // 限制文件大小 单位默认字节 这里限制大小为2m
    if (filesFile.size > form.maxFieldsSize) {
      fs.unlink(filesFile.path);
      return res.json({
        status: '1',
        msg: "图片大小不能超过2M",
        result: ''
      })
    }
    //后缀名
    let extName = '';
    switch (filesFile.type) {
      case 'image/pjpeg':
        extName = 'jpg';
        break;
      case 'image/jpeg':
        extName = 'jpg';
        break;
      case 'image/png':
        extName = 'png';
        break;
      case 'image/x-png':
        extName = 'png';
        break;
    }
    if (extName.length === 0) {
      return res.json({
        status: '1',
        msg: "只支持png和jpg格式图片",
        result: ''
      })
    }
    //使用第三方模块silly-datetime
    let t = sd.format(new Date(), 'YYYYMMDDHHmmss');
    //生成随机数
    let ran = parseInt(Math.random() * 8999 + 10000);
    // 生成新图片名称
    let avatarName = t + '_' + ran + '.' + extName;
    // 新图片路径
    let newPath = form.uploadDir + '/' + avatarName;
    // 更改名字和路径
    fs.rename(filesFile.path, newPath, function (err) {
      if (err) {
        return res.json({
          "code": 401,
          "message": "图片上传失败"
        })
      } else {
        return res.json({
          status: "0",
          msg: "图片上传成功",
          result: {
            data: avatarName
          }
        })
      }
    })
  })
});

//8.2将图片信息存在数据库里
router.post('/addPicInfo', (req, res, next) => {
  let name = req.body.picInfo;
  let userName = req.param('userName');
  Users.updateOne({userName: userName}, {
    $push: {
      uploadPicList: {name: name}
    }
  }, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: '',
        result: ''
      });
    } else {
      res.json({
        status: '0',
        msg: name,
        result: ''
      });
    }
  });
});

//9用户发表一条动态
router.post('/addNewSend', (req, res, next) => {

  let up = 0;
  let down = 0;
  let userHead = '' || 'default.jpg';
  Users.updateOne({userName: req.body.userName}, {
    $push: {
      sendList: {
        content: req.body.content,
        time: req.body.date,
        userName: req.body.userName,
        up: up,
        down: down,
        userHead: userHead
      }
    }
  }, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: '',
        result: ''
      });
    } else {
      res.json({
        status: '0',
        msg: '',
        result: ''
      });
    }
  });
});

//10用户删除一条动态
router.post('/delSend', (req, res, next) => {
  Users.updateOne({userName: req.body.userName}, {
    $pull:{
        sendList:{
          time:req.body.time
        }
    }
  }, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: '',
        result: ''
      });
    } else {
      res.json({
        status: '0',
        msg: '',
        result: ''
      });
    }
  });
});

module.exports = router;
