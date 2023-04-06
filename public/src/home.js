function helper(tally, key) {
  let total = 0
  for (let i=0; i< tally.length; i++) {
    total+= tally[i][key]
  }
  return total
}

function getTotalBooksCount(books) {
  //returns a NUMBER of book objects in the array
  return books.length
}

function getTotalAccountsCount(accounts) {
  //returns a NUMBER of account objects in the array 
  return accounts.length
}

function getBooksBorrowedCount(books) {
  
  //find books that have borrows.returned = false
 const checkedOut = books.filter(book => book.borrows.some(borrow => borrow.returned === false) )
  //returns that NUMBER
 return checkedOut.length
}

function getMostCommonGenres(books) {
  //get a tally of genres using reduce
  const counts = books.reduce((tally, book) => {
//     console.log(tally,before)
     tally[book.genre] = (tally[book.genre] || 0) + 1
//       console.log(tally,after)
  return tally
  },{})
  //turn the object into an array
  let results = Object.keys(counts).map(key => ({name : (key), count: counts[key]}));
  
  return results.sort((result1, result2) => result1.count > result2.count ? -1 : 1).slice(0,5)
  //returns ARRAY
}

function getMostPopularBooks(books) {
  const counts = books.reduce((tally, book) => {
//     console.log(tally,before)
     tally[book.title] = (book.borrows.length)
//       console.log(tally,after)
  return tally
  },{})
  
  let results = Object.keys(counts).map(key => ({name : (key), count: counts[key]}));
    console.log(results)
  
  return results.sort((result1, result2) => result1.count > result2.count ? -1 : 1).slice(0,5)
}

function getMostPopularAuthors(books, authors) {
   const counts = books.reduce((tally, book) => {
//     console.log(tally,before)
     if (!tally[book.authorId]){
       tally[book.authorId] = []
     }
     tally[book.authorId].push(book) 
//       console.log(tally)
  return tally
//      console.log(tally)
  },[])
   
   const authorBorrows = [];
   authors.forEach(author => {
   const authorId = author.id
  const authorBooks = counts[authorId] || [];
  const borrows = authorBooks.reduce((tally,book) => {
    const bookBorrows = book.borrows.length
    return tally + bookBorrows
  }, 0)
  
   authorBorrows.push({ name: `${author.name.first} ${author.name.last}`, count:borrows})
   })
//   console.log(counts)

     return authorBorrows.sort((a,b) => b.count - a.count).slice(0, 5)
   }
              

   


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
