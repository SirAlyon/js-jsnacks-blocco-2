/* Generatore di “nomi cognomi” casuali: 
il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da 
queste vuole generare una falsa lista di invitati con nome e cognome. */

const names = ['Alessio', 'Fabio', 'Alessandro', 'Martina', 'Luca']
const surnames = ['Sada', 'Pacifici', 'Rossi', 'Bianchi', 'Ferrari']




const generate = document.getElementById('generate').addEventListener('click', function(){
    const generatedName = names[Math.floor(Math.random() * names.length)];
    const generatedSurname = surnames[Math.floor(Math.random() * surnames.length)];
    document.querySelector('h2').innerHTML = `Il tuo falso nome è: ${generatedName} ${generatedSurname}`
    console.log(`${generatedName} ${generatedSurname}`);
})
