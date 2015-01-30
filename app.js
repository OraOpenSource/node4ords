var express = require('express');
var favicon = require('serve-favicon');
var proxy   = require( 'http-proxy' ).createProxyServer({});
var http = require('http');
//var https = require('https');

var httpPort = process.env.PORT || '80';
var httpsPort = process.env.HTTPS || '443';

var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

//Uncomment if you don't want to redirect / and /apex to the new /ords
app.use('/apex',function(req, res, next){
  res.redirect('/ords');
});

//Can store custom images in public/...
app.use('/public',express.static(__dirname + '/public'));
app.use('/i',express.static('/usr/share/apache-tomcat-7.0.57/webapps/i/'));

app.use( ['/ords','/itodo'], function (req, res, next){
  //Will only use /i/ from tomcat if app.use('/i') is commented out above
  proxy.web(req, res, { target: 'http://localhost:8080' + req.baseUrl});
});

//Make sure this is last as it will forward to APEX
app.use(function(req, res, next){
  res.redirect('/ords');
});


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });


//module.exports = app;
// app.listen(httpPort);
http.createServer(app).listen(80);
//Enable once SSL cert defined
// https.createServer(options, app).listen(443);
