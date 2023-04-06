function findAccountById(accounts, id) {
  const result = accounts.find(account => account.id === id)
  // returns the account OBJECT that has the matching ID
  return result
}

function sortAccountsByLastName(accounts) {
 return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  //find the books that contain the account #
const checked = books.filter((book) => book.borrows.includes(account))
//return the number of books
return checked.length
 
}

function getBooksPossessedByAccount(account, books, authors) {
//filter an array of books that book.borrows.id 
const borrowed = books.filter((book) => book.borrows.includes(account))
//add the corresponding author's details as a key value pair in the object
//first create value for corresponding
const author = authors.find((author) => author.id === books.authorId)
//thus you should have an ARRAY of book OBJECTS


}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
