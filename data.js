let productos = [];

function insertarProducto(producto) {
    productos.push(producto);
    return producto;
}

function listarProductos() {
    return productos;
}

module.exports = { insertarProducto, listarProductos };
