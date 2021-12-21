"use strict";
var Client;
(function (Client) {
    console.log("Client läuft");
    const url = "http://127.0.0.1:3000";
    const path = "/convertDate";
    const myForm = document.getElementById("date-ges");
    const sendButton = document.getElementById("sendButton");
    const display = document.getElementById("display");
    sendButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        sendForm();
    });
    console.log(myForm, sendButton);
    async function sendForm() {
        let formData = new FormData(myForm);
        let query = new URLSearchParams(formData);
        let urlWithQuery = url + path + "?" + query.toString();
        let response = await fetch(urlWithQuery);
        let responseText = await response.text();
        let ausgabe = document.createElement("p");
        ausgabe.textContent = responseText;
        display.appendChild(ausgabe);
        console.log(responseText);
    }
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map