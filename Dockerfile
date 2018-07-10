FROM node:8
WORKDIR /etherbot
COPY package.json /etherbot
RUN npm install -g yarn
COPY . /etherbot
CMD yarn start
EXPOSE 80
