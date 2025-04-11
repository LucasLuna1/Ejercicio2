const data = require('./data');

function agregarProducto(producto) {
    return data.insertarProducto(producto);
}

function obtenerProductos() {
    return data.listarProductos();
}

module.exports = { agregarProducto, obtenerProductos };
