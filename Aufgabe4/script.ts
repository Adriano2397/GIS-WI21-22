namespace Eventtabelle {

  const interpretInput: HTMLInputElement = <HTMLInputElement>document.getElementById("interpretInput");
  const priceInput: HTMLInputElement = <HTMLInputElement>document.getElementById("priceInput");
  const display: HTMLElement = <HTMLElement>document.getElementById("display");
  const myButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enterButton");
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("inputElement");
  const savebutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("savebutton");
  const loadbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("loadbutton");


  savebutton.addEventListener("click", saveButtonHandler);
  loadbutton.addEventListener("click", loadButtonHandler);

  function saveButtonHandler(): void {
    let speicher: number[] = [];
    let arrayLocalStorage: number[];
    let arrayString: string = JSON.stringify(speicher)


    function loadButtonHandler(): void {
      let valueFromLocalStorage: string = localStorage.getItem("gis_praktikum_input");
      console.log("aktuelle Wert im Local Storage: " + valueFromLocalStorage);
      display.textContent = valueFromLocalStorage;
      localStorage.setItem("myArray", arrayString);
      let stringLocalStorage: string = localStorage.getItem("myArray")
      arrayLocalStorage = JSON.parse(stringLocalStorage);


    }



    myButton.addEventListener("click", mybuttonHandler);


    function mybuttonHandler() {
      let interpretValue: string = interpretInput.value;
      let priceValue: number = Number(priceInput.value);
      let deleteButton: HTMLButtonElement = document.createElement("button");
      deleteButton.textContent = "Delete";



      const newZeile: HTMLTableRowElement = document.createElement("tr")
      const newInterpret: HTMLTableCellElement = document.createElement("td");
      newInterpret.textContent = interpretValue;
      const newPrice: HTMLTableCellElement = document.createElement("td");
      newPrice.textContent = String(priceValue);

      deleteButton.addEventListener("click", deleteEvent);


      display.appendChild(newZeile);
      newZeile.appendChild(newInterpret);
      newZeile.appendChild(newPrice);
      newZeile.appendChild(deleteButton);


      function deleteEvent(): void {
        newZeile.removeChild(newInterpret);
        newZeile.removeChild(newPrice);
        newZeile.removeChild(deleteButton);


      }

    }
  }

}