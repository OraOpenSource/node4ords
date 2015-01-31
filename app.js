var express = require('express');
var favicon = require('serve-favicon');
var proxy = require( 'http-proxy' ).createProxyServer({});
var http = require('http');
//var https = require('https');

var app = express();


var config = {
  ports : {
    http: process.env.PORT || '80',
    https: process.env.HTTPS_PORT || '443'
  },
  webContainerUrl : process.env.APEX_WEB_CONTAINER_URL || 'http://localhost:8080', // This is the link to tomcat or glassfish server
  apexImagesDir : process.env.APEX_IMAGES_DIR || '/ords/apex_images',
  faviconUrl : process.env.FAVICON_URL //Ex: '/public/favicon.ico'
}

//Uncomment if you don't want to redirect / and /apex to the new /ords
app.use('/apex',function(req, res, next){
  res.redirect('/ords');
});

//Can store custom images in public/...
app.use('/public', express.static(__dirname + '/public'));
app.use('/i',express.static(config.apexImagesDir));

//Register favicon if applicable
if (config.faviconUrl){
  console.log('Favicon')
  app.use(favicon(__dirname + config.faviconUrl));
}


app.use('/ords', function (req, res, next){
  proxy.web(req, res, { target: config.webContainerUrl + req.baseUrl});
});

// Make sure this is last as it will forward to APEX
app.use(function(req, res, next){
  res.redirect('/ords');
});



// app.listen(httpPort);
http.createServer(app).listen(config.ports.http);
//Enable once SSL cert defined
// https.createServer(options, app).listen(config.ports.https);
