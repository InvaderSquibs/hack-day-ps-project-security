docker stop hd > /dev/null
docker rm hd > /dev/null
docker run -d -p 1337:22 --name hd squibs/hack-day
ssh-keygen -R [localhost]:1337 > /dev/null
echo "image squibs/hack-day running"
echo "password is 'HACKDAY'"
echo "use port 1337 to ssh into the docker container"
