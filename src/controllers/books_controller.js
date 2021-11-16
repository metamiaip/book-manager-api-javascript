const {bookService} = require('../services');

const getBooks = async (req, res) => {
  const books = await bookService.getBooks();
  res.json(books).status(200);
};

const getBook = async (req, res) => {
  const bookId = req.params.bookId;
  const book = await bookService.getBook(Number(bookId));

  if (book) {
    res.json(book).status(200);
  } else {
    res.status(404).json('Book does not exist.');
  }
};

const saveBook = async (req, res) => {
  const bookToBeSaved = req.body;
  const book = await bookService.saveBook(bookToBeSaved);

  if (book) {
    res.status(201).json(book);
  } else {
    res.status(404).json('Book already exist');
  }
};

// User Story 4 - Update Book By Id Solution
const updateBook = async (req, res) => {
  const bookUpdateData = req.body;
  const bookId = req.params.bookId;
  const book = await bookService.updateBook(bookId, bookUpdateData);
  res.status(204).json(book);
};

const deleteBook = async (req, res) => {
  const bookId = req.params.bookId;
  const book = await bookService.deleteBook(Number(bookId));

  if (book) {
    res.json(book).status(200);
  } else {
    res.status(404).json('Not found');
  }
};

module.exports = {
  getBooks,
  getBook,
  saveBook,
  updateBook, // User Story 4 - Update Book By Id Solution
  deleteBook
};
