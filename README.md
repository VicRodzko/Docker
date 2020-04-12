/mysql container

`docker build -t test-mysql .;` // check docker images
`docker run -d \ --publish 6603:3306 \ --volume=/home/.../mysql/data:/var/lib/mysql \ --name=mysql test-mysql;`
`docker logs mysql` // check logs
`docker ps` // check container

/mysql console check

`ifconfig | grep inet` --- check our HOST
`mysql -u root -p -h 172.19.0.1 -P 3306 -D fixic` --- open MySQL

/nodejs container

docker build -t test-nodejs . docker run -d \ --publish 4000:4000 \ -e MYSQL_USER='root' \ -e MYSQL_PASSWORD='password' \ -e MYSQL_DATABASE='test' \ -e MYSQL_HOST='172.19.0.1' \ --link mysql:db \ --name=nodejs test-nodejs

CHECK WORK

`curl -X GET localhost:8123` --- Home Page
`curl -X GET localhost:8123/employees` --- All employees
`curl --header "Content-Type: application/json" -d '{"name": "Oleg D.", "positions": "TL", "phone": "Web", "location": "Minsk", "email": "aa2"}' -X POST localhost:8123/employees` --- Add employee
`curl -XDELETE localhost:8123/employees/4` --- Delete employee

`docker-compose down`
`docker rm -f docker rm -f \$(docker ps -a -q)` --- delete all container
