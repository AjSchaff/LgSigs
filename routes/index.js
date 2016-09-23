var express = require('express');
var router = express.Router();
var _ = require('underscore');
var utils = require('./utilities.js');
var main = require('../mock/home.json');
var titles = require('../mock/titles.json');




router.get('/home', function(req, res){
	var template = { title: titles['main'] || ''};
	main = utils.jsonHelper(main);
	console.log(main);
	var obj = _.extend(template, main);
	res.render('test', obj);

});

module.exports = router;

