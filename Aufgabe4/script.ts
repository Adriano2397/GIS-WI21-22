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
    aufrufen();
    show(events);

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
        speichern();
    }
    function show(aktuelleEvents: Array<Event>): void {
        for (let aktuellerEvent of aktuelleEvents) {
            let interpretValue: string = aktuellerEvent.interpret;
            let priceValue: number = aktuellerEvent.price;

            let neuTR: HTMLTableRowElement = document.createElement("tr");
            let neuInterpret: HTMLTableCellElement = document.createElement("td");
            neuInterpret.textContent = interpretValue;
            let neuPrice: HTMLTableCellElement = document.createElement("td");
            neuPrice.textContent = String(priceValue);
            let löschButton: HTMLButtonElement = document.createElement("button");
            löschButton.addEventListener("click", function (): void {
                deleteevent(neuTR, aktuellerEvent);
            });
            löschButton.style.color = "red";
            löschButton.textContent = "delete";

            display.appendChild(neuTR);
            neuTR.appendChild(neuInterpret);
            neuTR.appendChild(neuPrice);
            neuTR.appendChild(löschButton);
        }
    }
    function deleteevent(parentElement: HTMLDivElement, event: Event): void {
        display.removeChild(parentElement);
        events.splice(events.indexOf(event) - 1, 1);
        console.log(events);
        speichern();
    }
    function speichern(): void {
        let arrayString: string = JSON.stringify(events);
        localStorage.setItem("event", arrayString);
    }
    function aufrufen(): void {
        let stringFromLocalStorage: string = localStorage.getItem("event");
        let arrayIGotFromStorage: Event[] = JSON.parse(stringFromLocalStorage);
        for (let event of arrayIGotFromStorage) {
            events[events.length] = event;
        }
    }
}