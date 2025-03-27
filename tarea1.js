// 1. Libro (Objeto básico + if)
// Crear un sistema de préstamo de libros.Tareas:
// 1.
// Usa el constructor Libro para crear un objeto con título y autor.
// 2.
// Agrega una propiedad prestado = false.
// 3.
// Implementa el método prestar() que:
// •
// Cambie prestado a true si el libro está disponible.
// •
// Muestre un mensaje de error si ya está prestado (usando if).
// 4.
// Prueba prestar el libro dos veces y observa los mensajes.

function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
}


function prestar(libro) {
    if (libro.prestado) {
        console.log("El libro está prestado.");
    } else {
        libro.prestado = true;
        console.log("Prestaste el libro " + libro.titulo);
    }
}

let libro1 = new Libro("Hamlet", "William");
prestar(libro1); 
prestar(libro1); 