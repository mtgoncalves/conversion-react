FROM node:19-alpine

RUN apk --no-cache add curl

WORKDIR /react-app

COPY package*.json /react-app
RUN npm install
COPY . .

CMD npm start
