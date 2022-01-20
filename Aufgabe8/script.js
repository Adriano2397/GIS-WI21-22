"use strict";
var EventTabelle;
(function (EventTabelle) {
    const inputIntpret = document.getElementById("interpret");
    const inputPrice = document.getElementById("price");
    const display = document.getElementById("display");
    const myButton = document.getElementById("EnterButton");
    myButton.addEventListener("click", mybuttonHandler);
    get();
    function mybuttonHandler() {
        let interpretValue = inputIntpret.value;
        let priceValue = Number(inputPrice.value);
        const newInterpretElement = document.createElement("td");
        newInterpretElement.textContent = interpretValue;
        const newPriceElement = document.createElement("td");
        newPriceElement.textContent = String(priceValue);
        const newReihe = document.createElement("tr");
        display.appendChild(newReihe);
        newReihe.appendChild(newInterpretElement);
        newReihe.appendChild(newPriceElement);
        let konzertEvent = {
            interpret: interpretValue,
            price: priceValue
        };
        post(konzertEvent);
    }
    async function post(konzertEvent) {
        console.log(konzertEvent);
        await fetch("http://localhost:3000/concertEvents", {
            method: "POST",
            body: JSON.stringify(konzertEvent)
        });
    }
    async function get() {
        let response = await fetch("http://localhost:3000/concertEvents", {
            method: "GET"
        });
        let text = await response.text();
        let konzerte = JSON.parse(text);
        for (let konzert of konzerte) {
            print(konzert);
        }
    }
    function print(konzertEvent) {
        let newInterpret = konzertEvent.interpret;
        let newPrice = konzertEvent.price;
        const newInterpretElement = document.createElement("td");
        newInterpretElement.textContent = newInterpret;
        const newPriceElement = document.createElement("td");
        newPriceElement.textContent = String(newPrice);
        const newReihe = document.createElement("tr");
        display.appendChild(newReihe);
        newReihe.appendChild(newInterpretElement);
        newReihe.appendChild(newPriceElement);
    }
})(EventTabelle || (EventTabelle = {}));
//# sourceMappingURL=script.js.map