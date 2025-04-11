const express = require('express');
const app = express();
const logic = require('./logic');

app.use(express.json());

app.post('/agregar', (req, res) => {
    const producto = req.body;
    const resultado = logic.agregarProducto(producto);
    res.status(201).json({ mensaje: "Producto agregado con éxito", producto: resultado });
});

app.get('/listar', (req, res) => {
    const productos = logic.obtenerProductos();
    res.status(200).json({ productos });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
