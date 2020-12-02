FROM node:10

RUN apt-get update
WORKDIR /app
COPY ./web/ .
RUN npm install
CMD ["node", "index.js"]
EXPOSE 80