//Library
//When I click new book button a modal should appear then asks user to input
// name author pages and haveread then what the user inputs is pushed as an new object book
// into the library array

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

proto.addEventListener("click",function(){ //When clicking wow-btn this generates

  const book = document.createElement("div");
  book.className = "book";
  document.querySelector(".bookshelf").appendChild(book);
  const bookName = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const haveRead = document.createElement("input");
  const removeBtn = document.createElement("button");
  bookName.innerText = Book2.name;
  author.innerText = Book2.author;
  haveRead.type = "checkbox";
  pages.innerText = Book2.pages;
  removeBtn.innerText = "Remove";
  book.append(bookName,author,pages,haveRead,removeBtn);


})

  
  //Book object and constructor

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
    return (this.name + " " +  this.author);
}


Book.prototype.readMe = function(){
    console.log(`Would you like to read me? I am only ${this.pages} pages long.`)
}


// let Book1 = new Book("HarryPotter", "JK Rowling", 500, true);
 let Book2 = new Book ("Atomic Habits", "John Smith", 300,false);

function AddBookToLibrary(book){ // call this function when user hits add book modal button 
      library.push(book);
}


