/* 
    Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
    pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/


const numbersSquare = (list=[]) => {
    if (list.length === 0) return console.warn("Lista vacía, debe ingresar una lista númerica");
    if (!Array.isArray(list)) return console.error("Error, debe ingresar una lista");
    
    for (let i=0; i<list.length; i++){
        list[i] = list[i] ** 2; 
    }

    return console.info(list);
}



console.info("EJERCICIO 21");
numbersSquare();
numbersSquare(5);
numbersSquare([1, 4, 5]);