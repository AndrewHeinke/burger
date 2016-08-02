var mysql = require('mysql');

// jawsDB connection
var connection = mysql.createConnection({
	port: 3306,
	host: 'nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'u2us7ddqq1oezg4y',
	password: 'udo9h3eb6korx3fu',
	database: 'pmze78whxym9deaf'
});

// local connection
// var connection = mysql.createConnection({
// 	port: 3306,
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'burgers_db'
// });

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
