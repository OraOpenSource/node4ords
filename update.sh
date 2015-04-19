#Make sure you're root
if [ "$(whoami)" != "root" ]; then
  sudo -i
fi

#Variables

#Detect if we have a node4ords startup script (commonly found in OraOpenSource Oracle XE / APEX VM ).
if [ -f /etc/init.d/node4ords ];
then
   N4O_STARTUP_SCRIPT=Y
else
   N4O_STARTUP_SCRIPT=N
fi

#Find location of script
#http://stackoverflow.com/questions/59895/can-a-bash-script-tell-what-directory-its-stored-in
N4O_SOURCE="${BASH_SOURCE[0]}"
while [ -h "$N4O_SOURCE" ]; do # resolve $N4O_SOURCE until the file is no longer a symlink
  N4O_DIR="$( cd -P "$( dirname "$N4O_SOURCE" )" && pwd )"
  N4O_SOURCE="$(readlink "$N4O_SOURCE")"
  [[ $N4O_SOURCE != /* ]] && N4O_SOURCE="$N4O_DIR/$N4O_SOURCE" # if $N4O_SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
N4O_DIR="$( cd -P "$( dirname "$N4O_SOURCE" )" && pwd )"

echo;
echo *** Node4ORDS Updating ***
echo;
echo VARIABLES; echo;
echo N4O_STARTUP_SCRIPT: $N4O_STARTUP_SCRIPT
echo N4O_DIR: $N4O_DIR
echo;


#Stop node4ords (this is a best attempt)
echo Stopping Node4ORDS; echo;
kill $(ps aux | grep 'node4ords' | awk '{print $2}')

#Reinstall
echo Reinstalling; echo;
cd $N4O_DIR
rm -rf
#Remove all hidden directories as well (ex .git)
rm -rf .[^.] .??*

git clone https://github.com/OraOpenSource/node4ords.git .
npm install --unsafe-perm

#Restart
if [ $N4O_STARTUP_SCRIPT = "Y" ]; then
  echo; echo Restarting Node4ORDS; echo;
  /etc/init.d/node4ords restart
else
  echo;
  echo You will need to restart manually Node4ORDS
  echo;
fi
