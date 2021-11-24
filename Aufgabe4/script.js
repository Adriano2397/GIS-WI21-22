"use strict";
var Eventtabelle;
(function (Eventtabelle) {
    const interpretInput = document.getElementById("interpretInput");
    const priceInput = document.getElementById("priceInput");
    const display = document.getElementById("display");
    const myButton = document.getElementById("enterButton");
    myButton.addEventListener("click", mybuttonHandler);
    class Event {
        interpret;
        price;
        constructor(interpret, price) {
            this.interpret = interpret;
            this.price = price;
        }
        tabelleEintragen() {
            const newZeile = document.createElement("tr");
            const newInterpret = document.createElement("td");
            newInterpret.textContent = this.interpret;
            const newPrice = document.createElement("td");
            newPrice.textContent = String(this.price);
            display.appendChild(newZeile);
            newZeile.appendChild(newInterpret);
            newZeile.appendChild(newPrice);
        }
    }
    function mybuttonHandler() {
        let interpretValue = interpretInput.value;
        let priceValue = Number(priceInput.value);
        new Event(interpretValue, priceValue);
    }
})(Eventtabelle || (Eventtabelle = {}));
//# sourceMappingURL=script.js.map