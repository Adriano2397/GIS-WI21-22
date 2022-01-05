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
    }
    function deleteevent(parentElement, event) {
        display.removeChild(parentElement);
        events.splice(events.indexOf(event) - 1, 1);
        console.log(events);
    }
})(EventTabelle || (EventTabelle = {}));
//# sourceMappingURL=Client.js.map