// The O.R.M., Functions that take inputs and conditions and turn them into database commands like SQL
var connection = require('../config/connection.js');

var orm = {
	selectAll: function(table, cb) {
		connection.query("Select * FROM " + table, function(err, data) {
			if (err) throw err;
			cd(data);
		});
	},
	insertBurger: function(table, col, burger_name, cb) {
		connection.query("INSERT INTO " + table + "(" + col + ")" + "VALUES (?)", [burger_name], function(err, data) {
			if (err) throw err;
			cb(data);
		});
	},
	updateBurger: function(table, col, burger_id, cb) {
		connection.query("DELETE FROM " + table + " WHERE id=" + burger_id, function(err, data) {
			if (err) throw err;
			cb(data);
		});
	}

};

module.exports = orm;
