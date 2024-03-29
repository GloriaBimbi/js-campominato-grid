// recupero gli elementi html che mi servono (bottone, select, box-container)
const playButton = document.getElementById("play-button");
const difficultyRange = document.getElementById("difficulty");
const boxContainer = document.getElementById("box-container");
const loseMessage = document.getElementById("loser-message");

// creo una funzione per generare una box e darle la classe "box" e la classe che fa riferimento al livello di difficoltà scelto dall'utente ("easy", "medium" o "hard")
function createBox() {
  let box = document.createElement("div");
  boxContainer.append(box);
  box.classList.add("box");
  if (difficultyRange.value == "easy") {
    box.classList.add("easy");
  } else if (difficultyRange.value == "medium") {
    box.classList.add("medium");
  } else {
    box.classList.add("hard");
  }

  return box;
}

// creo un array che tiene traccia delle celle cliccate dall'utente e una variabile che conta quante celle sono state cliccate
const boxCounterArray = [];
let boxCounter = 0;
// creo una funzione che genera una griglia sfruttando quella che genera una box
function createGrid(boxesNum) {
  for (let i = 1; i <= boxesNum; i++) {
    // salvo la funzione che genera una box in una variabile
    let boxElement = createBox();
    // aggiungo alle singole box il loro numero al centro
    boxElement.classList.add(
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    boxElement.innerText = i;
    console.log(i, boxElement);

    // creo un evento sul click dell'utente su una box
    boxElement.addEventListener("click", function () {
      // quando l'utente clicca su una box, questa si colora di azzurro
      this.classList.add("hover-back-ground-winner");
      console.log("Hai cliccato la cella numero: " + this.innerText);
      // creo un ciclo che permette di colorare di rosso le caselle che vengono premute, se il loro numero è contenuto nell'array delle bombe
      for (let i = 0; i < bombsArray.length; i++) {
        if (bombsArray[i] == boxElement.innerText) {
          this.classList.add("hover-back-ground-loser");
          loseMessage.classList.remove("invisible");
          loseMessage.classList.add("visible");
        }
      }
      // creo un if per contare quante caselle vengono premute dall'utente prima che schiacci su una bomba, facendo aumentare il counter se l'innterText della box non è dentro all'array delle bombe
      if (!boxCounterArray.includes(boxElement.innerText)) {
        boxCounterArray.push(boxElement.innerText);
        boxCounter++;
        console.log(
          "Hai cliccato " + boxCounter + " caselle" + " su " + boxesNum
        );
        console.log(boxCounterArray);
      }

      // sulla base del livello di difficoltà scelto, quando l'utente ha schiacchiato su tutte le caselle senza bombe prima di trovare una bomba, faccio uscire un alert che comunica la vittoria
      if (
        difficultyRange.value == "easy" &&
        boxCounterArray.length == 100 - bombsArray.length
      ) {
        alert("HAI SUPERATO IL LIVELLO FACILE");
      } else if (
        difficultyRange.value == "medium" &&
        boxCounterArray.length == 81 - bombsArray.length
      ) {
        alert("HAI SUPERATO IL LIVELLO INTERMEDIO!");
      } else if (
        difficultyRange.value == "hard" &&
        boxCounterArray.length == 49 - bombsArray.length
      ) {
        alert("HAI SUPERATO IL LIVELLO DIFFICILE! COMPLIMENTI!");
      }
    });
  }
}

// genero la griglia quando l'utente clicca sul pulsante "play" con un numero di box diverso a seconda del livello di difficoltà scelto
playButton.addEventListener("click", function () {
  boxContainer.innerHTML = "";
  if (difficultyRange.value == "easy") {
    createGrid(100);
    generateBombList(16, 100);
    console.log(bombsArray);
  } else if (difficultyRange.value == "medium") {
    createGrid(81);
    generateBombList(16, 91);
    console.log(bombsArray);
  } else {
    createGrid(49);
    generateBombList(16, 49);
    console.log(bombsArray);
  }
});

// creo una funzione che genera dei numeri casuali
function generateRandomNumber(min, max) {
  arrayElement = Math.floor(Math.random() * (max + min - 1) + 1);
  return arrayElement;
}

// creo un array per la lista delle posizioni delle bombe
let bombsArray = [];
// creo una funzione per generare un array di bombe sulla base del numero delle bombe che voglio (bombsNumber) e delle celle che si hanno (cellsNumber)
function generateBombList(bombsNumber, cellsNumber) {
  while (bombsArray.length < bombsNumber) {
    const bombElement = generateRandomNumber(1, cellsNumber - 1);
    if (!bombsArray.includes(bombElement)) {
      bombsArray.push(bombElement);
    }
  }

  // restituisco la lista delle bombe
  return bombsArray;
}
