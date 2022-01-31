namespace detailansicht {
  const display: HTMLElement = <HTMLElement>document.getElementById("display");
  const searchURI: URLSearchParams = new URLSearchParams(window.location.search);
  console.log(searchURI.get("id"));
  get();

  interface Produkte {
    _id?: string;
    Name: string;
    Ablaufdatum: Date;
    Notiz: string;
    Eingabedatum: Date;


  }

  async function get(): Promise<void> {
    let response: Response = await fetch("http://localhost:3000/details?id=" + searchURI.get("id"), {
      method: "GET"
    });
    let antwort: string = await response.text();
    let produkte: Produkte[] = JSON.parse(antwort) as Produkte[];
    for (let produkt of produkte) {
      ausgabe(produkt);
    }
  }

  function ausgabe(produkt: Produkte): void {
    let newName: string = produkt.Name;
    let newAblaufdatum: Date = new Date(produkt.Ablaufdatum);
    let newNotiz: string = produkt.Notiz;
    let newEingabedatum: Date = new Date(produkt.Eingabedatum);
    let deletebutton: HTMLButtonElement = document.createElement("button");
    deletebutton.textContent = "Löschen";
    deletebutton.style.color = "red";
    deletebutton.style.background = "black";





    const newNameElement: HTMLTableCellElement = document.createElement("td");
    newNameElement.textContent = newName;

    const newAblaufdatumElement: HTMLTableCellElement = document.createElement("td");
    newAblaufdatumElement.textContent = (newAblaufdatum.toLocaleDateString());

    const newNotizElement: HTMLTableCellElement = document.createElement("td");
    newNotizElement.textContent = newNotiz;

    const newEingabedatumElement: HTMLTableCellElement = document.createElement("td");
    newEingabedatumElement.textContent = (newEingabedatum.toLocaleDateString());

    const newReihe: HTMLTableRowElement = document.createElement("tr");
    deletebutton.addEventListener("click", function (): void {
      löschen(produkt._id);


    });



    display.appendChild(newReihe);
    newReihe.appendChild(newNameElement);
    newReihe.appendChild(newAblaufdatumElement);
    newReihe.appendChild(newNotizElement);
    newReihe.appendChild(newEingabedatumElement);
    newReihe.appendChild(deletebutton);


  }
  async function löschen(id: string): Promise<void> {
    document.location.href = "Detailansicht.html?id=" + id;
    await fetch("http://localhost:3000/remove?id=" + id, {
      method: "POST"
    });
  }
  

}
