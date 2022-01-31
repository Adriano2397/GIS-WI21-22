namespace ProduktTabelle {

  const inputName: HTMLInputElement = <HTMLInputElement>document.getElementById("Produktname");
  const inputAblaufdatum: HTMLInputElement = <HTMLInputElement>document.getElementById("Ablaufdatum"); 
  const inputNotiz: HTMLInputElement = <HTMLInputElement>document.getElementById("Notiz");  
  const myButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("EnterButton");
  myButton.addEventListener("click", mybuttonHandler);
  
  interface Produkte {
      _id?: string;
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
    await fetch("http://localhost:3000/produkt", {
      method: "POST",
      body: JSON.stringify(produkt)
    });
  }
}