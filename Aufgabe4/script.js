"use strict";
var Eventtabelle;
(function (Eventtabelle) {
    const interpretInput = document.getElementById("interpretInput");
    const priceInput = document.getElementById("priceInput");
    const display = document.getElementById("display");
    const myButton = document.getElementById("enterButton");
    const inputElement = document.getElementById("inputElement");
    const savebutton = document.getElementById("savebutton");
    const loadbutton = document.getElementById("loadbutton");
    savebutton.addEventListener("click", saveButtonHandler);
    loadbutton.addEventListener("click", loadButtonHandler);
    function saveButtonHandler() {
        let speicher = [];
        let arrayLocalStorage;
        let arrayString = JSON.stringify(speicher);
        function loadButtonHandler() {
            let valueFromLocalStorage = localStorage.getItem("gis_praktikum_input");
            console.log("aktuelle Wert im Local Storage: " + valueFromLocalStorage);
            display.textContent = valueFromLocalStorage;
            localStorage.setItem("myArray", arrayString);
            let stringLocalStorage = localStorage.getItem("myArray");
            arrayLocalStorage = JSON.parse(stringLocalStorage);
        }
        myButton.addEventListener("click", mybuttonHandler);
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
        }
    }
})(Eventtabelle || (Eventtabelle = {}));
//# sourceMappingURL=script.js.map