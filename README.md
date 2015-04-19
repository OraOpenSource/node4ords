# Node4ORDS
Simple node app to act as web listener to sit on top of Oracle Rest Data Services (ORDS) web container (such as Tomcat). This is an alternative to using an Apache web server.

This project was created as part of the Oracle XE / APEX VM install project: https://github.com/OraOpenSource/oraclexe-apex

*Please note this is still in beta and additional changes will be coming.*

#Install
```bash
git clone https://github.com/OraOpenSource/node4ords.git
#TODO the unsafe-perm may not be required
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

#Config
All the configuration in ```config.js```. This should be reviewed before installing to configure the web container URL, ports, etc.

#Run

```bash
node app.js
```

An example of how to start this app on boot can be found in the [Oraclexe-Apex](https://github.com/OraOpenSource/oraclexe-apex) project. Specifically the [init.d/node4ords](https://github.com/OraOpenSource/oraclexe-apex/blob/master/init.d/node4ords) file.

#Static files
Once installed a directory called ```/var/www/public``` will be created. Static files can be placed in there and referenced from your server via *//server_name/public/filename*. You can configure the location for static content in ```config.js```.

By default, the following folder structure will be created:
```
|-/public
	|-css
	|-img
	|-js
```
