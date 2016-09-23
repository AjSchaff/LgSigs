'use strict';

var express = require('express'),
		 exphbs = require('express-handlebars'),
	     home =  require('./mock/home.json');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.get('/', function (req, res){
	res.render('index');
});


app.get('/home', function(req, res){
	res.send(home);
})


app.listen(3000, function(){
	console.log(__dirname);
	console.log("The frontend server is running on port 3000!");
})
