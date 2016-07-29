var orm = require('../config/orm.js');

var burger = {
	selectAll: function (cb) {
		orm.selectAll('burgers', function (data) {
			cb(data);
		});
	},

	insertBurger: function (col, burger_name, cb) {
		orm.insertBurger('burgers', cols, vals, function (data) {
			cb(data);
		});
	},

	updateBurger: function (col, burger_id, cb) {
		orm.updateBurger('burgers', burger_id, function (data) {
			cb(data);
		});
	}
};

module.exports = burger;
