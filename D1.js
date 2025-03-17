/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* String
Sequenza di caratteri, parola o frase, vengono indicati con apici '' "" ``

let myName = `Ivan`;
let myPhrase = `Goodmorning`;  */

/* Number 
Numeri, interi o decimali, vengono indicati senza apici '' "" ``

 let intero = 3;
 let decimale = 3.5; */

/* boolean ==> true or false, vengono indicati senza apici '' "" ``

let isUserAdult = true;
let hasUserDrivingLicense = false; */

/* undefined ==> valore di default di una variabile non inizializzata.
Quando viene dichiarata senza un valore.

let something; */

/* null ==> valore definito dal developer, lo assegnamo ad una variabile per dire: questo contenitore non contiene nulla.

let empty = null; */

/* array / list ==> raccolta ordinata di valori. (strings, numbers, boolean, etc.)

let shoppingList = ["Flour", "Milk", "Sugar"] */

/* object / ogggetto ==> un contenitore di coppie chiave-valore (strings, numbers, booleans etc.) 

let person = {
name: 'Ivan', 
age: 30,
isStudent: true
}; 

person ==> object
name, age, isStudent ==> chiave
`Ivan`, 30, true ==> valori */

/* function / funzione ==> Come una ricetta: segui le istruzioni per ottenere un risultato.
Pacchetto di istruzioni ripetibili.

function somma(a, b) {
  return a + b;
}
console.log("Function esempio:", somma(5, 3)); // Output: 8 */
/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = `Ivan`;
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 12;
let b = 20;
console.log(a + b);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const myName = `Croce`; 
Uncaught SyntaxError: Identifier 'myName' has already been declared (at D1.js:98:7) */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(4 - x);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = `john`;
let name2 = `John`;

console.log(name1 === name2); /* false per via della lettera j (minuscola) john e J (maiuscola) John */

let result = name2.toLowerCase(); /* per transformare in lowercase name2 */

console.log(name1 === result); /* true perche' abbiamo trasformato John in john */

console.log(name2); /* il valore sara' sempre John perche' non abbiamo modificato direttamente name2  */
