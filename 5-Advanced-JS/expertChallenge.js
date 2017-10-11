/*
 --- Expert level ---

 8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

 9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

 10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

 11. Display the score in the console. Use yet another method for this.
 */

(function() {

    //  Build a function constructor called Question to describe a question.
    var Question = function(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    // Created a new Question method function to display the answers
    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    // Created a new Question method to check if the answers are correct
    Question.prototype.checkAnswer = function (ans, callback) {

        var sc;

        if (ans === this.correct) {
            console.log('Correct Answer! ' + 'It is indeed option #' + this.correct);
            // add score
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again');
            // don't add score
            sc = callback(false);
        }
        // display the score
        this.displayScore(sc);
    }

    // Created a new Question method to display the user's score
    Question.prototype.displayScore = function (score) {
        console.log('Your current score is: ' + score);
        console.log('--------------------------');
    }

    //  Create a couple of questions using the constructor
    var q1 = new Question('Is JavaScript the collest programming language in the world?',
        ['Yes', 'No'],
        0);

    var q2 = new Question('What\'s the name of this course\'s teacher?',
        ['John', 'Michael', 'Jonas'],
        2);

    var q3 = new Question('What does best describe coding?',
        ['Boring', 'Hard', 'Fun', 'Tedious'],
        2);

    var q4 = new Question('What is my name?',
        ['Devant', 'Karlos', 'Cody', 'Khoi'],
        3);

    var q5 = new Question('How did I become a programmer',
        ['Gifted', 'Self-taught', 'College', 'Bootcamp'],
        3);

    //  Store the questions, answers, and correct answers inside an array
    var questions = [q1, q2, q3, q4, q5];

    // Created a score function to keep score of the correct answers
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            } else {
                console.log('Your answer is not correct so you didn\'t get a point');
            }
            return sc;
        }
    }

    // Created a keepScore variable for Closure
    var keepScore = score();

    //  After you display the result, display the next random question, so that the game never ends
    function nextQuestion() {

        //  Select one random question and log it on the console, together with the possible answers.
        var random = Math.floor(Math.random() * questions.length);

        questions[random].displayQuestion();

        //  Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
        var answer = prompt('Please select the correct answer');

        if(answer !== 'exit') {

            questions[random].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    }

    nextQuestion();

})();