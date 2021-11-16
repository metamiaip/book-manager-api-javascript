const {DataTypes} = require('sequelize');
const sequelize = require('../database');

const Book = sequelize.define('Book', {
  // Model attributes are defined here
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  modelName: 'Book',
});

const environment = process.env.NODE_ENV || 'dev';

const populateDummyData = async () => {
  // Populate environment with some dummy data in dev
  await Book.sync({force: true});
  await Book.create({bookId: 1, title: 'The Hobbit', author: 'J. R. R. Tolkien'});
};

if (environment === 'dev') {
  populateDummyData();
}

module.exports = Book;
