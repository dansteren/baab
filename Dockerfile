FROM node:10
RUN apt-get update && apt-get install vim -y
RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app
WORKDIR /home/app
COPY package*.json ./
USER node
RUN npm ci
COPY --chown=node:node . .
RUN npm run build
CMD ["npm", "run", "serve"]
