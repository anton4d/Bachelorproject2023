# pull base image
FROM node:16

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19000

# install global packages
RUN rm -rf /opt/yarn-v* /usr/local/bin/yarn /usr/local/bin/yarnpkg
RUN npm i -g npm@latest expo-cli@latest
RUN npm i -g @expo/ngrok@^4.1.0

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /opt/Agit
WORKDIR /opt/agit
ENV PATH /opt/agit/.bin:$PATH
COPY ./Agit/package.json ./Agit/package-lock.json ./
RUN npm install

# copy in our source code last, as it changes the most
WORKDIR /opt/agit/app
# for development, we bind mount volumes; comment out for production
COPY ./Agit .

ENTRYPOINT ["npx", "expo", "start", "--tunnel"]