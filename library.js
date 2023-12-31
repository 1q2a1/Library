const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        const readStatus = read ? "read already" : "not read yet"
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`
    }
}

function addBookToLibrary(title, author, pages, read) {
     const newBook = new Book(title, author, pages, read)
     myLibrary.push(newBook)
}


function displayBooks(){
    let container = document.getElementsByClassName("library")
    if (container.length > 0){
        container = container[0]
        container.innerHTML = ''
        myLibrary.forEach(function(book){
            let bookElement = document.createElement("div")
            bookElement.className= "book"
            bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>${book.read ? "Read" : "Not Read"}</p>
            `
            container.appendChild(bookElement)
        }) 
    }
}

document.getElementById("addBookButton").addEventListener("click", function() {
    const formSection = document.getElementById("form").style.display = "flex"
    const contentSection = document.getElementById("content").style.display = "none"
})

document.getElementById("submit-btn").addEventListener("click", function(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    let readOptions = document.getElementsByName("read");
    for (let i=0; i<2; i++){
        if (readOptions[i].checked){
            var selectedValue = readOptions[i]
            break
        }
    } 
    let read = selectedValue.value === 'true' 
    
    let form = document.getElementById("myForm")
    if (form.checkValidity() === false){
        form.reportValidity()
        return
    }

    const formSection = document.getElementById("form").style.display = "none"
    addBookToLibrary(title, author, pages, read)
    displayBooks()
    const contentSection = document.getElementById("content").style.display = "block"
})

document.getElementById("close-btn").addEventListener("click", function(e) {
    e.preventDefault()
    const formSection = document.getElementById("form").style.display = "none"
    const contentSection = document.getElementById("content").style.display = "block"
})


// **********************************
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, false)
addBookToLibrary("The Glove", "J.R.R Tolkien", 312, false)
addBookToLibrary("Ruby", "Roald Dahl", 317, false)
addBookToLibrary("Running Late", "Steven Lim", 512, true)
console.log(myLibrary)
displayBooks()