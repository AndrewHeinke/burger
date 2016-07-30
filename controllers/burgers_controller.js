var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.selectAll(function (data) {
		res.render('index', {burgers : data});
	});
});

router.post('/burgers/create', function (req, res) {
	burger.insertOne(['burger_name', 'devoured'], [req.body.name, 0], function() {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;
	burger.updateOne({'devoured' : 1}, condition, function(data) {
		res.redirect('/burgers');
	});
});

module.exports = router;
