
var express  = require('express')
  , quote    = require('./quoteFile/citazioni').quote
  , app      = express(); 								

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 	
	app.use(express.logger('dev')); 					
	app.use(express.bodyParser()); 						
	app.use(express.methodOverride()); 					
});

app.get('/api/quote', function(req, res){
	res.send(200, quote)
})

app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
});

app.listen(8080);
