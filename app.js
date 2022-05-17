//Library
//When I click new book button a modal should appear then asks user to input
// name author pages and haveread then what the user inputs is pushed as an new object book
// into the library array

let library = []; //global scope variable


function Book(name,author,pages,haveRead){
this.name = name;
this.author = author;
this.pages = pages;
this.haveRead = haveRead;
this.haveYouReadMe = function(){
    this.haveRead === true ? console.log("You have read me"): console.log("You have not read me");
}
}
Book.prototype.info = function()
{
    console.log(this.author);
}

Book.prototype.readMe = function(){
    console.log(`Would you like to read me? I am only ${this.pages} pages long.`)
}


let Book1 = new Book("HarryPotter", "JK Rowling", 500, true);
let Book2 = new Book ("Atomic Habits", "John Smith", 300,false);

function AddBookToLibrary(book){
      library.push(book);
}
console.log(library);

 AddBookToLibrary(Book2);
 AddBookToLibrary(Book1);

 console.log(library);
 console.table(library);

// console.log(Book1);
// Book1.info();
// Book1.readMe();
// Book1.haveYouReadMe();
// Book2.info();
// Book2.readMe();
// Book2.haveYouReadMe();