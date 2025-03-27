// 2. Lista de Compras (Array + for)
// Gestionar una lista dinámica de productos.Tareas:
// 1.
// Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
// 2.
// Añade 3 productos con el método agregar().
// 3.
// Implementa el método mostrar() que use un for para listar los productos numerados (ej: "1. Manzanas").
// 4.
// Muestra la lista completa en consola.

function listaCompras() {
    this.productos = [];   
}
let listas = new listaCompras();
listas.productos.push("manzanas")
listas.productos.push("uva")
listas.productos.push("melocoton")
function mostrar(lista) {
    console.log("Lista de compras: ");
    for (i=0; i < lista.productos.length;i++){
        console.log((i+1) + ". " + lista.productos[i]);
    }
}
mostrar(listas)
