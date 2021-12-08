namespace Eventtabelle {

  const interpretInput: HTMLInputElement = <HTMLInputElement>document.getElementById("interpretInput");
  const priceInput: HTMLInputElement = <HTMLInputElement>document.getElementById("priceInput");
  const display: HTMLElement = <HTMLElement>document.getElementById("display");
  const myButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enterButton");
  myButton.addEventListener("click", mybuttonHandler);
  let events: Event[] = [];

  class Event {
    interpret: string;
    price: number;
    constructor(interpret: string, price: number) {
      this.interpret = interpret;
      this.price = price;
    }
    set interpretInput(name: string) {
      this.interpret = name;
    }
    get interpretName(): string {
      return this.interpret;
    }
    set priceInput(price: number) {
      this.price = price;
    }
    get priceInput(): number {
      return this.price;
    }
  }
  load();
  


  function mybuttonHandler(): void {
    let interpretValue: string = interpretInput.value;
    let priceValue: number = Number(priceInput.value);
    let deleteButton: HTMLButtonElement = document.createElement("button");
    deleteButton.textContent = "Delete";



    const newZeile: HTMLTableRowElement = document.createElement("tr");
    const newInterpret: HTMLTableCellElement = document.createElement("td");
    newInterpret.textContent = interpretValue;
    const newPrice: HTMLTableCellElement = document.createElement("td");
    newPrice.textContent = String(priceValue);

    deleteButton.addEventListener("click", deleteEvent);


    display.appendChild(newZeile);
    newZeile.appendChild(newInterpret);
    newZeile.appendChild(newPrice);
    newZeile.appendChild(deleteButton);


    function deleteEvent(): void {
      newZeile.removeChild(newInterpret);
      newZeile.removeChild(newPrice);
      newZeile.removeChild(deleteButton);


    }
    save();

  }

  function save(): void {
    let arrayString: string = JSON.stringify(events);
    localStorage.setItem("event", arrayString);
  }


  function load(): void {
    let stringFromLocalStorage: string = localStorage.getItem("event");
    let arrayIGotFromStorage: Event[] = JSON.parse(stringFromLocalStorage);
    for (let event of arrayIGotFromStorage) {
      events[events.length] = event;
    }
  }}
