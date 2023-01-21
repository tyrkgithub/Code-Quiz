let answer = true
let time = 0
let questionCount = 0
let counter = -1

// GET ELEMENT
let startButton = document.getElementById('start');
let timerClock = document.getElementById('time');
let startScreen = document.getElementById('start-screen');
let questionsDiv = document.getElementById('questions');
let questionTitle = document.getElementById('question-title');
let choices = document.getElementById('choices');
let endScreen = document.getElementById('end-screen');
let finalScore = document.getElementById('final-score');
let initials = document.getElementById('initials');
let feedback = document.getElementById('feedback');


let score = 0

finalScore.textContent = score

// FUNCTIONS
startButton.addEventListener("click", function(event){
    event.preventDefault()
    startGame()
    clock()
})

function addHighscore(){
    function showResponse(event) {
        // Prevent default action
        event.preventDefault();
        console.log(event);
        var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
        submissionResponseEl.textContent = response;
      }
        
      // Add listener to submit element
      submitEl.addEventListener("click", showResponse);
}
function endGame() {
    feedback.innerHTML= ""
    endScreen.setAttribute("class","start")
    questionsDiv.setAttribute("class","hide")

}


function ranOut(){
    timerClock.textContent = "You ran out of time! Refresh the page to start again!"
}

function clock(){
    let time = (questions.length *10)
    let timeInterval = setInterval(function() {
        time--;
        timerClock.textContent = time

    if (time === 0) {
        clearInterval(timeInterval)
        ranOut()
    }
},1000)
}

function nextQuestion(){
    counter++
    if (counter === questions.length) {
        return endGame()
    }
    choices.innerHTML = ""
    questionTitle.textContent = (questions[counter].Question)
    var option1 = document.createElement("button")
    option1.innerText = questions[counter].option[0]
    option1.value = questions[counter].option[0]
    option1.addEventListener("click", updateScore);
    var option2 = document.createElement("button")
    option2.innerText = questions[counter].option[1]
    option2.value = questions[counter].option[1]
    option2.addEventListener("click", updateScore);
    var option3 = document.createElement("button")
    option3.innerText = questions[counter].option[2]
    option3.value = questions[counter].option[2]
    option3.addEventListener("click", updateScore);
    var option4 = document.createElement("button")
    option4.innerText = questions[counter].option[3]
    option4.value = questions[counter].option[3]
    option4.addEventListener("click", updateScore);
    choices.appendChild(option1)
    choices.appendChild(option2)
    choices.appendChild(option3)
    choices.appendChild(option4)
}

function updateScore(event){
    feedback.innerHTML= ""
if (event.target.value === questions[counter].correctAnswer) {
score++
feedback.innerHTML= "correct"
} else {
    feedback.innerHTML= `Wrong! The correct answer was ${questions[counter].correctAnswer}`
}
nextQuestion()

}


function startGame(){
    questionsDiv.setAttribute("class", "start")


    
    if (questions.Choices === questions.correctAnswer) {
        score++
        localStorage.setItem("score", score)
    } else {
        time += time-1000
    }
        nextQuestion()
}



// function getQuestion() {
//     questionDiv.setAttribute("class","start")
//     document.getElementById("start-screen").setAttribute("class","hide")
//     let currentQuestion = questionTO[currentQuestionIndex];
//     questionTitle.textContent = currentQuestion.question;
//     choices.textContent = ""; // clear any previous choices
//     for(let i = 0; i < currentQuestion.choices.length; i++) {
//         let choice = currentQuestion.choices[i];
//         let choiceList = document.createElement("ol")
//         let choiceBtn = document.createElement("button");
//         choiceList.appendChild(choiceBtn)
//         choices.appendChild(choiceList)
//         choiceBtn.classList.add("choice");
//         choiceBtn.textContent = choice.text;
//         choiceBtn.addEventListener("click", function() {
//             if(choice.isCorrect) {
//                 score++;
//                 currentQuestionIndex++;
//                 if(currentQuestionIndex < questionTO.length) {
//                     displayQuestion(questionTO);
//                 } else {
//                     endGame()
//                     clearInterval(timeInterval)
//                 }
//             } else {
//                 // if choice is incorrect
//                 time-=10
//                 if(time >0) {
//                     currentQuestionIndex++;
//                     if(currentQuestionIndex < questionTO.length){
//                         displayQuestion(questionTO);
//                     }else {
//                         endGame()
//                         clearInterval(timeInterval)
//                     }
//                 }else {
//                     endGame()
//                     clearInterval(timeInterval)
//                 }
//             }
//         });
//     } 
   
// }


// if (choices = correctAnswer) {
//     answer = true 
//     score = score + 10
// } else {
//     answer = false
//     time += time-1000
// }







function timer() { 
    const element = document.getElementById("myBar");   
    let width = 0;
    const id = setInterval(frame, 10);
    function frame() {
      if (width == (question.length*1000)) {
        clearInterval(id);
      } else {
        width++; 
        element.style.width = width + '%'; 
      }
    }
  }