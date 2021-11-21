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

  