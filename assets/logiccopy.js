// KEY
let answer = true
let questionCount = 0
let counter = -1
let score = 0
let timeTaken = 0

// GET ELEMENT
let startButton = document.getElementById('start');
let timerClock = document.getElementById('time');
let timeDiv = document.getElementsByClassName('timer');
let startScreen = document.getElementById('start-screen');
let questionsDiv = document.getElementById('questions');
let questionTitle = document.getElementById('question-title');
let choices = document.getElementById('choices');
let endScreen = document.getElementById('end-screen');
let finalScore = document.getElementById('final-score');
// let finalTime = document.getElementById('final-time');
let initials = document.getElementById('initials');
let submit = document.getElementById('submit');
let feedback = document.getElementById('feedback');
let highscores = document.getElementById('highscores')
let time = (questions.length *10)



// FUNCTIONS
// END GAME
function endGame() {
    feedback.innerHTML= ""
    endScreen.setAttribute("class","start")
    questionsDiv.setAttribute("class","hide")
}


//TIMER RUNS OUT
function ranOut(){
    timerClock.textContent = "You ran out of time! Refresh the page to start again!"
    questionsDiv.setAttribute("class","hide")
}



// TIMER
function clock(){
    feedback.innerHTML= ""
    let timeInterval = setInterval(function() {
        time--;
        timerClock.textContent = time
    if ((time === 0) && (counter < questions.length)) {
        clearInterval(timeInterval)
        ranOut()}
    else if (counter === questions.length) {
        clearInterval(timeInterval)
        timeTaken = ((questions.length * 10) - time)
    }
    // finalTime.textContent = timeTaken
},1000)
}


function nextQuestion(){
    counter++
    if (counter === questions.length) {
        return endGame()
    }
    choices.innerHTML = ""
    questionTitle.textContent = (questions[counter].Question)
    let option1 = document.createElement("button")
    option1.innerText = questions[counter].option[0]
    option1.value = questions[counter].option[0]
    option1.addEventListener("click", updateScore)
    let option2 = document.createElement("button")
    option2.innerText = questions[counter].option[1]
    option2.value = questions[counter].option[1]
    option2.addEventListener("click", updateScore);
   let option3 = document.createElement("button")
    option3.innerText = questions[counter].option[2]
    option3.value = questions[counter].option[2]
    option3.addEventListener("click", updateScore);
   let option4 = document.createElement("button")
    option4.innerText = questions[counter].option[3]
    option4.value = questions[counter].option[3]
    option4.addEventListener("click", updateScore);
   choices.appendChild(option1)
    choices.appendChild(option2)
    choices.appendChild(option3)
    choices.appendChild(option4)
}

// UPDATE SCORE
function updateScore(event){
    feedback.innerHTML= ""
    finalScore.textContent = score
    if (counter === questions.length) {
        endGame()
    }
if (event.target.value === questions[counter].correctAnswer) {
score++
feedback.innerHTML= "Correct!"
} else {
    time-=10
    feedback.innerHTML= `Wrong! The correct answer was ${questions[counter].correctAnswer}`
}
nextQuestion()
}

// START GAME
function startGame(){
    questionsDiv.setAttribute("class", "start")
    startScreen.setAttribute("class", "hide")
    if (questions.Choices === questions.correctAnswer) {
        score++
        localStorage.setItem("score", score)
    }
        nextQuestion()
}


startButton.addEventListener("click", function(event){
    event.preventDefault()
    startGame()
    clock()
})

submit.addEventListener("click", function(event){
saveToLocalStorage()
let location = window.location.href;
let modifiedLocation = location.substr(0, location.lastIndexOf('/'))
console.log(modifiedLocation)
console.log(location)
let newLocation = modifiedLocation + "/highscores.html";
window.location.href = newLocation
}
)

function saveToLocalStorage(){
    let localStorageData = JSON.parse(localStorage.getItem("quiz_score"))
    let finalObj = {
        name: initials.value,
        score: score -1
    
    }
    if (localStorageData === null){
        localStorageData = [];
        localStorageData.push(finalObj)
    } else {
        localStorageData.push(finalObj)
    }

    localStorage.setItem("quiz_score", JSON.stringify(localStorageData))

}















// TIMER BAR IF I HAVE TIME
// function timer() { 
//     const element = document.getElementById("myBar");   
//     let width = 0;
//     const id = setInterval(frame, 10);
//     function frame() {
//       if (width == (question.length*1000)) {
//         clearInterval(id);
//       } else {
//         width++; 
//         element.style.width = width + '%'; 
//       }
//     }
//   }







