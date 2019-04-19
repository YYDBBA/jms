var express = require('express');
var router = express.Router();
let city = require('../models/city');

/* GET city. */
router.get('/', function(req, res, next) {
  city.findOne({},(err,doc)=>{
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
