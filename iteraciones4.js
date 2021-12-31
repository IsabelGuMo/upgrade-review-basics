//**Iteración #4: Métodos findArrayIndex**

// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y 
// devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. 
// Haz varios ejemplos y compruebalos.

function findArrayIndex(array, text) {
    for (let index = 0; index < array.length; index++) {
        let object = array[index];
        if (object === text) {
            return index;
        }
    }
}

const index = findArrayIndex(
    ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'],
    'Salamandra'
    );
    console.log(index);

