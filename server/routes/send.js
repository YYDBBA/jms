var express = require('express');
var router = express.Router();
let Send = require('../models/send');

/* GET send */
//1用户获取自身的发表信息
router.get('/', function (req, res, next) {
  Send.find({
    userName: req.param("userName")
  }, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: '',
        result: ""
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: doc
      })
    }
  })
});

//2用户发表一条动态
router.post('/addNewSend', (req, res, next) => {
  let up = 0;
  let down = 0;
  let userHead = '' || 'default.jpg';
  Send.create({
    userName: req.body.userName,
    content: req.body.content,
    time: req.body.date,
    userName: req.body.userName,
    up: up,
    down: down,
    userHead: userHead
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

//3用户发表评论
router.post('/sendComment', (req, res, next) => {

  Send.updateOne({
    userName: req.body.userName,
    time:req.body.time
  }, {
    $push: {
      commentList: {
        commentContent: req.body.commentContent,
        commentTime: req.body.commentTime,
        commentUserName: req.body.commentUserName
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

//4用户点赞，点low
router.post('/upDown', (req, res, next) => {
  let flag = req.body.flag;
  if (flag === '1') {
    let up = parseInt(req.body.up) + 1;
    Send.updateOne({
      userName: req.body.userName
    }, {
      $set: {
        up: up
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
  }
});

//5用户删除一条动态
router.post('/delSend', (req, res, next) => {
  Send.deleteOne({
    userName: req.body.userName,
    time: req.body.time
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

//6用户获取关注的所有用户的发表信息
router.get('/allSend', (req, res, next) => {
  let a = req.param("list");
  Send.find({$or:JSON.parse(a)}, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: '',
        result: ""
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: doc
      })
    }
  })
});

module.exports = router;
