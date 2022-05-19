

let library = []; //global scope variable

//QuerySelectors
const newBookBtn = document.querySelector(".newBook-btn");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const proto = document.querySelector(".protobtn");

//Modal
newBookBtn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

proto.addEventListener("click",AddBook); //When clicking wow-btn this generates

function AddBook(){
  const book = document.createElement("div");
  book.className = "book";
  document.querySelector(".bookshelf").appendChild(book);
  const bookName = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const haveRead = document.createElement("button");
  const removeBtn = document.createElement("button");

  haveRead.innerText ="Read";
  haveRead.className = "haveRead";
  removeBtn.className = "remove";
  bookName.innerText = Book2.name;
  author.innerText = Book2.author;
  pages.innerText = "pg. " + Book2.pages;
  removeBtn.innerText = "Remove";

  book.append(bookName,author,pages,haveRead,removeBtn);
}


  
  //Book object and constructor

function Book(name,author,pages,haveRead){
this.name = name;
this.author = author;
this.pages = pages;
this.haveRead = haveRead;
}



Book.prototype.toggleRead = function(){ //Prototype
  this.haveRead === true ? this.haveRead === false: this.haveRead === true;
}


function AddBookToLibrary(book){ // call this function when user hits add book modal button 
  library.push(book);
}

 let Book1 = new Book("HarryPotter", "JK Rowling", 500, true);
 let Book2 = new Book ("Atomic Habits", "John Smith", 300,false);


AddBookToLibrary(Book1);
AddBookToLibrary(Book2);

console.table(library);


