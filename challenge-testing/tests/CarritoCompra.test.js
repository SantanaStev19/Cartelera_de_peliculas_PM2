// Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. 
//La clase debe tener los siguientes métodos:

// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
const { CarritoCompra } = require("../index");

let carrito
beforeEach(() => {
    carrito = new CarritoCompra()
})

describe("Testing la clase carrito de compras", () => {
    test("Valindando la instancia de la clase", () => {
        expect(carrito).toBeInstanceOf(CarritoCompra)
    })
    test("Valindando la funcion agregarProducto", () => { 
        expect(() => carrito.agregarProducto("hola")).toThrow(
            "Error: El producto debe ser un objeto"
        )
        expect(() => carrito.agregarProducto(1)).toThrow(
            "Error: El producto debe ser un objeto"
        )
        expect(() => carrito.agregarProducto([])).toThrow(
            "Error: El producto debe ser un objeto"
        )
        expect(carrito.productos.length).toBe(0)  
            carrito.agregarProducto({
            id: 1, 
            nombre: "xbox serie s", 
            cantidad: 1, 
            precio: 300
        })
        expect(carrito.productos.length).toBe(1)   
    });
    test("Valindando la funcion calcularTotal", () => {
        expect(carrito.calcularTotal).toBeInstanceOf(Function);
        carrito.agregarProducto({
            id: 1, 
            nombre: "xbox serie x", 
            cantidad: 1, 
            precio: 600
        })
        carrito.agregarProducto({
            id: 2, 
            nombre: "iphone 16", 
            cantidad: 1, 
            precio: 1500
        })
        const total = carrito.calcularTotal(); 
        expect(total).toBe(2100)
    });
    test("Valindando la funcion aplicarDescuento", () => {
        expect(carrito.aplicarDescuento).toBeInstanceOf(Function)
        expect(() => carrito.aplicarDescuento("hola")).toThrow(
            "Error: El producto debe ser un objeto"
        )
        expect(() => carrito.aplicarDescuento([])).toThrow(
            "Error: El producto debe ser un objeto"
        )
        expect(() => carrito.aplicarDescuento({})).toThrow(
            "Error: El producto debe ser un objeto"
        )
        expect(() => carrito.aplicarDescuento(10)).toThrow(
            "No se puede aplicar descuento, no hay productos"
        )
        carrito.agregarProducto({
        id: 1, 
        nombre: "xbox serie x", 
        cantidad: 1, 
        precio: 600
        })
        carrito.agregarProducto({
        id: 2, 
        nombre: "iphone 16", 
        cantidad: 1, 
        precio: 1500
        })
        const totalConDescuento = carrito.aplicarDescuento(10);
        expect(totalConDescuento).toBe(1890);          
    })   
})

