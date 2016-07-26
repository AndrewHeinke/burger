var express = require('express');
var router = express.Router();
var cat = require('../models/cat.js');

router.get('/', function (req, res) {
	res.redirect('/cats');
});

router.get('/cats', function (req, res) {
	cat.all(function (data) {
		var hbsObject = { cats: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/cats/create', function (req, res) {
	cat.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], function () {
		res.redirect('/cats');
	});
});

router.put('/cats/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

router.delete('/cats/delete/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	cat.delete(condition, function(data){
		res.redirect('/cats');
	});
});

cat.update({ sleepy: req.body.sleepy }, condition, function () {
		res.redirect('/cats');
	});
});

module.exports = router;
