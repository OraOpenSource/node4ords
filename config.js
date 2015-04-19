//Idea taken from: http://stackoverflow.com/questions/5869216/how-to-store-node-js-deployment-settings-configuration-files
var config = {};


//Web connection info
config.web = {}
config.web.http = {};
config.web.http.port = process.env.PORT || '80';
//For issue #2 (SSL support). Additional configs will probably be required
// config.web.https = {};
// config.web.https.port = process.env.PORT || '443';

//TODO make this handle multiple instances of ORDS (i.e. put each of these in an array)
//ORDS info
config.ords = {};
config.ords.path = '/ords';
config.ords.redirectPaths = ['/apex']; //array of paths to redirect to config.ords.path. Useful for backwards compatibility with /apex
config.ords.webContainerUrl = 'http://localhost:8080'; // This is the link to tomcat or glassfish server

//APEX info
config.apex = {};
config.apex.images = {};
config.apex.images.path = '/i';
config.apex.images.directory = '/ords/apex_images';

//Static file info
config.static = {}
config.static.path = '/public'; //URL path
// Old (pre #13) config.static.directory = __dirname + '/public'; //Filesystem directory
config.static.directory = '/var/www/public'; //Filesystem directory



module.exports = config;
