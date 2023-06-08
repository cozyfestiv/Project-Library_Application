function findAuthorById(authors, id) {
  //return the author object with matching ID
  const results = authors.find(author => author.id === id)
return results
}

function findBookById(books, id) {
//return the book with the matching ID
const result = books.find(book => book.id === id)
return result}

function partitionBooksByBorrowedStatus(books) {
//create arrays using filter 
 
  //one for books that are checked out
  const checkedOut = books.filter(book => book.borrows.some(borrow => borrow.returned === false) )
  //one for books that have been returned
  const returned = books.filter(book => book.borrows.every(borrow => borrow.returned === true) )
  const borrows = [checkedOut, returned]
  console.log(borrows)
  return borrows
  }

function getBorrowersForBook(book, accounts) {

const accts = accounts.filter(account => {
//identify matching accounts by creating a condition for your filter
      return book.borrows.some( borrow => account.id === borrow.id)
      
})
//add returned entry from book.borrows which is now in the borrows array
//   console.log(accts)
   //return array of account objects
  
  return accts.map(acct => {
    //Re-work this and practice using variables AKA refactor it!
    acct.returned = book.borrows.find(({id}) => acct.id === id).returned
    //destructing to focus in on what you're looking for 
//     console.log(book.borrows.find(borrow => acct.id === borrow.id))
    return acct
  })
 
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};