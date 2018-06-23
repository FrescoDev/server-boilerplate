## interaction-designer-api-demo

simplified api for interaction design

## INSTALLATION

### Using Docker (recommended)

- Run ```make install``` to install the required packages. (see Makefile for details)

### Using Yarn

- Run ```yarn install --ignore-engines --pure-lockfile``` to install the required packages.

## DEVELOPMENT

### Using Docker

- Run ```make dev``` to run the app. (see Makefile for details.) This will run the app within the docker container specified via the docker-compose.yml/Dockerfile.

- Default port: 3000
- URL: http://localhost:3000/

Default endpoints:

- HEALTH: http://localhost:3000/ping

Environment variables are set in the docker-compose.yml file for the dev container.

### Using Yarn

- Create a .env file locally (at root of the app directory) and specify the required environment variables.
- E.g.
```
BASE_PATH=/
PORT=3000
LAMBDA_FUNCTION_ID=exec
```
- Run ```yarn run dev``` to run the app.

- Default port: [set in .env file]
- URL: http://localhost:3000/

* Logging is provided via bunyan, optionally you can use the Bunyan CLI (requires global install) to provided formatted logging output. 

## TESTING

- Run ```yarn run test:unit``` to run all the unit tests. Alternatievly, run ```make unit-test``` to run the unit tests via docker, useful before pushing up to build server.

- Run ```yarn run  test:component``` to run all the component tests. Alternatievly, run ```make component-test``` to run the component tests same as above via docker. 

- Other useful commands
```
make all // runs everything via docker. See Makefile for details.
yarn dependency-check // scan depenedencies for known vulnerabilities
yarn lint // scans code base and checks lint rules are met 
```

## USEFUL LINKS

## USEFUL DOCUMENTATION
