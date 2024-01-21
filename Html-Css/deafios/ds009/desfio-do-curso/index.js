
function creatBoook(title,Author,pages){
//Objectes
const book = {
booTitle: title, 
bookAuthor: Author,
bookPages: pages, 

  printBook: function() {
    console.log('printing')
  
      }          
 
    } 
   return book
} 
const book1 = creatBoook ('atomi','James',306)
console.log(book1)



