//Array of word to use in the game.
const puzzleWords=["Eliakim","Walela","Karani","Seth","Master"];
//main game object
const mainGame={
 gameWords(){
for(let i=0;i<gameWords.length;i++)
    return gameWords[i];
},
lettersWords(){

}


};

//selecting page elements to variables
const gameArea=document.querySelector("div");
const score=document.getElementsByClassName("score");
const puzzle=document.getElementsByClassName("puzzle");
const letters=document.getElementsByClassName("letters");
const button=document.getElementsByTagName("button");

//event litener of start game button
button.addEventLitener("Click",statGame());

//startgame function
function startgame(){
    if(puzzleWords.length=0){
        button.style.display="none";
        gameArea.innerHTML = "";
        game.total=0;
        game.currentWord = words.shift();
    }
    builder();
}
//convrting string to array of the words
function gameSolution(str) {
    return str.split("");
}
//function to clear innerhtml from letters and puzzle
function builder(params) {
    letters.innerHTML = "";
    puzzle.innerHTML = "";
}
//separate function
function pageElements(typeOfElement,parentElement,newElement){
    const element = document.createElement(typeOfElement);
    element.classList.add(newElement);
    parentElement.appendChild(element);
    return element;
}
//iterate through the game solution array
game.solutionArray= gameSolution(game.currentWord);
//loop through the solution array and get each letter
for (let i = 0; i < game.solutionArray.length; i++) {
    const letter = game.solutionArray[i];
    const letterElement = pageElements("span", puzzle, "letter");
    letterElement.textContent = letter;
    letterElement.dataset.index = i;
}
//check if value is blankif yes clear and update border to white
function checkValue(value) {
    if (value === "") {
        value.style.border = "1px solid white";
        value.value = "";
    } else {
        value.style.border = "1px solid black";
    }
}
//function to update score tooutput current no and no of letters left
function updateScore() {
    score.textContent = `Current Score: ${game.total} Letters Left: ${game.solutionArray.length}`;
}

//loop torep 26 letters
for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i);
    const letterElement = pageElements("span", letters, "letter");
    letterElement.textContent = letter;
    letterElement.dataset.index = i;
}
//Create elements for each letter, adding a class of box and appending it to the 
//letters page element. As each element gets created, add an event listener 
//that runs a function called checker().
function checker(event) {
    const letterElement = event.target;
    const index = letterElement.dataset.index;
    const letter = game.solutionArray[index];
    
    if (letter) {
        letterElement.style.backgroundColor = "green";
        game.total++;
        updateScore();
    } else {
        letterElement.style.backgroundColor = "red";
    }
}
//Once the letter gets clicked, we need to invoke the checker() function, which 


/*will remove the main class, add another class, remove the event listener, and 
update the background color. Also invoke a function called checkLetter(), 
passing the value of the clicked letter into the argument*/
letters.forEach(letterElement => {
    letterElement.addEventListener("click", checker);
});
/*The checkLetter() function will loop through all the solution letters. Add a 
condition to check if the solution letter is equal to the letter selected by the 
player. Make sure to convert the inputted letter to uppercase so that you can 
match the letters accurately. Update the matching letters in the puzzle using 
the game puzzle array and the index from the letter in the solution. The index 
values will be the same on each, which provides an easy way to match the 
visual representation with what is in the array*/
function checkLetter(letter) {
    for (let i = 0; i < game.solutionArray.length; i++) {
        if (game.solutionArray[i].toUpperCase() === letter.toUpperCase()) {
            const letterElement = puzzle.querySelector(`.letter[data-index="${i}"]`);
            letterElement.textContent = letter;
            game.solutionArray[i] = ""; // Clear the matched letter
        }
    }
    updateScore();
}
/* Subtract one from the game global object that tracks the total letters left to be 
solved, invoke the updatescore() function to check if the game is over, and 
update the score. Set the textContent of the puzzle to the letter removing the 
original dash.*/
function checkGameOver() {
    if (game.solutionArray.every(letter => letter === "")) {
        alert("Congratulations! You've solved the puzzle!");
        button.style.display = "block"; // Show the start button again
    }
}
/*In the updatescore() function, set the score to the number of letters left. If the 
total left is less than or equal to zero, the game is over. Show the button so 
that the player has an option for the next phras*/ 
function updateScore() {
    score.textContent = `Current Score: ${game.total} Letters Left: ${game.solutionArray.filter(letter => letter !== "").length}`;
    if (game.solutionArray.every(letter => letter === "")) {
        alert("Congratulations! You've solved the puzzle!");
        button.style.display = "block"; // Show the start button again
    }
}

