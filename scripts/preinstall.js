//Create public directory as a starting point for static files
var fs = require('fs');
var dir = './public';

if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

var
subDirs = ['js','img', 'css'],
subDir;

for (i=0; i < subDirs.length; i++){
  subDir = dir + '/' + subDirs[i];
  if (!fs.existsSync(subDir)){
    fs.mkdirSync(subDir);
  }

}
