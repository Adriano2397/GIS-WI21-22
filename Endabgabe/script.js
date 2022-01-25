"use strict";
var ProduktTabelle;
(function (ProduktTabelle) {
    const inputName = document.getElementById("Name");
    const inputAblaufdatum = document.getElementById("Ablaufdatum");
    const inputNotiz = document.getElementById("Notiz");
    const display = document.getElementById("display");
    const myButton = document.getElementById("EnterButton");
    myButton.addEventListener("click", mybuttonHandler);
    get();
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
        const newReihe = document.createElement("tr");
        display.appendChild(newReihe);
        newReihe.appendChild(newNameElement);
        newReihe.appendChild(newPriceElement);
        newReihe.appendChild(newNotizElement);
        newReihe.appendChild(newEingabedatumElement);
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
        await fetch("http://localhost:3000/concertEvents", {
            method: "POST",
            body: JSON.stringify(produkt)
        });
    }
    async function get() {
        let response = await fetch("http://localhost:3000/concertEvents", {
            method: "GET"
        });
        let antwort = await response.text();
        let produkte = JSON.parse(antwort);
        for (let produkt of produkte) {
            ausgabe(produkt);
        }
    }
    function ausgabe(produkt) {
        let newName = produkt.Name;
        let newAblaufdatum = produkt.Ablaufdatum;
        let newNotiz = produkt.Notiz;
        let newEingabedatum = produkt.Eingabedatum;
        const newNameElement = document.createElement("td");
        newNameElement.textContent = newName;
        const newPriceElement = document.createElement("td");
        newPriceElement.textContent = String(newAblaufdatum);
        const newNotizElement = document.createElement("td");
        newNotizElement.textContent = newNotiz;
        const newEingabedatumElement = document.createElement("td");
        newEingabedatumElement.textContent = String(newEingabedatum);
        const newReihe = document.createElement("tr");
        display.appendChild(newReihe);
        newReihe.appendChild(newNameElement);
        newReihe.appendChild(newPriceElement);
        newReihe.appendChild(newNotizElement);
        newReihe.appendChild(newEingabedatumElement);
    }
})(ProduktTabelle || (ProduktTabelle = {}));
//# sourceMappingURL=script.js.map