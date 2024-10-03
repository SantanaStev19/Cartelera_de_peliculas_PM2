// Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. 
//La clase debe tener los siguientes métodos:

// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
class CarritoCompra {
    constructor() {
        this.productos = [];
    }
    agregarProducto(producto){
        if (typeof producto === "object" && !Array.isArray(producto)){
            this.productos.push(producto)
        } else {
            throw "Error: El producto debe ser un objeto";
        }
    }
    calcularTotal(){
        return this.productos.reduce((acum, producto) => producto.precio + acum, 0);
    }    

    aplicarDescuento(porcentaje){
        if (typeof porcentaje !== "number")
            throw "Error: El producto debe ser un objeto";
        if (this.productos.length === 0)
            throw "No se puede aplicar descuento, no hay productos"
        const total = this.calcularTotal();
        const descuento = (total * porcentaje) / 100;
        return total - descuento;
    }
}

module.exports = {
    CarritoCompra,
}