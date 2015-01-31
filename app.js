var express = require('express');
var favicon = require('serve-favicon');
var proxy = require( 'http-proxy' ).createProxyServer({});
var http = require('http');
//var https = require('https');

var ports = {
  http: process.env.PORT || '80',
  https: process.env.PORT || '443'
}

var tomcatUrl = 'http://localhost:8080';
var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

//Uncomment if you don't want to redirect / and /apex to the new /ords
app.use('/apex',function(req, res, next){
  res.redirect('/ords');
});

//Can store custom images in public/...
app.use('/public', express.static(__dirname + '/public'));
app.use('/i',express.static('/usr/share/apache-tomcat-7.0.57/webapps/i/'));

app.use('/ords', function (req, res, next){
  proxy.web(req, res, { target: tomcatUrl + req.baseUrl});
});

// Make sure this is last as it will forward to APEX
app.use(function(req, res, next){
  res.redirect('/ords');
});



// app.listen(httpPort);
http.createServer(app).listen(ports.http);
//Enable once SSL cert defined
// https.createServer(options, app).listen(ports.https);
