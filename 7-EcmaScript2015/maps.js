// Maps

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaCript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer:D');
question.set(false, 'Wrong answer.');

console.log(question.get('question'));
//console.log(question.size);

if (question.has(4)) {
    // question.delete(4);
    //console.log('Answer 4 is here!');
}

// question.clear(); // delete all

// question.forEach((value, key) => console.log(`Value: ${value}|| Key: ${key}`));

for (let [key, value] of question.entries()) {
    if(typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}
// How the f does this work?!
const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));


