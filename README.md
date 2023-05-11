
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
## License

Nest is [MIT licensed](LICENSE).

## How to build a CRUD application with mongodb in NestJs

- Step 1:[InstallingRequiredPackage]
    - Install Mongoose by running "npm install --save mongoose"
    - [Optional] install "class-validator" package for validating schema

- Step 2: [ConnectingMongodbToTheApplication]
    - After installing required packages we can import the MongooseModule into the root AppModule "app.module.ts"

- Step 3:[SchemaDefinition]
    - Create schema directory in src folder with a "students.schema.ts" fileName
    - Define your schema in the file you create inside schema directory

- Step 4:[Dto] "an object that defines how the data will be sent over the network"
    - Create Dto for post and put route as needed

- Step 5:[HowToWriteController]
    - Define a controller class in students folder "students.controller.ts" to configure how your route "/students" will be handled for different METHODS (Get,Post,Delete,Put)

- Step 6:[SerivesForBusinessLogic]
    - Controllers need services to serve routes with the business logic. For that create a file "students.service.ts"
    - Use models inside the services to talk with the database and other 3rd party api's to serve the business logic.

- Step 7:[StudentModule]
    - Create a new file inside students folder to configure the module with the controller and provider. 
    - Import the controller "students.controller.ts" and the service "students.serivce.ts" as provider for the module
    - the last part is to connect this student.module class to "App.module.ts" in root directory

[Postman Collection](https://elements.getpostman.com/redirect?entityId=27366498-bc9bd75e-8395-404e-ab9f-b5911e20dfcd&entityType=collection)

          