// recupero gli elementi html che mi servono (bottone, select, box-container)
const playButton = document.getElementById("play-button");
const difficultyRange = document.getElementById("difficulty");
const boxContainer = document.getElementById("box-container");

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
  console.log(box);
}

// creo una funzione che genera una griglia sfruttando quella che genera una box
function createGrid(boxesNum) {
  for (let i = 0; i < boxesNum; i++) {
    createBox();
  }
}

// genero la griglia quando l'utente clicca sul pulsante "play" con un numero di box diverso a seconda del livello di difficoltà scelto
playButton.addEventListener("click", function () {
  boxContainer.innerHTML = "";
  if (difficultyRange.value == "easy") {
    createGrid(100);
  } else if (difficultyRange.value == "medium") {
    createGrid(81);
  } else {
    createGrid(49);
  }
});