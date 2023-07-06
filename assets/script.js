// Create global variables

var scores = 0; //sets initial scores
var timerCount = 120; //sets initial timer count
var questions = ["What is the correct syntax for declaring a JavaScript variable?","Which of the following is NOT a valid JavaScript data type?","What is the result of the following expression: '10' + 5?","Which method is used to add an element to the end of an array in JavaScript?","What does the '===' operator in JavaScript compare?", "What is the output of the following code line? console.log(3 + 2 + '7');"]; //sets array of strings with all quiz questions
var alternatives = [["var myVariable", "variable myVariable", "myVariable = var", "let myVariable"], ["String", "Boolean", "Float", "Array"], ["15", "'105'", "105", "Error"], ["append(), push(), add(), insert()"], ["Values and types", "Only values", "Only types", "None of the above"], ["12", "57", "'57'", "Error"]]; // sets arrays of strings with all possible answer for each question
var correctAnswer = ["let myVariable", "Float", "'105'", "push()", "Values and types", "'57'"]; // sets array of strings of all the correct answers
var questionIndex = 0; //sets the index number of current question, starting at zero

// Create selectors

// Create functions: start, nextQuestion, endGame, saveInitials





