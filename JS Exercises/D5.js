/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const sortedPets = pets.sort();

console.log(sortedPets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const reversedPets = pets.reverse();

console.log(reversedPets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let theLastElement = pets.shift();

console.log(pets); // per controllare la prima operazione

pets.push(theLastElement);

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

// Aggiungo la proprietà "licensePlate" ad ogni oggetto nell'array cars usando un ciclo for
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let arrayAlphabet = alphabet.split("");

let createPlate = function () {
  let randomPlate =
    arrayAlphabet[Math.floor(Math.random() * 26)] +
    arrayAlphabet[Math.floor(Math.random() * 26)];
  for (let i = 0; i < 3; i++) {
    randomPlate += Math.floor(Math.random() * 10);
  }
  randomPlate +=
    arrayAlphabet[Math.floor(Math.random() * 26)] +
    arrayAlphabet[Math.floor(Math.random() * 26)];

  return randomPlate;
};

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = createPlate(); // Assegna un valore unico per ogni auto
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newCar = {
  brand: "Toyota",
  model: "Corolla",
  color: "silver",
  trims: ["sport", "city"],
  licensePlate: createPlate(), // funzione che abbiamo creato in precedenza
};

cars.push(newCar);

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims[i] = cars[i].trims[0];
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let j = 0;

while (j < numericArray.length && numericArray[j] !== 32) {
  console.log(numericArray[j]);
  j++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const numbersArray = [];

const alfabetoArray = alphabet.toLowerCase().split(""); // alphabet era una variabile che abbiamo dichiarato precedentemente
// quando abbiamo creato la targa in modo casuale, in questo caso lo riprendiamo come valore, con lowerCase e split per
// trasformarlo in un nuovo array

console.log(alfabetoArray); // stampa di prova per verificare l'array

for (let j = 0; j < charactersArray.length; j++) {
  for (let i = 0; i < alfabetoArray.length; i++) {
    switch (charactersArray[j]) {
      case "g":
      case "n":
      case "u":
      case "z":
      case "d":
        if (charactersArray[j] === alfabetoArray[i]) {
          numbersArray.push(i + 1); // questo l'ho inserito per una questione di corrispondenza tra l'alfabeto italiano che comincia da 1
          // e gli indici di javascript che cominciano da 0
        }
        break;
    }
  }
}

console.log(numbersArray);
