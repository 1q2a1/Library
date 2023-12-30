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
console.log(myLibrary)

function displayBooks(){

}