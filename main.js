// ********* ejercicio 1 **********

const evenOrOdd = (num) => {
    if (num % 2 === 0) {
        console.log(`el numero ${num} es par`);
    } else {
        console.log(`el numero ${num} es impar`);
    }
} // función que me devuelve en consola si el numero ingresado es par o impar

evenOrOdd (134);

// ******** ejercicio 2 *********

const greaterOrLess = (num1, num2) => {
    if (num1 > num2) {
        console.log(`${num1} es mayor que ${num2}`);
    } else if (num1 < num2) {
        console.log(`${num1} es menor que ${num2}`);
    } else {
        console.log(`ambos numeros son iguales`);
    }
} // Función que me devuelve por consola cual de los numeros ingresados es mayor, menor o igual

greaterOrLess (10, 10);

// *********** ejercicio 3 ***************

const multiploX = (num) => {
    if (num % 5 === 0) {
        console.log(`el numero ${num} si es multiplo de 5`);
    } else {
        console.log(`el numero ${num} no es multiplo de 5`);
    }
} // Función que me devuelve por consola si el numero ingresado es multiplo de 5

multiploX (1510);

// ******** ejercicio 4 **********

const numberGrowth = (num) => {
    for (let i = 0; i < num; i++) {
        console.log(`${i}`);  
    }
} // Función que devuelve por consola todos los numeros menores al numero recibido como parametro

numberGrowth (4)

// ************ ejercicio 5 **********

const wordNumber = (word, number) => {
    for (let i = 0; i < number; i++) {
        console.log(`${word}`);
    }
} // Función que me devuelve por consola la palabra ingresada como parametro, la cantidad de veces indicada por el numero recibido

wordNumber ("hola", 22)

// ************ ejercicio 6 ************

let miArray = [1,2,3,4, ["avion", "auto"]]

const arrayValue = () => {
    console.log(miArray);
} // Función que me imprime en consola todos los elementos dentro de mi Array

arrayValue ()

// ************** ejercicio 7 *********

let otherArray = [1,2,3,4,5,6,7,8,9,10]

const otherArrayValue = () => {
    for (let i = 0; i < otherArray.length; i++) {
        if (otherArray[i] == otherArray[5]) {
            continue
        }
        console.log(otherArray[i]);
    }
} // Función que me imprime en consola todos los elementos dentro del array, excepto al que se encuentre en la quinta posición 

otherArrayValue ()

// ************ ejercicio 8 *************

let thirdArray = [1,2,3,4,5];

const arrayMultiplicado = (num) => {
    for (let i = 0; i <= thirdArray.length; i++) {
        console.log(`el numero ${i} multiplicado por ${num} es igual a ${i * num}`);
    }
} // Función que me devuelve por consola cada numero del array multiplicado por el numero que recibe como parametro

arrayMultiplicado (8)