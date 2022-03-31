/* Snack5 (Bonus)
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi 
all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

const firstArray = [2, 5, 8, 4, 35]
const secondArray = []

//confrontare la lunghezza degli array
//generare un elemento ---> aggiungerlo all'array più corto

let i=0
while (firstArray.length != secondArray.length){
    const randomNumber = Math.floor(Math.random() *10) //genero un numero casuale da inserire nell'array più corto

    if (firstArray.length < secondArray.length){
        firstArray.push(randomNumber)
    } else if (firstArray.length > secondArray.length){
        secondArray.push(randomNumber)
    }

    i++
}

console.log(firstArray, secondArray);