const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username) => {
    return users.some(user => user.username === username); //write code to check is the username is valid
}

const authenticatedUser = (username, password) => {
    return users.some(user => user.username === username && user.password === password); //write code to check if username and password match the one we have in records.
}
regd_users.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Faltan credenciales' });
    }

    if (!authenticatedUser(username, password)) {
        return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    const token = jwt.sign({ username }, 'fingerprint_customer', { expiresIn: '1h' });
    req.session.token = token; // Guarda el token en la sesión

    res.json({ message: 'Inicio de sesión exitoso', token });
});
regd_users.put("/auth/review/:isbn", (req, res) => {
    const isbn = req.params.isbn;
    const { review } = req.body;
    const username = req.user.username; // Obtén el nombre del usuario del token JWT

    if (!books[isbn]) {
        return res.status(404).json({ message: 'Libro no encontrado' });
    }

    if (!review) {
        return res.status(400).json({ message: 'La reseña está vacía' });
    }


    books[isbn].reviews[username] = review;
    res.json({ message: 'Reseña agregada o modificada exitosamente' });
});
regd_users.delete("/auth/review/:isbn", (req, res) => {
    const isbn = req.params.isbn;
    const username = req.user.username;

    if (!books[isbn] || !books[isbn].reviews[username]) {
        return res.status(404).json({ message: 'Reseña no encontrada o libro no existe' });
    }


    delete books[isbn].reviews[username];
    res.json({ message: 'Reseña eliminada exitosamente' });
});


module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;