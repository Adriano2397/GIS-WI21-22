namespace ProduktTabelle {

  const inputName: HTMLInputElement = <HTMLInputElement>document.getElementById("Name");
  const inputAblaufdatum: HTMLInputElement = <HTMLInputElement>document.getElementById("Ablaufdatum"); 
  const inputNotiz: HTMLInputElement = <HTMLInputElement>document.getElementById("Notiz");  
  const display: HTMLElement = <HTMLElement>document.getElementById("display"); 
  const myButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("EnterButton");
  myButton.addEventListener("click", mybuttonHandler);
  get();
  
  interface Produkte {
      Name: string;
      Ablaufdatum: Date;
      Notiz: string;
      Eingabedatum: Date;
  }
  
  function mybuttonHandler(): void {
      // tslint:disable-next-line: variable-name
      let Namevalue: string = inputName.value;
      // tslint:disable-next-line: variable-name
      let Ablaufdatumvalue: Date = new Date(inputAblaufdatum.value);
      // tslint:disable-next-line: variable-name
      let Notizvalue: string = inputNotiz.value;
      // tslint:disable-next-line: variable-name
      let Eingabedatumvalue: Date = new Date();

  
      const newNameElement: HTMLTableCellElement = document.createElement("td"); 
      newNameElement.textContent = Namevalue;
      const newPriceElement: HTMLTableCellElement = document.createElement("td");
      newPriceElement.textContent = Ablaufdatumvalue.toLocaleDateString();
      const newNotizElement: HTMLTableCellElement = document.createElement("td"); 
      newNotizElement.textContent = Notizvalue;
      
      const newEingabedatumElement: HTMLTableCellElement = document.createElement("td"); 
      newEingabedatumElement.textContent = Eingabedatumvalue.toLocaleDateString();
  
      const newReihe: HTMLTableRowElement = document.createElement("tr"); 
    
      display.appendChild(newReihe);
      newReihe.appendChild(newNameElement);
      newReihe.appendChild(newPriceElement);
      newReihe.appendChild(newNotizElement);
      newReihe.appendChild(newEingabedatumElement);
  
      let produkt: Produkte = {
        Name: Namevalue, 
        Ablaufdatum: Ablaufdatumvalue,
        Notiz: Notizvalue,
        Eingabedatum: Eingabedatumvalue
      };
      post(produkt);
    
  }
  
  async function post(produkt: Produkte): Promise<void> {
    console.log(produkt);
    await fetch("http://localhost:3000/concertEvents", {
      method: "POST",
      body: JSON.stringify(produkt)
    });
  }
  
  async function get(): Promise<void> {
    let response: Response = await fetch("http://localhost:3000/concertEvents", {
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
    let newAblaufdatum: Date = produkt.Ablaufdatum;
    let newNotiz: string = produkt.Notiz;
    let newEingabedatum: Date = produkt.Eingabedatum;

  
    const newNameElement: HTMLTableCellElement = document.createElement("td"); 
    newNameElement.textContent = newName;
    const newPriceElement: HTMLTableCellElement = document.createElement("td");
    newPriceElement.textContent = String(newAblaufdatum);
    const newNotizElement: HTMLTableCellElement = document.createElement("td"); 
    newNotizElement.textContent = newNotiz;
    const newEingabedatumElement: HTMLTableCellElement = document.createElement("td"); 
    newEingabedatumElement.textContent = String(newEingabedatum);
    
    const newReihe: HTMLTableRowElement = document.createElement("tr"); 
  
    display.appendChild(newReihe);
    newReihe.appendChild(newNameElement);
    newReihe.appendChild(newPriceElement);
    newReihe.appendChild(newNotizElement);
    newReihe.appendChild(newEingabedatumElement);
  }
}