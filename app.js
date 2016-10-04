'use strict';

var express = require('express'),
		exphbs = require('express-handlebars'),
 		home = require('./mock/logical_signals_homepage.json'),
 		path = require('path');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.get('/home', function (req, res){
	res.render('index', home);
});

var port = process.env.PORT || 3000;


app.listen(port, function(){
	console.log(__dirname);
	console.log("The frontend server is running on port 3000!");
})
