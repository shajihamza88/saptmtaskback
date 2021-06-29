## Introduction

A task management tool build using NestJS.

## API URL
http://localhost:3000/api


## Tradeoff and consideration

Feature like role management, authentication etc are not taken into consideration, as they would take more than the estimated time and also is not part of the requirement. Swagger is not currently integrated and so we will have to use PostMan tool to test the api. MySql database is used as the backend.

## Steps followed for development

Following CLI commands are used for development and for spinning up the project quicker.
npm i -g @nestjs/cli
nest new tmbackend
nest g module tasks
nest g controller tasks --no-spec
nest g service tasks --no-spec
npm install @nestjs/typeorm typeorm mysql
npm install class-validator --save
npm install class-transformer --save

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Validating

```bash
# To run the linter
$ npm run lint

# To fix common linting errors
$ npm run lint -- --fix
```

## MySql Docker

# To start my sql docker

docker run --name task-mysql -e MYSQL_ROOT_PASSWORD=task123 -e MYSQL_DATABASE=taskmanagement -d -p 3306:3306 mysql:latest

# To start compose NestJS docker

docker compose up

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
