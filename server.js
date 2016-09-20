var http = require( 'http' );
var express = require( 'express' );
var fallback = require('express-history-api-fallback');
var path = require( 'path' );

var app = express();
var api = express();

var servePath = __dirname + '/dist';
app.use(express.static( servePath ));
app.use(fallback('index.html',{root:servePath}));
app.server = http.createServer(app);
api.server = http.createServer(api);
app.server.listen(8084);

api.get('/',function(req,res){
    res.send("Hello");
});

api.server.listen(8085);
console.log("Server started on " +  app.server.address().port + " port")
console.log("Api Server started on " +  api.server.address().port + " port")