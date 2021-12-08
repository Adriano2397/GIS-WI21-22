"use strict";
var Eventtabelle;
(function (Eventtabelle) {
    const interpretInput = document.getElementById("interpretInput");
    const priceInput = document.getElementById("priceInput");
    const display = document.getElementById("display");
    const myButton = document.getElementById("enterButton");
    myButton.addEventListener("click", mybuttonHandler);
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
    load();
    function mybuttonHandler() {
        let interpretValue = interpretInput.value;
        let priceValue = Number(priceInput.value);
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        const newZeile = document.createElement("tr");
        const newInterpret = document.createElement("td");
        newInterpret.textContent = interpretValue;
        const newPrice = document.createElement("td");
        newPrice.textContent = String(priceValue);
        deleteButton.addEventListener("click", deleteEvent);
        display.appendChild(newZeile);
        newZeile.appendChild(newInterpret);
        newZeile.appendChild(newPrice);
        newZeile.appendChild(deleteButton);
        function deleteEvent() {
            newZeile.removeChild(newInterpret);
            newZeile.removeChild(newPrice);
            newZeile.removeChild(deleteButton);
        }
        save();
    }
    function save() {
        let arrayString = JSON.stringify(events);
        localStorage.setItem("event", arrayString);
    }
    function load() {
        let stringFromLocalStorage = localStorage.getItem("event");
        let arrayIGotFromStorage = JSON.parse(stringFromLocalStorage);
        for (let event of arrayIGotFromStorage) {
            events[events.length] = event;
        }
    }
})(Eventtabelle || (Eventtabelle = {}));
//# sourceMappingURL=script.js.map