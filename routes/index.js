var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get("/chat/",function(req,res){
	res.render('chat',{title:"Chat"});
});

router.get('/registrate/', function(req, res) {
  res.render('registrate', { title: 'Express' });
});

router.get("/saladechat", function(req,res){
	res.render("saladechat",{title:"Sala"});
});

module.exports = router;