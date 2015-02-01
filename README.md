# node4ords
Simple node app to act as web listener to sit on top of Oracle Rest Data Services (ORDS). This is an alternative to using an Apache web server.

Please note this is still in beta and additional changes will be coming.


#Install
```
git clone https://github.com/OraOpenSource/node4apex.git
TODO the unsafe-perm may not be required
cd ./node4apex
npm install --unsafe-perm
```

#Config 
All the configuration is handled in config.js. Please modify with appropriate settings


#Run

```npm start```

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