"use strict";
var Eingabe;
(function (Eingabe) {
    const inputName = document.getElementById("Produktname");
    const inputAblaufdatum = document.getElementById("Ablaufdatum");
    const inputNotiz = document.getElementById("Notiz");
    const myButton = document.getElementById("EnterButton");
    const vorhandeneEingaben = document.getElementById("vorhandeneProdukte");
    myButton.addEventListener("click", mybuttonHandler);
    einträgehinzufügen();
    function mybuttonHandler() {
        // tslint:disable-next-line: variable-name
        let Namevalue = inputName.value;
        // tslint:disable-next-line: variable-name
        let Ablaufdatumvalue = new Date(inputAblaufdatum.value);
        // tslint:disable-next-line: variable-name
        let Notizvalue = inputNotiz.value;
        // tslint:disable-next-line: variable-name
        let Eingabedatumvalue = new Date();
        const newNameElement = document.createElement("td");
        newNameElement.textContent = Namevalue;
        const newPriceElement = document.createElement("td");
        newPriceElement.textContent = Ablaufdatumvalue.toLocaleDateString();
        const newNotizElement = document.createElement("td");
        newNotizElement.textContent = Notizvalue;
        const newEingabedatumElement = document.createElement("td");
        newEingabedatumElement.textContent = Eingabedatumvalue.toLocaleDateString();
        let produkt = {
            Name: Namevalue,
            Ablaufdatum: Ablaufdatumvalue,
            Notiz: Notizvalue,
            Eingabedatum: Eingabedatumvalue
        };
        post(produkt);
    }
    async function post(produkt) {
        console.log(produkt);
        await fetch("http://localhost:3000/produkt", {
            method: "POST",
            body: JSON.stringify(produkt)
        });
    }
    async function einträgehinzufügen() {
        let response = await fetch("http://localhost:3000/produkt", {
            method: "GET"
        });
        let antwort = await response.text();
        let produkte = JSON.parse(antwort);
        for (let produkt of produkte) {
            const newEingabe = document.createElement("option");
            newEingabe.value = produkt.Name;
            vorhandeneEingaben.appendChild(newEingabe);
        }
    }
})(Eingabe || (Eingabe = {}));
//# sourceMappingURL=scripteingabe.js.map