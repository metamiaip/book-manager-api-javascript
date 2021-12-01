# 📖 Minimalist Book Manager API

## Introduction
This is the starter repository for the Further APIs session. It provides a start to creating a Minimalist Book Manager API.

### Pre-Requisites
- NodeJS installed (v14.18.1 Long Term Support version at time of writing)

### Technologies & Dependencies

- [ExpressJS](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [SQLite3](https://www.npmjs.com/package/sqlite3)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [ESLint](https://eslint.org/)

### How to Get Started

- Fork this repo to your Github and then clone the forked version of this repo

### Running the application

In order to run the unit tests run, firstly install the dependencies (if you haven't already done so)

```
npm install
```

Followed by:

```
npm start
```

### Running the Unit Tests

In order to run the unit tests run, firstly install the dependencies (if you haven't already done so)

```
npm install
```

Followed by:

```
npm test
```

### Tasks

Here are some tasks for you to work on:

📘 Task 1: Implement the following User Story with tests.

`User Story: As a user, I want to use the Book Manager API to delete a book using its ID`


📘 Extension Task: Oh no! 😭 We've only covered the happy paths in the solution, can you figure out a way
to add in exception handling to the project? 

- Clue 1: What if someone wants to add a book with an ID for a book that already exists? How do we handle this gracefully?


- Clue 2: What if someone wants to find a book by an ID that doesn't yet exist? 
  How can we improve the API by handling errors gracefully and show a helpful message to the client?

API Call Syntax:
- To return all books in the DB
  - GET /api/v1/books
- To return a single book in the DB
  - GET /api/v1/books/:bookId (e.g. GET /api/v1/books/1)
- To create a book in the DB
  - POST /api/v1/books
  - JSON body example
    {
        "bookId": 3,
        "title": "Book 3",
        "author": "Jonathan"
    }
- To update a book in the DB
  - PUT /api/v1/books/:bookId (e.g. PUT /api/v1/books/1)
  - if book update does not exist in the DB, return "Fail to update book!"
  - if book exists in the DB, update book to the DB and return "Update successful!"
- To delete a book in the DB
  - DELETE /api/v1/books/:bookId (e.g. DELETE /api/v1/books/1)
  - if book update does not exist in the DB, return "Fail to delete book!"
  - if book exists in the DB, delete book to the DB and return "Delete successful!"

- API Interactive Lab 2 (connect PostgreSQL DB in window 10):
  - in package.json, please set "start-prod" as: "start-prod": "set NODE_ENV=prod&& node src/server.js"
  - in src/server.js, please set as: require('dotenv').config({ path: `./.env.${environment}` });
  - in .env.prod, add DB_PORT=5432 rather than put in DB_HOST
  - in src/models/book.js, add option "timestamps: false,", otherwise, sequelize always add createdBy, updatedBy in all build SQL and fail your query (I forked the repo too early and this syntax is missing)

- To run the repo, please install as below:
  - npm install pg pg-hstore dotenv
  - create your own '.env.dev' configuration file in the root directory of your project.
    - (example):<br>
      NODE_ENV=dev <br>
      PORT=3000<br>
      DB_NAME=sqlite::memory:<br>
      DB_USERNAME=<br>
      DB_PASSWORD=<br>
      DB_HOST=localhost<br>
      DB_DIALECT=sqlite<br>
  - To run the application against different environments, please create a `.env.test` and a `.env.prod` in the root of the repository to specify configuration for these environments.
  - You can then add a new script to the scripts section of the `package.json` to run the script for your specific environment. For example, the script below will enable you to run against the production configuration.
    - example: <br>
    "scripts": {<br>
    "start": "node src/server.js",<br>
    "start-prod": "NODE_ENV=prod node src/server.js",
    "test": "jest"<br>
    },<br>
    npm start-prod