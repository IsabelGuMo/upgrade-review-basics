//Iteración #6: Función swap
//Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. 
//La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
//Retorna el array resultante.



function swap(array, indexOne, indexTwo){
    const elementOne = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = elementOne;

    return array;
}

const newArray = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'],1, 3);
console.log(newArray);