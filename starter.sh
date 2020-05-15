
#!/bin/zsh
docker build -t nodejs-api:1.0 .
docker run -d -p 9000:9000 --name node-server nodejs-api:1.0
docker ps