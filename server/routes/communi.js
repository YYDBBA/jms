var express = require('express');
var router = express.Router();
let Com = require('../models/communi');

/* GET com. */
router.get('/', function(req, res, next) {
  Com.findOne({},(err,doc)=>{
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
