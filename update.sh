#Make sure you're root
if [ "$(whoami)" != "root" ]; then
  sudo -i
fi

#Stop node4ords
/etc/init.d/node4ords stop

#Reinstall
cd /var/www
rm -rf node4ords/
git clone https://github.com/OraOpenSource/node4ords.git
cd ./node4ords
npm install --unsafe-perm

#Restart
/etc/init.d/node4ords restart
