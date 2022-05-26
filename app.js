//Modal
const newBookBtn = document.querySelector(".newbook-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");


//Modal Form
const booktitle = document.getElementById("booktitle");
const bookauthor = document.getElementById("author");
const numofpages = document.getElementById("pages");
const addBookBtn = document.querySelector(".addbook-btn");

//Dark mode
const darkmode = document.querySelector(".mode");
darkmode.addEventListener("click",function(){
  if(  document.body.style.backgroundColor == "white"){

    document.body.style.backgroundColor ="black";
    document.querySelector(".Navbar").style.backgroundColor = "black";
    document.querySelector(".header").style.color = "white"
  }
  else{
    document.body.style.backgroundColor ="white";
    document.querySelector(".Navbar").style.backgroundColor = "white";
    document.querySelector(".header").style.color = "black";
  }
})

//Global Variables
let library = [];
let book;


// Created Doms
const bookshelf = document.querySelector(".bookshelf");
const books = document.querySelectorAll('.book');

//Modal events
newBookBtn.addEventListener("click",function(){
    modal.style.display = "block";
})
closeModal.addEventListener("click",function(){
    modal.style.display = "none";
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  addBookBtn.addEventListener("click", function(){ //if no input dont submit
    if(booktitle.value != "" && bookauthor.value != "" )  {
        
      AddBookToArray();
    }
});
   

function AddBookToArray(){

          book = new Book(booktitle.value,bookauthor.value,numofpages.value)
          
          library.push(book);  // Push new book to library array
          console.table(library);
    
      
     DisplayBook();

    modal.style.display = "none";
    booktitle.value = "";
    bookauthor.value = "";
    numofpages.value = "";

}
function DisplayBook(){
    const books = document.querySelectorAll('.book');    
    books.forEach(book => bookshelf.removeChild(book));
    
    for (let i=0; i<library.length; i++){
        CreateBook(library[i]);
    }
}

function CreateBook(item){ 
         
    //Make these elemetns for each new book
        const bookDiv = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement("p");
        const pages = document.createElement("p");
  
        const removeDiv = document.createElement("div")
        const removebtn = document.createElement("button");

        bookshelf.appendChild(bookDiv); //append book div to bookshelf for ach new book
        bookDiv.classList.add('book');

        bookDiv.setAttribute('id', library.indexOf(item)); //set id to each book for each index

        title.innerHTML = item.title;   
        author.innerHTML = item.author;
        pages.innerHTML  =`pg. ${item.pages}`
   
        removebtn.innerHTML = "Remove";
        
        title.classList.add('title');
        author.classList.add("author");
        pages.classList.add("pages");
  
        removebtn.classList.add("remove");
        removeDiv.appendChild(removebtn);

        

        removebtn.addEventListener("click",function(){ 
            library.splice(library.indexOf(item),1);
            DisplayBook();

        })
        bookDiv.append(title,author,pages,removeDiv);
}

// Book class
 class Book{
     constructor(title,author,pages){ //Book constructor
         this.title = title,
         this.author = author,
         this.pages = pages
     }
 }


