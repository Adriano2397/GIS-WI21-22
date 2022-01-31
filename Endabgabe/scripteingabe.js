"use strict";
var ProduktTabelle;
(function (ProduktTabelle) {
    const inputName = document.getElementById("Produktname");
    const inputAblaufdatum = document.getElementById("Ablaufdatum");
    const inputNotiz = document.getElementById("Notiz");
    const myButton = document.getElementById("EnterButton");
    myButton.addEventListener("click", mybuttonHandler);
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
})(ProduktTabelle || (ProduktTabelle = {}));
//# sourceMappingURL=scripteingabe.js.map