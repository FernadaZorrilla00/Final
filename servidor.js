const express = require('express');
const app = express();
const PORT = 3000;

const animales = [
  { id: 1, nombre: "Perro" },
  { id: 2, nombre: "Gato" },
  { id: 3, nombre: "Tortuga" }
];

app.get('/animales', (req, res) => {
    res.json(animales);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})