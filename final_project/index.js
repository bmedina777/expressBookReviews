const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware de sesión
app.use(session({
    secret: 'fingerprint_customer', // Clave secreta para la sesión
    resave: false, // No guardar la sesión si no ha sido modificada
    saveUninitialized: true, // Guardar sesiones no inicializadas
    cookie: { secure: false } // Asegúrate de que 'secure' sea false si no usas HTTPS
}));

// Middleware de autenticación
app.use("/customer/auth/*", function auth(req, res, next) {
    const token = req.session.token || req.headers['authorization'] ? .split(' ')[1];

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

// Ruta de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'bmedina' && password === '123') {
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

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));