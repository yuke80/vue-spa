FROM node:16.14.0-alpine

# Create app directory
RUN mkdir -p /src
WORKDIR /src

# Install app dependencies
RUN apk update && apk upgrade
RUN apk add --no-cache py-pip make g++

COPY ./package.json /src
COPY ./package-lock.json /src

RUN npm install --production

COPY . /src

ENV NODE_ENV production

# Build app
RUN \
  export API_BASE_URL="%%API_BASE_URL%%" && \
  npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD [ "npm", "run", "start" ]
