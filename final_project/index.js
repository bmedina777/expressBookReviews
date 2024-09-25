const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;

const app = express();

app.use(express.json());

app.use("/customer", session({
    secret: "fingerprint_customer", // Clave secreta para la sesión
    resave: true,
    saveUninitialized: true
}));

app.use("/customer/auth/*", function auth(req, res, next) {
    if (req.headers['authorization']) {
        const token = req.session.token || req.headers['authorization'].split(' ')[1];
    }
    //const token = req.session.token || req.headers['authorization'] ? .split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token no encontrado. Inicia sesión primero.' });
    }

    jwt.verify(token, 'fingerprint_customer', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido o expirado.' });
        }

        req.user = decoded;
        next();
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'user' && password === 'password') {
        const token = jwt.sign({ username }, 'fingerprint_customer', { expiresIn: '1h' });

        req.session.token = token;

        res.json({ message: 'Inicio de sesión exitoso', token });
    } else {
        res.status(401).json({ message: 'Credenciales incorrectas' });
    }
});

const PORT = 5000;


app.use("/customer", customer_routes);
app.use("/", genl_routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));