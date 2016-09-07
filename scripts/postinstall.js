var fs = require('fs-extra')
var path = require('path')
var files = {
  config: path.resolve(__dirname, '../config.js'),
  deafultConfig: path.resolve(__dirname, '../defaultConfig.js')
}

// #27 Copy defaultConfig to config
try {
  fs.accessSync(files.config);
  // Config file exists, nothing to do here
  console.log('Exists');
} catch (e) {
  console.log('Config does not exist. Creating');
  fs.copySync(files.deafultConfig, files.config);
}
