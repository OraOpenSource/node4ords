# node4ords
Simple node app to act as web listener for Oracle APEX pages


#Install
```
git clone https://github.com/OraOpenSource/node4apex.git
TODO the unsafe-perm may not be required
cd ./node4apex
npm install --unsafe-perm
```

#Config 
TODO see config.js
The following configuration options can be set in the ```config``` variable or via the sessions environment variable.

<table border="0">
  <tr>
    <th>Name</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
  	<td>PORT</td>
	<td>80</td>
	<td>Port that HTTP communication will be served on</td>
  </tr>
  <tr>
  	<td>HTTPS_PORT</td>
	<td>443</td>
	<td>Port that HTTPS (SSL) communication will be served on</td>
  </tr>
  <tr>
  	<td>APEX_WEB_CONTAINER_URL</td>
	<td>http://localhost:8080</td>
	<td>URL that web container (Glass fish, Tomcat, etc) resides at. This URL only needs to be accessible to the server and not public.</td>
  </tr>
  <tr>
  	<td>APEX_IMAGES_DIR</td>
	<td>/ords/apex_images</td>
	<td>Location where the APEX images are stored on the server</td>
  </tr>
  <tr>
  	<td>FAVICON_URL</td>
	<td></td>
	<td>Location for favicon. If blank, it won't be used. Ex: /public/favicon.ico</td>
  </tr>
  <tr>
	<td></td>
	<td></td>
	<td></td>
  </tr>

</table>

#Run

```npm start```

TODO provide link to node project that handles node on boot

#Static files
Once installed a directory called ./public will be created. Static files can be placed in there and referenced from your server via //server_name/public/myfile.txt 

By default, the following folder structure will be created:
```
|-/public
	|-css
	|-img
	|-js
```	