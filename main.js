function startPlay(){

    let chooseLevel = document.getElementById("level").value

    let gridContainer = document.getElementById("grid-container") //variabile per collegare il contenitore principale ai singoli div

    gridContainer.innerHTML = "";

    let bombsArray = [] //creazione dell'array in cui vengono create le 16 bombe random

    // let bombsCheck = 0 //contatore creato in fase di sviluppo per controllare che vengano prodotte tutte le 16 bombe alla fine di tutti i cicli (uniche)

    let safeNumbersToggled = [];//array in cui vengono salvati i numeri cliccati progressivamente 
                                //(da usare per controllare quando terminare la partita se vinta, max num raggiunti)

    //ciclo while per creazione bombe uniche (numeri rnd unici)
    while(bombsArray.length < 16){
        let randomBombNumber = Math.round(Math.random()*(chooseLevel - 1)) + 1; //le bombe vengono create in un range tra 1 e il numero dei quadratini generati in base al level selezionato
        if(bombsArray.includes(randomBombNumber)){
        }
        else{
            bombsArray.push(randomBombNumber)
        }
    }

    //funzione per creare i singoli quadratini che possono essere bombe o numeri
    function createSquare(num){
        let cell = document.createElement("div")

        if (chooseLevel == 100){
            cell.classList.add("easy-cell"); 
        } else if (chooseLevel == 81){
            cell.classList.add("medium-cell"); 
        } else {
            cell.classList.add("hard-cell");
        }
            cell.classList.add("cell", "border", "border-1", "border-dark", "d-flex", "justify-content-center", "align-items-center", "p-0", 'text-lg')

            //all'interno del ciclo for seguente, la funzione controlla se i (il numero di "identità" del quadratino da creare)
            //è presente nell'array delle bombe, se c'è lo chiama boom, else num (parametro che verrà sostituito dalla i del ciclo seguente)
            if(bombsArray.includes(i)){
                cell.classList.add("bombs")
                cell.innerText = num //"B" //debug per vedere sempre dove sono le bombe
                // bombsCheck += 1; contatore di controllo in fase di sviluppo
            }

            else{
                cell.innerText = num
            }

            return cell;
    }

    for(i = 1; i <= chooseLevel; i++){
        let thisSquare = createSquare(i);

        if(bombsArray.includes(i)){

            thisSquare.addEventListener("click", 
            function activateSquare(){
                console.log(this.innerText);
                this.classList.add("boom");
                document.getElementById("lose").innerHTML = "You Lose :( Your score is: " + safeNumbersToggled.length
                
                let bombs = document.getElementsByClassName("bombs");
                for(i = 0; i < bombs.length; i++){
                    bombs[i].classList.add('boom');
                }

                document.getElementById("resetBtn").classList.add("btn-outline-danger", "border", "border-4", "border-danger")

                document.getElementById("main").style.pointerEvents = "none";
                document.getElementById("playBtn").style.pointerEvents = "none";
                document.getElementById("level").style.pointerEvents = "none";

            })

        }

        else{
            
            thisSquare.addEventListener("click", 
            function activateSquare(){
                console.log(this.innerText);
                this.classList.add("safe-number")
                safeNumbersToggled.push(this)
                console.log(safeNumbersToggled.length);
                document.getElementById("score").innerHTML = + safeNumbersToggled.length
                
                if(safeNumbersToggled.length == chooseLevel - bombsArray.length){
                    document.getElementById("lose").innerHTML = "You Win, Legend! Your score is: " + safeNumbersToggled.length

                    document.getElementById("main").style.pointerEvents = "none";
                    document.getElementById("playBtn").style.pointerEvents = "none";
                    document.getElementById("level").style.pointerEvents = "none";
                }
                else{

                }

            })

        }

        console.log(thisSquare);

        gridContainer.append(thisSquare)
    }

    console.log(bombsCheck);

}

function reset(){
    location.reload();
}


