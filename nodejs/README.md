docker-compose down













/mysql container

`docker build -t test-mysql .`;          // check `docker images`

`docker run  -d \
--publish 6603:3306 \
--volume=/home/itrexgroup/Projects/Train/DockerAndNodeJS/mysql/data:/var/lib/mysql \
--name=mysql test-mysql`;

`docker logs mysql` // check logs
`docker ps` // check container

/mysql console check

`ifconfig | grep inet` --- check our HOST
`mysql -u root -p -h 172.19.0.1 -P 6603 -D test` --- open MySQL

/nodejs container

`docker build -t test-nodejs .`
`docker run  -d \
 --publish 4000:4000 \
 -e MYSQL_USER='root' \
 -e MYSQL_PASSWORD='password' \
 -e MYSQL_DATABASE='test' \
 -e MYSQL_HOST='172.19.0.1' \
 --link mysql:db \
 --name=nodejs test-nodejs`
 
 CHECK WORK
 
 `curl -X GET localhost:4000` --- Home Page
 
 `curl -X POST 172.19.0.1:4000/get-employees` --- All employees
 
 `curl --header "Content-Type: application/json" -d '{"id": 2, "name": "Oleg D.", "positions": "TL", "team": "Web", "unit": "U2", "location": "Minsk", "phone": "aa2"}' -X POST localhost:4000/employees` --- SET Employee


docker rm -f <ID Container>
docker rm -f $(docker ps -a -q)   --- delete all container
