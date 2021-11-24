namespace Eventtabelle {

  const interpretInput: HTMLInputElement = <HTMLInputElement>document.getElementById("interpretInput"); 
  const priceInput: HTMLInputElement = <HTMLInputElement>document.getElementById("priceInput"); 
  const display: HTMLElement = <HTMLElement>document.getElementById("display"); 
  const myButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enterButton"); 
  
  myButton.addEventListener("click", mybuttonHandler); 
      
  class Event {
    private interpret: string;
    private price: number;
    constructor(interpret: string, price: number){
      this.interpret = interpret;
      this.price = price;
    }

    tabelleEintragen(): void{
      

    }
  }
  
  

  function mybuttonHandler(){
    let interpretValue: string = interpretInput.value;
    let priceValue: number = Number(priceInput.value);
    const newZeile: HTMLTableRowElement = document.createElement("tr")
      const newInterpret: HTMLTableCellElement = document.createElement("td");
      newInterpret.textContent = interpretValue;
      const newPrice: HTMLTableCellElement = document.createElement("td");
      newPrice.textContent = String(priceValue);

      display.appendChild(newZeile);
      newZeile.appendChild(newInterpret);
      newZeile.appendChild(newPrice);
  }
}