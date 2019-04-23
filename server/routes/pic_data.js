var express = require('express');
var router = express.Router();
let Pic = require('../models/pic_data');

/* GET Pic. */
router.get('/', function (req, res, next) {
  Pic.countDocuments({}, (errId, docId) => {
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
      console.log(page);
      console.log(pageSize);
      let picModel = Pic.find({}).skip(skip).limit(pageSize);
      picModel.exec((err, doc) => {
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
            result: {
              list:doc,
              count:countId
            }
          })
        }
      })
    }
  });
})

module.exports = router;
