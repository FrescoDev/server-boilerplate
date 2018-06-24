FROM timbru31/node-alpine-git
ENV NODE_ENV=production

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json package.json
COPY .npmrc .npmrc
COPY yarn.lock yarn.lock
RUN yarn --ignore-engines --pure-lockfile

# Add your source files
COPY src/ src/
COPY main.js main.js
COPY server.js server.js
COPY api.yaml api.yaml

EXPOSE 80

CMD ["yarn","start"]
