namespace EventTabelle {

const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret");
const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("price"); 
const display: HTMLElement = <HTMLElement>document.getElementById("display"); 
const myButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("EnterButton");
myButton.addEventListener("click", mybuttonHandler);
get();

interface KonzertEvent {
  interpret: string;
  price: number;
}

function mybuttonHandler(): void {
    let interpretValue: string = inputIntpret.value;
    let priceValue: number = Number(inputPrice.value);

    const newInterpretElement: HTMLTableCellElement = document.createElement("td"); 
    newInterpretElement.textContent = interpretValue;
    const newPriceElement: HTMLTableCellElement = document.createElement("td");
    newPriceElement.textContent = String(priceValue);
    const newReihe: HTMLTableRowElement = document.createElement("tr"); 

    display.appendChild(newReihe);
    newReihe.appendChild(newInterpretElement);
    newReihe.appendChild(newPriceElement); 

    let konzertEvent: KonzertEvent = {
      interpret: interpretValue, 
      price: priceValue
    };
    post(konzertEvent);
}

async function post(konzertEvent: KonzertEvent): Promise<void> {
  console.log(konzertEvent);
  await fetch("http://localhost:3000/concertEvents", {
    method: "POST",
    body: JSON.stringify(konzertEvent)
  });
}

async function get(): Promise<void> {
  let response: Response = await fetch("http://localhost:3000/concertEvents", {
    method: "GET"
  });
  let antwort: string = await response.text();
  let konzerte: KonzertEvent[] = JSON.parse(antwort) as KonzertEvent[];
  for (let konzert of konzerte) {
    ausgabe(konzert);
  }
}

function ausgabe(konzertEvent: KonzertEvent): void {
  let newInterpret: string = konzertEvent.interpret;
  let newPrice: number = konzertEvent.price;

  const newInterpretElement: HTMLTableCellElement = document.createElement("td"); 
  newInterpretElement.textContent = newInterpret;
  const newPriceElement: HTMLTableCellElement = document.createElement("td");
  newPriceElement.textContent = String(newPrice);
  const newReihe: HTMLTableRowElement = document.createElement("tr"); 

  display.appendChild(newReihe);
  newReihe.appendChild(newInterpretElement);
  newReihe.appendChild(newPriceElement);
}

}