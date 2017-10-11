/*
 --- Let's build a fun quiz game in the console! ---

 */

// 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
(function() {

//  1. Build a function constructor called Question to describe a question. A question should include:
//  a) question itself
//  b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
//  c) correct answer (I would use a number for this)

var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

//  2. Create a couple of questions using the constructor
var q1 = new Question('Is JavaScript the collest programming language in the world?',
    ['Yes', 'No'],
    0);

var q2 = new Question('What\'s the name of this course\'s teacher?',
    ['John', 'Michael', 'Jonas'],
    2);

var q3 = new Question('What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tedious'],
    2);

//  3. Store them all inside an array
var questions = [q1, q2, q3];

//  4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
var random = Math.floor(Math.random() * questions.length);

// Create a new Question method function to display the answers
Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length ; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

questions[random].displayQuestion();

// 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
// use parseInt to convert the user's prompt into a number and not a string
var answer = parseInt(prompt('Please select the correct answer'));

// 6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
Question.prototype.checkAnswer = function(ans) {
    if(ans === this.correct) {
        console.log('Correct Answer!');
    } else {
        console.log('Wrong answer. Try again');
    }
}

questions[random].checkAnswer(answer);

})();
