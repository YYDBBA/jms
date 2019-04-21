var express = require('express');
var router = express.Router();
let Pic = require('../models/pic_data');

/* GET Pic. */
router.get('/', function(req, res, next) {
  Pic.findOne({},(err,doc)=>{
    if(err){
      res.json({
        status:'1',
        msg:'',
        result:""
      })
    }else {
      res.json({
        status:'0',
        msg:'',
        result:doc
      })
    }
  })
});

module.exports = router;
