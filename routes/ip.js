var express = require('express');
var router = express.Router();
var ip = require("ip");

/* GET users listing. */
router.get('/', function(req, res, next) {
	//console.dir ( ip.address() );
  res.send(ip.address());
});

module.exports = router;
