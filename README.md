# Node4ORDS

[![Analytics](https://ga-beacon.appspot.com/UA-59573016-4/node4ords/README.md?pixel)](https://github.com/igrigorik/ga-beacon)Simple node app to act as web listener to sit on top of Oracle Rest Data Services (ORDS) web container (such as Tomcat). This is an alternative to using an Apache web server.

This project was created as part of the Oracle XE / APEX VM install project: https://github.com/OraOpenSource/oraclexe-apex

*Please note this is still in beta and additional changes will be coming.*

# Install
```bash
git clone https://github.com/OraOpenSource/node4ords.git
cd ./node4ords
npm install --unsafe-perm
```

## Upgrade

To upgrade simply run

```bash
git pull
npm install --unsafe-perm
```

Check the latest docs to see if additional configuration options are available. Existing `config.js` files will not be modified

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
`config.web.https.keyPath` | required | | Full path to SSL private key. _Required only if HTTPS is enabled_. Ex: `/tmp/certs/domain.key`
`config.web.https.certPath` | required | | Full path to SSL certificate. _Required only if HTTPS is enabled_. Ex: `/tmp/certs/domain.crt`
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

# Run

```bash
node app.js
```

To start Node4ORDS as an system process it's recommended to use [PM2](http://pm2.keymetrics.io/).  The following script demonstrates how to install PM2 and run Node4ORDS.

```bash
npm install pm2 -g

# Go to the directory that Node4ORDS is installed in or reference the full path
pm2 start app.js --name="node4ords" --watch

# To have it run on boot:
# pm2 startup <os type>. Ex pm2 startup redhat

# Save current setup
pm2 save
```

# Static files
Once installed a directory called `/var/www/public` will be created. Static files can be placed in there and referenced from your server via `//server_name/public/filename`. You can configure the location for static content in `config.js`.

By default, the following folder structure will be created:
```bash
|-/public
	|-css
	|-img
	|-js
```

# SSL

If you want to use SSL, the `config.js` supports SSL. A private and public key are required.

## Unsigned Private key

The following demo shows how to quickly create an unsigned private key:

```bash
openssl req \
  -newkey rsa:2048 -nodes -keyout localhost.key \
  -x509 -days 365 -out localhost.crt \
  -subj "/C=CA/ST=Alberta/L=Calgary/O=Dis/CN=localhost"
```
