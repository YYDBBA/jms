let express = require('express');
let router = express.Router();
let HomeData = require('../models/homeData');

//拿到首页信息
router.get('/', (req, res, next) => {
  HomeData.find({}, (err, doc) => {
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

//拿到城市详情信息
router.get('/detail', (req, res, next)=> {
  let name = req.param("cityName");
  let cityDevide = req.param("devide");
  if(cityDevide === 'hotList'){
    HomeData.findOne({"hotList.cityName":name},{"hotList":true}, (err, doc) => {
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
          result: doc.hotList
        })
      }
    });
  }else if(cityDevide === 'forYouList') {
    HomeData.findOne({"forYouList.cityName":name},{"forYouList":true}, (err, doc) => {
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
          result: doc.forYouList
        })
      }
    });
  }else {
    HomeData.findOne({"tipList.cityName":name},{"tipList":true}, (err, doc) => {
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
          result: doc.tipList
        })
      }
    });
  }
});
module.exports = router;
