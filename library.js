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

const hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false)
console.log(hobbit.info())

function addBookToLibrary(title, author, pages, read) {
     const newBook = new Book(title, author, pages, read)
     myLibrary.push(newBook)
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, false)
addBookToLibrary("The Glove", "J.R.R Tolkien", 312, false)
addBookToLibrary("Ruby", "Roald Dahl", 317, false)
addBookToLibrary("Running Late", "Steven Lim", 512, true)
console.log(myLibrary)

function displayBooks(){
    let container = document.getElementsByClassName("library")
    if (container.length > 0){
        container = container[0]

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

displayBooks()