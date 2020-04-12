FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_DATABASE fixic
ENV MYSQL_USER user
ENV MYSQL_PASSWORD root

ADD setup.sql /docker-entrypoint-initdb.d
