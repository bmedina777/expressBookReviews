const axios = require('axios');

// Función para obtener la lista de libros usando async/await
async function getBooks() {
    try {
        const response = await axios.get('https://brayanmedina-5000.theianext-0-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/', {
            timeout: 10000 // Tiempo de espera de 10 segundos
        });
        console.log('Lista de libros:', response.data);
    } catch (error) {
        console.error('Error al obtener la lista de libros:', error.message);
    }
}
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`https://brayanmedina-5000.theianext-0-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/isbn/${isbn}`);
        console.log('Detalles del libro:', response.data);
    } catch (error) {
        console.error('Error al obtener detalles del libro:', error.message);
    }
}
async function getBookByAUTHOR(author) {
    try {
        const response = await axios.get(`https://brayanmedina-5000.theianext-0-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/
        author/${author}`);
        console.log('Detalles del libro:', response.data);
    } catch (error) {
        console.error('Error al obtener detalles del libro:', error.message);
    }
}
async function getBookByTITLE(title) {
    try {
        const response = await axios.get(`https://brayanmedina-5000.theianext-0-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/
        title/${title}`);
        console.log('Detalles del libro:', response.data);
    } catch (error) {
        console.error('Error al obtener detalles del libro:', error.message);
    }
}
getBooks();
getBookByISBN('3');
getBookByAUTHOR('Dante Alighieri');
getBookByTITLE('The Divine Comedy');