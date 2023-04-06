function findAuthorById(authors, id) {
  //return the author object with matching ID
  const results = authors.find(author => author.id === id)
return results
}

function findBookById(books, id) {}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
