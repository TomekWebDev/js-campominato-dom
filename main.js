

//variabile per collegare il contenitore principale
let gridContainer = document.getElementById("grid-container")
// gridContainer.innerHTML = "";

let bombsArray = [] //creazione dell'array in cui vengono create le 16 bombe random

let bombsCheck = 0 //contatore creato in fase di sviluppo per controllare che vengano prodotte tutte le 16 bombe alla fine di tutti i cicli (uniche)

let safeNumbersToggled = [];//array in cui vengono salvati i numeri cliccati progressivamente 
//(da usare per controllare quando terminare la partita se vinta, max num raggiunti)

//ciclo while per creazione bombe uniche (numeri rnd unici)
while(bombsArray.length < 16){
    let randomBombNumber = Math.round(Math.random()*(100 - 1)) + 1;

    if(bombsArray.includes(randomBombNumber)){
    }

    else{
        bombsArray.push(randomBombNumber)
    }
}

//display dell'array delle bombe
console.log(bombsArray);

//funzione per creare i singoli quadratini che possono essere bombe o numeri
function createSquare(num){
    let cell = document.createElement("div")
        cell.classList.add("cell", "border", "border-1", "border-dark", "d-flex", "justify-content-center", "align-items-center", "p-0", 'text-lg')

        //all'interno del ciclo for seguente, la funzione controlla se i (il numero di "identità" del quadratino da creare)
        //è presente nell'array delle bombe, se c'è lo chiama boom, else num(parametro che verrà sostituito dalla i del ciclo seguente)
        if(bombsArray.includes(i)){
            // cell.classList.add("boom")
            cell.innerText = "B"
            bombsCheck += 1;
        }

        else{
            cell.innerText = num
        }

        return cell;
}

for(i = 1; i <= 100; i++){
    let thisSquare = createSquare(i);

    if(bombsArray.includes(i)){

        thisSquare.addEventListener("click", 
        function activateSquare(){
            console.log(this.innerText);
            this.classList.add("boom")
        })

    }

    else{
        
        thisSquare.addEventListener("click", 
        function activateSquare(){
            console.log(this.innerText);
            this.classList.add("safe-number")
            safeNumbersToggled.push(this)
            console.log(safeNumbersToggled.length);
        })

    }

    // thisSquare.addEventListener("click", function activateSquare(){
    // console.log(this);
    // this.classList.toggle("active")
    // })

    console.log(thisSquare);

    gridContainer.append(thisSquare)
}

console.log(bombsCheck);