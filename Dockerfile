FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm run build
COPY . .
EXPOSE 4001
CMD ["npm", "start"]
