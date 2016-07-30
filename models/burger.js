var orm = require('../config/orm.js');

var burger = {
	selectAll: function (cb) {
		orm.selectAll('burgers', function (data) {
			cb(data);
		});
	},

	insertOne: function (col, burger_name, cb) {
		orm.insertOne('burgers', col, burger_name, function (data) {
			cb(data);
		});
	},

	updateOne: function (col, burger_id, cb) {
		orm.updateOne('burgers', col, burger_id, function (data) {
			cb(data);
		});
	}
};

module.exports = burger;
