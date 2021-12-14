"use strict";
var EventTabelle;
(function (EventTabelle) {
    const inputIntpret = document.getElementById("interpret");
    const inputPrice = document.getElementById("price");
    const display = document.getElementById("display");
    const button = document.getElementById("EnterButton");
    button.addEventListener("click", ButtonHandler);
    let events = [];
    class Event {
        interpret;
        price;
        constructor(interpret, price) {
            this.interpret = interpret;
            this.price = price;
        }
        set interpretName(name) {
            this.interpret = name;
        }
        get interpretName() {
            return this.interpret;
        }
        set priceZahl(price) {
            this.price = price;
        }
        get priceZahl() {
            return this.price;
        }
    }
    aufrufen();
    show(events);
    function ButtonHandler() {
        let interpretValue = inputIntpret.value;
        let priceValue = Number(inputPrice.value);
        let event = new Event(interpretValue, priceValue);
        events.push(event);
        console.log(events);
        let neuTR = document.createElement("tr");
        let neuInterpret = document.createElement("td");
        neuInterpret.textContent = interpretValue;
        let neuPrice = document.createElement("td");
        neuPrice.textContent = String(priceValue);
        let deleteButton = document.createElement("button");
        deleteButton.addEventListener("click", function () {
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
    function show(aktuelleEvents) {
        for (let aktuellerEvent of aktuelleEvents) {
            let interpretValue = aktuellerEvent.interpret;
            let priceValue = aktuellerEvent.price;
            let neuTR = document.createElement("tr");
            let neuInterpret = document.createElement("td");
            neuInterpret.textContent = interpretValue;
            let neuPrice = document.createElement("td");
            neuPrice.textContent = String(priceValue);
            let löschButton = document.createElement("button");
            löschButton.addEventListener("click", function () {
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
    function deleteevent(parentElement, event) {
        display.removeChild(parentElement);
        events.splice(events.indexOf(event) - 1, 1);
        console.log(events);
        speichern();
    }
    function speichern() {
        let arrayString = JSON.stringify(events);
        localStorage.setItem("event", arrayString);
    }
    function aufrufen() {
        let stringFromLocalStorage = localStorage.getItem("event");
        let arrayIGotFromStorage = JSON.parse(stringFromLocalStorage);
        for (let event of arrayIGotFromStorage) {
            events[events.length] = event;
        }
    }
})(EventTabelle || (EventTabelle = {}));
//# sourceMappingURL=script.js.map