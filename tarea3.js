// 3. Semáforo (If/else + estados)
// Simular el cambio de luces de un semáforo.Tareas:
// 1.
// Usa el constructor Semaforo (inicia en "rojo").
// 2.
// Implementa el método cambiar() que rote entre "rojo" → "verde" → "amarillo" → "rojo" usando if/else.
// 3.
// Llama al método 3 veces y verifica que el ciclo funcione.


function Semaforo(){
    this.estado = "rojo" 
    
}

function cambiar(semaforo){
    if (semaforo.estado === "rojo"){
        semaforo.estado = "verde";
    }else if(semaforo.estado === "verde"){
        semaforo.estado = "amarillo";
    }else if(semaforo.estado === "amarillo"){
        semaforo.estado = "rojo";
    }
    console.log("Semáforo ahora está en:", semaforo.estado);     
}
let semaforo = new Semaforo(); 

cambiar(semaforo); 
cambiar(semaforo); 
cambiar(semaforo);
cambiar(semaforo);
cambiar(semaforo);
cambiar(semaforo);
cambiar(semaforo);