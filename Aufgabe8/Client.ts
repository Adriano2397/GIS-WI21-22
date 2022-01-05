namespace EventTabelle {

    const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("price");
    const display: HTMLElement = <HTMLElement>document.getElementById("display");
    const button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("EnterButton");
    button.addEventListener("click", ButtonHandler);
    let events: Event[] = [];

    class Event {
        interpret: string;
        price: number;
        constructor(interpret: string, price: number) {
            this.interpret = interpret;
            this.price = price;
        }
        set interpretName(name: string) {
            this.interpret = name;
        }
        get interpretName(): string {
            return this.interpret;
        }
        set priceZahl(price: number) {
            this.price = price;
        }
        get priceZahl(): number {
            return this.price;
        }
    }
    function ButtonHandler(): void {
        let interpretValue: string = inputIntpret.value;
        let priceValue: number = Number(inputPrice.value);

        let event: Event = new Event(interpretValue, priceValue);
        events.push(event);
        console.log(events);

        let neuTR: HTMLTableRowElement = document.createElement("tr");
        let neuInterpret: HTMLTableCellElement = document.createElement("td");
        neuInterpret.textContent = interpretValue;
        let neuPrice: HTMLTableCellElement = document.createElement("td");
        neuPrice.textContent = String(priceValue);
        let deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.addEventListener("click", function (): void {
            deleteevent(neuTR, event);
        });
        deleteButton.style.color = "red";
        deleteButton.textContent = "delete";

        display.appendChild(neuTR);
        neuTR.appendChild(neuInterpret);
        neuTR.appendChild(neuPrice);
        neuTR.appendChild(deleteButton);
        
  
    }
    function deleteevent(parentElement: HTMLDivElement, event: Event): void {
        display.removeChild(parentElement);
        events.splice(events.indexOf(event) - 1, 1);
        console.log(events);
    }
}
   