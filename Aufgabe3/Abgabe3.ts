// -- [Aufgabe 1]

/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age: number = 24;

/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName: string = `Adriano`;

function func1(age: number): number {
  return 2021 - age;
}

let output: string = func2(firstName);

function func3(meal?: string): string {
  console.log(`Ich esse gerne ${meal || "Pizza"}.`);
  return func1(age) > 1995
    ? `Ich gehöre zur Generation Z`
    : `Ich gehöre zur Generation Y`;
}

console.log(output);

function func2(name: string): string {
  console.log(`Ich heiße ${name}.`);
  return func3();
}

/* Ich heiße Adriano.
 * Ich esse gerne Pizza.
 * Ich gehöre zur Generation Z
 */

// -- [Aufgabe 2]

let events: any[][] = [
  ["Mark Knopfler", 10.1],
  ["Pink Floyd", 15.9],
  ["Metallica", 20.1],
  ["Michael Bublé", 11.1],
  ["Dire Straits", 12.2],
  ["Mariah Carey", 1.1],
  ["Cat Stevens", 12.99],
  ["Mark Forster", 2.1],
  ["Helene Fischer", 3.1],
  ["Bee Gees", 25.2]
];

// -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 2 EINTRAGEN

// Lösung a) 
console.log(`Die Länge ist ${ events.length}`);

// Lösung b) ...
for (let i: number = 0; i < events.length; i++) {
console.log(events[i]);}

// Lösung c) ...

let maxPreis: number = 0;
for (let i = 0; i < events.length; i++){
  if (events [i][1]> maxPreis){
    maxPreis = events[i][1];
  }

}



// Lösung d) ...
function searchInterpret(array: any[][], name: string): boolean{
  for(const entry of array){
    if(entry[0] === name){
    return true;
    }
  }
  return false;
}




 

// Lösung e) ...
function factorial(n: number) { 
  let f: number = 1; 
  let i: number = 1; 
  while (i < n) 
  f = f * ++i ; 
  return f; 
  }

  
// Lösung f) ...
function teilbar() {
  for (let i: number = 1; i <= 100; i++) {
  if (i % 3 == 0)
  console.log(i);
  }
  
  }
// Lösung g) ...
class ConcertEvent{
  interpret: string;
  price: number;

  constructor(interpret: string, price:number) {
    this.interpret = interpret;
    this.price = price;
  }

    show() {
      console.log(this.interpret,this.price);
      
    }


// Lösung h) 
let ConcertEvents: ConcertEvent [] = [];
ConcertEvents.push(new ConcertEvent("Mark Knopfler", 10.1));
ConcertEvents.push(new ConcertEvent("Pink Floyd", 15.9));
ConcertEvents.push(new ConcertEvent("Metallica", 20.1));
ConcertEvents.push(new ConcertEvent("Michael Bublé", 11.1));
ConcertEvents.push(new ConcertEvent("Dire Straits", 12.2));
ConcertEvents.push(new ConcertEvent("Mariah Carey", 1.1));
ConcertEvents.push(new ConcertEvent("Cat Stevens", 12.99));
ConcertEvents.push(new ConcertEvent("Mark Forster", 2.1));
ConcertEvents.push(new ConcertEvent("Helene Fischer", 3.1));
ConcertEvents.push(new ConcertEvent("Bee Gees", 25.2));

for(let index = 0; index < ConcertEvents.length; index ++) {
  console.log(ConcertEvents[index].show());
}