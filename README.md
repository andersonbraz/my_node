# Example API NodeJs with Express

[http://localhost:9000/metrics](http://localhost:9000/metrics)

[http://localhost:9000/members](http://localhost:9000/members)

[http://localhost:9000/](http://localhost:9000/)


## Get Project

```shell
git clone https://github.com/andersonbraz/my_node.git
```

## Install Project

```shell
cd my_node/
npm install
```

## Run Project

```shell
nodemon index.js
```

## History Commands

```shell
docker build -t nodejs-api:1.0 .
docker run -d -p 9000:9000 --name node-server nodejs-api:1.0
docker ps
```

```shell
clear
docker ps
docker container ls -a
docker container stop node-server
docker container prune -f
docker volume prune -f
docker network prune -f
docker rmi nodejs-api:1.0
docker ps
docker container ls -a
```