"use strict";
var detailansicht;
(function (detailansicht) {
    const display = document.getElementById("display");
    const searchURI = new URLSearchParams(window.location.search);
    const einträge = document.createElement("option");
    console.log(searchURI.get("id"));
    get();
    async function get() {
        let response = await fetch("http://localhost:3000/details?id=" + searchURI.get("id"), {
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
        let newAblaufdatum = new Date(produkt.Ablaufdatum);
        let newNotiz = produkt.Notiz;
        let newEingabedatum = new Date(produkt.Eingabedatum);
        let deletebutton = document.createElement("button");
        deletebutton.textContent = "Löschen";
        deletebutton.style.color = "red";
        deletebutton.style.background = "black";
        const newNameElement = document.createElement("td");
        newNameElement.textContent = newName;
        const newAblaufdatumElement = document.createElement("td");
        newAblaufdatumElement.textContent = (newAblaufdatum.toLocaleDateString());
        const newNotizElement = document.createElement("td");
        newNotizElement.textContent = newNotiz;
        const newEingabedatumElement = document.createElement("td");
        newEingabedatumElement.textContent = (newEingabedatum.toLocaleDateString());
        const newReihe = document.createElement("tr");
        deletebutton.addEventListener("click", function () {
            löschen(produkt._id);
        });
        display.appendChild(newReihe);
        newReihe.appendChild(newNameElement);
        newReihe.appendChild(newAblaufdatumElement);
        newReihe.appendChild(newNotizElement);
        newReihe.appendChild(newEingabedatumElement);
        newReihe.appendChild(deletebutton);
    }
    async function löschen(id) {
        document.location.href = "Detailansicht.html?id=" + id;
        await fetch("http://localhost:3000/remove?id=" + id, {
            method: "POST"
        });
    }
})(detailansicht || (detailansicht = {}));
//# sourceMappingURL=scriptdetailansicht.js.map