/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
 */


//for version
/*  let sum = 0

for (let i=0; i < 5; i++){
    const userNumbers = Number(prompt('Inserisci un numero:'))
    sum += userNumbers
} 

console.log(sum);
 */



//while version
let i = 0
let sum = 0

while (i < 5) {
    const userNumbers = Number(prompt('Inserisci un numero:'))
    sum += userNumbers
    i++
}

console.log(sum);