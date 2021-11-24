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
        }
    }
    function mybuttonHandler() {
        let interpretValue = interpretInput.value;
        let priceValue = Number(priceInput.value);
        const newZeile = document.createElement("tr");
        const newInterpret = document.createElement("td");
        newInterpret.textContent = interpretValue;
        const newPrice = document.createElement("td");
        newPrice.textContent = String(priceValue);
        display.appendChild(newZeile);
        newZeile.appendChild(newInterpret);
        newZeile.appendChild(newPrice);
    }
})(Eventtabelle || (Eventtabelle = {}));
//# sourceMappingURL=script.js.map