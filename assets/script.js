
// Create global variables

var score = 0; //set initial score
var timeLeft = 120; //sets initial timer count
var timerElement = document.getElementById("timer");
var questions = [       //sets array of strings with all quiz questions
    "Question 1: What is the correct syntax for declaring a JavaScript variable?",
    "Question 2: Which of the following is NOT a valid JavaScript data type?",
    "Question 3: What is the result of the following expression: '10' + 5?",
    "Question 4: Which method is used to add an element to the end of an array in JavaScript?",
    "Question 5: What does the '===' operator in JavaScript compare?",
    "Question 6: What is the output of the following code line? console.log(3 + 2 + '7')"
    ];
var alternatives = [    // sets arrays of strings with all possible answer for each question
    ["1. var myVariable", "2. variable myVariable", "3. myVariable = var", "4. let myVariable"],
    ["1. String", "2. Boolean", "3. Float", "4. Array"],
    ["1. 15", "2. '105'", "3. 105", "4. Error"],
    ["1. append()", "2. push()", "3. add()", "4. insert()"],
    ["1. Values and types", "2. Only values", "3. Only types", "4. None of the above"],
    ["1. 12", "2. 57", "3. '57'", "4. Error"]
    ]; 
var correctAnswer = [3, 2, 2, 1, 0, 2]; // sets array with the index number of all the correct answers
var questionIndex = 0; //sets the index number of current question, starting at zero
var countdown;
var usersScores = [];
var saveScores = document.getElementById("save-btn");
saveScores.addEventListener("click",function(){
    var initials = document.getElementById("initial");
    var user={
        initials: initials.value,
        score: timeLeft
    }
    usersScores.push(user);
    localStorage.setItem("users", JSON.stringify(usersScores));
})


// Create functions: start, nextQuestion, endGame, saveInitials
function startTimer() {
    countdown = setInterval(function() {
    timeLeft = timeLeft - 1;
    timerElement.textContent = "Time left: " + timeLeft + "s";
    if (timeLeft <= 0) {
        clearInterval(countdown); //stop running the function
        showResult();
    }
    }, 1000);
}


// Change current question and alternatives to the next
function nextQuestion() {
    questionIndex = questionIndex + 1;
    if (questionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}


// When the user selects an alternative and it is correct, 1 point is added to the score, the other alternatives are hidden and the button to the next question appears
function checkAnswer(chosenAlternative) {
    if (parseInt(chosenAlternative) === correctAnswer[questionIndex]) {
        alert("Correct!")
        score = score + 1;
    } else {
        alert("Wrong!");
        timeLeft = timeLeft - 10;
    }
    disableOptions();
    showNextButton();
}


// Function to display the question and options
function showQuestion() {
    var questionElement = document.getElementById("question");
    var options = document.getElementsByClassName("option");
    var nextButton = document.getElementById("next-btn");
    questionElement.textContent = questions[questionIndex];
    for (var i = 0; i < options.length; i = i+1) {
        options[i].textContent = alternatives[questionIndex][i];
        options[i].disabled = false;
    }
}


// Function to turn off the option to select other alternatives after an anternative is selected
function disableOptions() {
    var options = document.getElementsByClassName("option");
    for (var i = 0; i < options.length; i = i+1) {
        options[i].disabled = true;
    }
}


// Function to show the "Next Question" button
function showNextButton() {
    var nextButton = document.getElementById("next-btn");
}


// Function to display the final result
function showResult() {
    clearInterval(countdown);
    var quizPage = document.getElementById("quiz-page");
    var resultPage = document.getElementById("result-page");
    var scoreElement = document.getElementById("score");
    var initialsInput = document.getElementById("initial");
    var saveButton = document.getElementById("save-btn");

    quizPage.classList.add('hide');
    resultPage.classList.remove('hide');

    scoreElement.textContent = "";
    
    var interval = setInterval(function() {
        if (initialsInput.value !== "") {
            scoreElement.textContent = "All done! Your final score is " + score + ".";
            clearInterval(interval);
        }
    }, 1000);
}


// Event listener for the "Start" button
document.getElementById("start-btn").addEventListener("click", function() {
    var introPage = document.getElementById("intro-page");
    var quizPage = document.getElementById("quiz-page");
    quizPage.classList.remove('hide');
    introPage.classList.add('hide');
    showQuestion();
    startTimer();
});


