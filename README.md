# Node4ORDS

[![Analytics](https://ga-beacon.appspot.com/UA-59573016-4/node4ords/README.md?pixel)](https://github.com/igrigorik/ga-beacon)Simple node app to act as web listener to sit on top of Oracle Rest Data Services (ORDS) web container (such as Tomcat). This is an alternative to using an Apache web server.

This project was created as part of the Oracle XE / APEX VM install project: https://github.com/OraOpenSource/oraclexe-apex

*Please note this is still in beta and additional changes will be coming.*

#Install
```bash
git clone https://github.com/OraOpenSource/node4ords.git
cd ./node4ords
npm install --unsafe-perm
```

##Upgrade
Node4ORDS comes with a self updating script. If you have made any customizations to any file in the project be sure to back it up as this script will delete the folder. To run:

```bash
#Assuming that your app folder is in /var/www/node4ords
. /var/www/node4ords/update.sh
```

If you are missing `update.sh` it means you are running an older version of Node4ORDS. Please do a manual upgrade as described in [this post](http://www.oraopensource.com/blog/2015/4/18/node4ords-update).

# Config
The configuration for node4ords is stored in `config.js`. When installing Node4ORDS the first time this file will be created as a copy of [`defaultConfig.js`](defaultConfig.js).

The following is an explanation of all the settings

Setting | Required | Default | Description
--- | --- | --- | ---
`config.web.http` | | |  HTTP config container
`config.web.http.port` | optional | `80` |  Port for http connections
`config.web.https` | optional | | HTTPS config container
`config.web.https.enabled` | required | `false` | Set to `true` to enable HTTPS connections
`config.web.https.port` | optional | `443` |  Port for https connections
`config.web.https.keyPath` | required | | Full path to SSL private key _Required only if HTTPS is enabled_
`config.web.https.certPath` | required | | Full path to SSL certificate _Required only if HTTPS is enabled_
`config.web.https.forceHttps` | optional | `false` | If `true` then all HTTP connections will be redirected to HTTPS
`config.web.https.forceSSLPort` | optional | `config.web.https.port` | If `config.web.https.forceHttps` is enabled then this port will be used for the redirect. In most cases `443` (the default) is appropriate. A different port is usually only required if running Node4ORDS on a VM and doing port mapping that maps `443` to a different (local) port.
`config.ords` | | | ORDS config container
`config.ords.path` | required | | URL path for ORDS. Recommended `/ords`
`config.ords.redirectPaths` | optional | | Array of paths to redirect. Ex: `['/apex']` will redirect all references to `/apex` to path set in `config.ords.path`. Useful for older URLs that may have used `/apex` or other paths to access APEX applications.
`config.ords.webContainerUrl` | required | | local URL to Tomcat server. Most of the time this will be `http://localhost:8080`
`config.apex` | | | APEX config container
`config.apex.images` | required | | APEX images container
`config.apex.images.path` | required |  | URL Path to APEX images. Recommended `/i`
`config.apex.images.directory` | required |  | Path on file system where APEX images are located. Ex: `/ords/apex_images`
`config.static` | | | Static www files container
`config.static.path` | | | Path to access static www files. Ex `/public`
`config.static.directory` | | | Filesystem location of where www static files are stored. Ex: `/var/www/public`

#Run

```bash
node app.js
```

An example of how to start this app on boot can be found in the [Oraclexe-Apex](https://github.com/OraOpenSource/oraclexe-apex) project. Specifically the [init.d/node4ords](https://github.com/OraOpenSource/oraclexe-apex/blob/master/init.d/node4ords) file.

#Static files
Once installed a directory called `/var/www/public` will be created. Static files can be placed in there and referenced from your server via `//server_name/public/filename`. You can configure the location for static content in ```config.js```.

By default, the following folder structure will be created:
```bash
|-/public
	|-css
	|-img
	|-js
```
