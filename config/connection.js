var mysql = require('mysql');

// jawsDB connection
// var connection = mysql.createConnection({
// 	port: 3306,
// 	host: 'izm96dhhnwr2ieg0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
// 	user: 'nbi0twjkzqrmccj1',
// 	password: 'tqhd5qyoo78rdtlt',
// 	database: 'f2ogomvr39hea64m'
// });

var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'burgers_db'
});


connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
