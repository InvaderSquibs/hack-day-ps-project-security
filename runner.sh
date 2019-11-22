docker stop hd > /dev/null 2>/dev/null
docker rm hd > /dev/null 2>/dev/null
docker run -d -p 1337:22 --name hd squibs/hack-day
ssh-keygen -R [localhost]:1337 > /dev/null 2>&1
echo "image squibs/hack-day running"
echo "password is 'HACKDAY'"
echo "use port 1337 to ssh into the docker container"
