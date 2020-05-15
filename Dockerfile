FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm i nodemon -g
COPY . /app
CMD nodemon index.js
EXPOSE 9000