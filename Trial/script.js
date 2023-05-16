import { WORDS } from "./words.js";
// Global Variables
const number_of_guesses = 6;
let guessesRemaning = number_of_guesses;
let currentGuess = [];
let letterIndex = 0;
let rightGuess = WORDS[Math.floor(Math.random() * WORDS.length)]
let rightGuessArr = Array.from(rightGuess)
console.log(rightGuess)
// Initial Board
function initBoard(){
    let board = document.getElementById("game-board");
    
    for (let i = 0; i < number_of_guesses; i++){
        let row = document.createElement('div');
        row.className = 'row'
        for (let j = 0; j < 5; j++) {
            let box = document.createElement('div');
            box.className = 'box'
            row.appendChild(box);
        }
        board.appendChild(row);
    }
}
// Main function
document.addEventListener("keyup",(e) => {

    if(guessesRemaning === 0){
        return;
    }

    let pressedKey = String(e.key)
    if(pressedKey === "Backspace" && letterIndex !== 0){
        deleteLetter()
        console.log("delete")
        return;
    }
    if(pressedKey === "Enter"){
        check()
        return;
    }
    let filter = pressedKey.match(/[a-z]/gi)
    if(!filter || filter.length > 1){
        return
    }else{insertLetter(pressedKey)}
})
// user input using keyboard
function insertLetter(pressedKey){
    if(letterIndex === 5 ){
        return
    }
    let row = document.getElementsByClassName("row")[6 - guessesRemaning]
    let box = row.children[letterIndex]
    pressedKey = pressedKey.toLowerCase()
    box.textContent = pressedKey
    box.classList.add("filled-box")
    currentGuess.push(pressedKey)
    console.log(currentGuess.length)
    console.log(currentGuess)
    letterIndex +=1;
}

// user input using on-Screen keyboard
document.getElementById("keyboard-cont").addEventListener("click", (e) => {
    const target = e.target;
    let key = target.textContent

    // check for normal buttons --- Just to make sure it's not Backspace
    if (target.classList.contains("keyboard-button")) {
      console.log("Button clicked!");
    }
    // Check for Backspace button
     else if(target.closest(".keyboard-button")) {
      key = "Backspace";
      console.log("SVG clicked!");
    }
    document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
  });
// Deleting Letter Function
function deleteLetter(pressedKey){
    let row = document.getElementsByClassName("row")[6 - guessesRemaning]
    let box = row.children[letterIndex - 1]
    box.textContent = ""
    box.classList.remove("filled-box")
    currentGuess.pop(pressedKey)
    letterIndex -= 1;
}
function check(){
    let row = document.getElementsByClassName("row")[6 - guessesRemaning]
    let myword = currentGuess.join('')
    if(currentGuess.length != 5){
        alert("Not Enough Letters")
        return
    }
    if(!WORDS.includes(myword)){
        alert("Word not in the list!")
        return
    }

    for(let i = 0; i< 5; i++){
        let boxColor = ''
        let box = row.children[i]
        let letter = currentGuess[i]
        let letterPosition = rightGuessArr.indexOf(currentGuess[i])

        if(letterPosition === -1){
            boxColor = "var(--empty)"
        }else{

            if(rightGuess[i] === currentGuess[i]){
                boxColor = "var(--right)"
            }else{
                boxColor = "var(--wrong)"
            }

        }
        setTimeout(()=> {
            box.style.backgroundColor = boxColor
            // Key board color function not implemented yet!!!!!
            keyboardColor(letter,boxColor) 
        },250 * i)
    }
    if(myword === rightGuess){
        alert("You Guessed right!")
        guessesRemaning = 0
        return
    }else{
        guessesRemaning -= 1
        currentGuess = []
        letterIndex = 0;

        if(guessesRemaning === 0){
            alert("You've run out of guesses! Game over!")
            alert(`The right word was : ${rightGuess}`)
        }

    }
}
// Calling inital board function
initBoard()
// ****************************