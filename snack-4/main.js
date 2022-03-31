/* Crea un array di numeri interi e fai la somma di 
tutti gli elementi che sono in posizione dispari */

const numbersArray = [1, 2, 3, 6, 8, 23, 43, 54, 67, 87, 65, 765, 6353, 321]
/* [1, 2, 3, 6, 8, 23, 43, 54, 67, 87, 65, 765, 6353, 321] */
/* if (numbersArray.length % 2 != 0){
    result +=
}

const result = numbersArray[Math.floor(Math.random() * numbersArray.length)]; */

let result = 0

for (let i=0; i < numbersArray.length; i++){
    if (i % 2 !== 0){
        result = numbersArray[i]
        console.log(result);
    }
}