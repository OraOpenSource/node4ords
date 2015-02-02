# node4ords
Simple node app to act as web listener to sit on top of Oracle Rest Data Services (ORDS) web container (such as Tomcat). This is an alternative to using an Apache web server.

This project was created as part of the Oracle XE / APEX VM install project: https://github.com/OraOpenSource/oraclexe-apex

Please note this is still in beta and additional changes will be coming.


#Install
```bash
git clone https://github.com/OraOpenSource/node4ords.git
TODO the unsafe-perm may not be required
cd ./node4ords
npm install --unsafe-perm
```

#Config 
All the configuration is handled in config.js. Please modify with appropriate settings. 


#Run

```bash
npm start
```

TODO provide link to node project that handles node on boot

#Static files
Once installed a directory called ./public will be created. Static files can be placed in there and referenced from your server via //server_name/public/myfile.txt. You can configure the location for static content in ```config.js```

By default, the following folder structure will be created:
```
|-/public
	|-css
	|-img
	|-js
```	