let express = require('express');
let router = express.Router();
let HomeData = require('../models/homeData');

/* GET home page. */
router.get('/', (req, res, next)=> {
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

module.exports = router;
