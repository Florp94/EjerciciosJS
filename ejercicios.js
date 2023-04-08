// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.



let numero;
numero = prompt("Introducí un número")
if (numero % 2 === 0) {
    console.log("El Número " + numero + " Es Par");
}
else {
    console.log("El número " + numero + " Es Impar");
}

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.



// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.



// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.



// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.



// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

let IngredientesdeReceta = ["Manteca", "Azucar", "Huevos", "Leche", "Harina"]

console.log(IngredientesdeReceta);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

let Numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

for (Multiplode10 of Numeros) {
    if (Multiplode10 === 60) {
        continue;
    }
   console.log(Multiplode10);
} 

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.