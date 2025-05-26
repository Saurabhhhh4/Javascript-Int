const express = require("express");
const app = express();

app.use(express.json()); // to parse JSON bodies

// Sample in-memory data
let books = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
];

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// GET single book by ID
app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send({ message: "Book not found" });
  }
});

// POST a new book
app.post("/books", (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT to update a book
app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body;
  const index = books.findIndex((b) => b.id === bookId);

  if (index !== -1) {
    books[index] = updatedBook;
    res.json(updatedBook);
  } else {
    res.status(404).send({ message: "Book not found" });
  }
});

// DELETE a book
app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter((b) => b.id !== bookId);
  res.status(204).send(); // No content
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
