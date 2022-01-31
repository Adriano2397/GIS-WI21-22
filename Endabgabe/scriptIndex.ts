namespace ProduktTabelle {
    const display: HTMLElement = <HTMLElement>document.getElementById("display"); 
    
  
     
    
    get();
    
    interface Produkte {
        _id?: string;
        Name: string;
        Ablaufdatum: Date;
        
    
    }
    
    async function get(): Promise<void> {
      let response: Response = await fetch("http://localhost:3000/produkt", {
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
      let detailsbutton: HTMLButtonElement = document.createElement("button");
      detailsbutton.textContent = "Details";
      detailsbutton.style.color = "blue";
      
      const newNameElement: HTMLTableCellElement = document.createElement("td"); 
      newNameElement.textContent = newName;
      const newAblaufdatumElement: HTMLTableCellElement = document.createElement("td");
      newAblaufdatumElement.textContent = (newAblaufdatum.toLocaleDateString());
      const newReihe: HTMLTableRowElement = document.createElement("tr"); 
      detailsbutton.addEventListener("click", function(): void {
        seiteaufrufen(produkt._id);
    });
    
      display.appendChild(newReihe);
      newReihe.appendChild(newNameElement);
      newReihe.appendChild(newAblaufdatumElement);
      newReihe.appendChild(detailsbutton);
      
    }
    
    function seiteaufrufen(id: String): void {
        document.location.href = "Detailansicht.html?id=" + id;
    }

}