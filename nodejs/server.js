const express = require('express');
var mysql = require('mysql');

// initialize the express framework
const app = express();

app.listen(8000, () => {
  console.log('Server started!');
});

// enable CORS
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

// database connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "exercise_mas"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected with phpMyAdmin!");
});


app.route('/api/users').get((req, res) => {
	
	con.query("SELECT * FROM user", function (err, result, fields) {
    if (err) {
		throw err;
	  } else {
		res.send(JSON.stringify({result}));
	  }
	});
});

app.route('/api/users/:userId').get((req, res) => {
	var id = req.params.userId;
	var sql = "SELECT * FROM user WHERE idUser=" +id;
	con.query(sql, function (err, result, fields) {
    if (err) {
		throw err;
	  } else {
		res.send(JSON.stringify({result}));
	  }
	});
});

app.route('/api/scenes/:sceneId').get((req, res) => {
	var sceneId = req.params.sceneId;
	var sql = "SELECT * FROM scene WHERE idScene=" +sceneId;
	con.query(sql, function (err, result, fields) {
    if (err) {
		throw err;
	  } else {
		res.send(JSON.stringify({result}));
	  }
	});
});

app.route('/api/scenes').get((req, res) => {
	var userId = req.query.id;
	var availFlag = req.query.available;
	var sql = "SELECT scene.idScene, scene.title, scene.vignette, userscene.available FROM scene JOIN userscene ON scene.idScene = userscene.idScene AND userscene.idUser=" + userId + " AND userscene.available=" + availFlag;
	con.query(sql, function (err, result, fields) {
    if (err) {
		throw err;
	  } else {
		res.send(JSON.stringify({result}));
	  }
	});
});