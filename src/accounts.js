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
//   const checked = books.filter(book => book.borrows.some(borrow => borrow.id === account.id))
// //return the number of books
// return checked.length
 let total = 0
  for (const book of books) {
   for (const borrow of book.borrows) {
   if (borrow.id===account.id)
     total++
   }
 }
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
//filter an array of books that book.borrows.id and has not returned the book
const borrowed = books.filter((book) => book.borrows.some(borrow => borrow.id === account.id && !borrow.returned))
//add the corresponding author's details as a key value pair in the object
const authInfo = borrowed.map(book => {
  const authMatch = authors.find(author => book.authorId === author.id)
  book.author = authMatch
  return book
})
                             
//thus you should have an ARRAY of book OBJECTS with author key and object value from 
return authInfo
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};