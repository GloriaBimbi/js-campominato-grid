# GRIGLIA CAMPO MINATO

## Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

### Bonus

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## SVOLGIMENTO:

- recupero gli elementi html che mi servono (bottone, select, box-container)
- creo una funzione per generare una box e darle la classe "box" e la classe che fa riferimento al livello di difficoltà scelto dall'utente ("easy", "medium" o "hard")
- creo una funzione che genera una griglia sfruttando quella che genera una box
  - salvo la funzione che genera una box in una variabile
  - aggiungo alle singole box il loro numero al centro
  - creo un evento sul click dell'utente su una box
    - quando l'utente clicca su una box, questa si colora di azzurro e in console stampo il numero della box cliccata
- genero la griglia quando l'utente clicca sul pulsante "play" con un numero di box diverso a seconda del livello di difficoltà scelto
