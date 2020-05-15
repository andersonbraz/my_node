# Example API NodeJs with Express


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
docker build -t my-node .
docker run -d -p 9000:9000 --name node-server my-node
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
docker rmi my-node
docker ps
docker container ls -a
```