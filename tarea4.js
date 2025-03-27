// 4. Termómetro (Variables + condiciones)
// Alertar sobre temperaturas extremas.Tareas:
// 1.
// Usa el constructor Termómetro.
// 2.
// Implementa el método actualizar(grados) que muestre:
// •
// "¡Hace calor!" si > 30°C.
// •
// "¡Hace frío! " si < 10°C.
// •
// "Temperatura agradable" en otros casos.
// 3.
// Prueba con temperaturas de 5°, 20° y 35°.

const prompt = require("prompt-sync")();

function Termometro() {
    this.grados = 0;
}

function actualizar(termometro, grados) {
    termometro.grados = grados;
    if (grados > 30) {
        console.log("¡Hace calor!");
    } else if (grados < 10) {
        console.log("¡Hace frío!");
    } else {
        console.log("Temperatura agradable");
    }
}

let termometro1 = new Termometro();
let grados = parseFloat(prompt("Ingresa la temperatura: "));
actualizar(termometro1,grados);



// en grupo

// function Termometro() {
//     ;
//   }
//   Termometro.prototype.actualizar = function actualizar(grados) {
//     if (grados > 30) {
//       console.log(`Hace calor!`);
//     } else if (grados < 10) {
//       console.log(`Hace frio!`);
//     } else {
//       console.log(`Temperatura agradable!`);
//     }
//   }
//   let termometro1 = new Termometro();
//   termometro1.actualizar(15)