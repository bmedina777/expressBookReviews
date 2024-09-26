const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const jwt = require('jsonwebtoken');
const public_users = express.Router();

// Ruta para registro de usuarios
public_users.post("/register", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
    }

    const userExists = users.some(user => user.username === username);

    if (userExists) {
        return res.status(400).json({ message: "Username already exists" });
    }

    users.push({ username, password });
    return res.status(200).json({ message: "User successfully registered" });
});

// Obtener lista de libros
public_users.get('/', function(req, res) {
    return res.status(200).json(books);
});

// Obtener detalles de un libro basado en su ISBN
public_users.get('/isbn/:isbn', function(req, res) {
    const isbn = req.params.isbn;
    const book = books[isbn];

    if (book) {
        return res.status(200).json(book);
    } else {
        return res.status(404).json({ message: "Book not found" });
    }
});

// Obtener libros basados en el autor
public_users.get('/author/:author', function(req, res) {
    const author = req.params.author;
    const filteredBooks = Object.values(books).filter(book => book.author.toLowerCase() === author.toLowerCase());

    if (filteredBooks.length > 0) {
        return res.status(200).json(filteredBooks);
    } else {
        return res.status(404).json({ message: "No books found for this author" });
    }
});

// Obtener libros basados en el título
public_users.get('/title/:title', function(req, res) {
    const title = req.params.title.toLowerCase();
    const filteredBooks = Object.values(books).filter(book => book.title.toLowerCase().includes(title));

    if (filteredBooks.length > 0) {
        return res.status(200).json(filteredBooks);
    } else {
        return res.status(404).json({ message: "No books found with this title" });
    }
});

// Obtener las reseñas de un libro
public_users.get('/review/:isbn', function(req, res) {
    const isbn = req.params.isbn;
    const book = books[isbn];

    if (book && book.reviews) {
        return res.status(200).json(book.reviews);
    } else {
        return res.status(404).json({ message: "No reviews found for this book" });
    }
});

// Agregar o modificar una reseña
public_users.put('/auth/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const { review } = req.body;
    const token = req.headers['authorization'] ? .split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authorization token required' });
    }

    jwt.verify(token, 'fingerprint_customer', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }

        const username = decoded.username; // Extraer el nombre de usuario del token

        if (!books[isbn]) {
            return res.status(404).json({ message: 'Book not found' });
        }

        if (!review) {
            return res.status(400).json({ message: 'Review content required' });
        }

        if (!books[isbn].reviews) {
            books[isbn].reviews = {};
        }

        books[isbn].reviews[username] = review;

        return res.status(200).json({ message: 'Review added or updated successfully' });
    });
});
//Eliminar una reseña
public_users.delete('/auth/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const token = req.headers['authorization'] ? .split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authorization token required' });
    }

    jwt.verify(token, 'fingerprint_customer', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }

        const username = decoded.username;
        if (!books[isbn]) {
            return res.status(404).json({ message: 'Book not found' });
        }
        if (!books[isbn].reviews) {
            books[isbn].reviews = {};
        }
        delete books[isbn].reviews[username];
        return res.status(200).json({ message: 'Review deleted successfully' });
    });
});

module.exports.general = public_users;