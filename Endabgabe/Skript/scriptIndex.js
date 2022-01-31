"use strict";
var Index;
(function (Index) {
    const display = document.getElementById("display");
    get();
    async function get() {
        let response = await fetch("http://localhost:3000/produkt", {
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
        let detailsbutton = document.createElement("button");
        detailsbutton.textContent = "Details";
        detailsbutton.style.color = "blue";
        const newNameElement = document.createElement("td");
        newNameElement.textContent = newName;
        const newAblaufdatumElement = document.createElement("td");
        newAblaufdatumElement.textContent = (newAblaufdatum.toLocaleDateString());
        const newReihe = document.createElement("tr");
        detailsbutton.addEventListener("click", function () {
            seiteaufrufen(produkt._id);
        });
        display.appendChild(newReihe);
        newReihe.appendChild(newNameElement);
        newReihe.appendChild(newAblaufdatumElement);
        newReihe.appendChild(detailsbutton);
    }
    function seiteaufrufen(id) {
        document.location.href = "Detailansicht.html?id=" + id;
    }
})(Index || (Index = {}));
//# sourceMappingURL=scriptIndex.js.map