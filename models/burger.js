var orm = require('../config/orm.js');

var burger = {
	selectAll: function (cb) {
		orm.selectAll('burgers', function (res) {
			cb(res);
		});
	},

	insertBurger: function (cols, vals, cb) {
		orm.insertBurger('burgers', cols, vals, function (res) {
			cb(res);
		});
	},
	updateBurger: function (objColVals, condition, cb) {
		orm.updateBurger('burgers', objColVals, condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;
