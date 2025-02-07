const home1 = document.getElementById("home+1")
const home2 = document.getElementById("home+2")
const home3 = document.getElementById("home+3")

const guest1 = document.getElementById("guest+1")
const guest2 = document.getElementById("guest+2")
const guest3 = document.getElementById("guest+3")

let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

const entries = [
  ['home+1', 1],
  ['home+2', 2],
  ['home+3', 3],
  ['guest+1', 1],
  ['guest+2', 2],
  ['guest+3', 3],
];
 
const myMap = new Map(entries);

function incrementScore(buttonName) {  
    console.log("Button clicked:", buttonName);
    let incrementValue = myMap.get(buttonName); 
    console.log("Increment value:", incrementValue);
    if (buttonName.startsWith("home")) {
        let score = parseInt(scoreHome.textContent, 10)
        score += incrementValue
        scoreHome.textContent = score
    } else if (buttonName.startsWith('guest')) {
        let score = parseInt(scoreGuest.textContent, 10)
        score += incrementValue
        scoreGuest.textContent = score 
    }
};

function reset() {
    scoreGuest.textContent = 0
    scoreHome.textContent = 0
};