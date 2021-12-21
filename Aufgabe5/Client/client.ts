 namespace Client {
    console.log("Client läuft");
    const url: string = "http://127.0.0.1:3000";
    const path: string = "/convertDate";


    const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("date-ges");
    const sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendButton");
    const display: HTMLButtonElement = <HTMLButtonElement>document.getElementById("display");




    sendButton.addEventListener("click", function (evt: Event){
        evt.preventDefault();
        sendForm();
    });

    console.log(myForm, sendButton);


    async function sendForm(): Promise<void> {
        let formData: FormData = new FormData(<HTMLFormElement>myForm);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let urlWithQuery: string = url + path + "?" + query.toString();

        let response: Response = await fetch(urlWithQuery);
        let responseText: string = await response.text();

        let ausgabe: HTMLElement = document.createElement("p");
        ausgabe.textContent = responseText;
        display.appendChild(ausgabe);
        console.log(responseText);
    }
}