
/*

// Function Constructor

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// Inheritance
Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};
Person.prototype.lastName = 'Smith';

// Instantiation
var khoi = new Person('Khoi', 1991, 'Front-End Developer');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

khoi.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(khoi.lastName);
*/

//////////////////////////////

/*

// Object.create method

var personProto = {
    calculateAge: function() {
        console.log(2017 - this.yearOfBirth);
    }
}

var khoi = Object.create(personProto);
khoi.name = 'Khoi';
khoi.yearOfBirth = 1991;
khoi.job = 'Developer';

var jane = Object.create(personProto,
{
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
});
*/

/////////////////////////////

/*

// Primitives vs Objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
  name: 'Khoi',
    city: 'Placentia'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}


console.log(age); // The primitive will remained unchanged
console.log(obj.city);
*/

////////////////////

/*
// Passing functions as arguments

var years = [1991, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {

    var arrRes = [];

    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

// Call back function to calculate the age
function calculateAge(el) {
    return 2016 - el;
}

// Call back function to check if the age is an adult
function isFullAge(el) {
    return el >= 18;
}

// Call back function to calculate maximum heart rate for ages
function maxHeartRate(el) {

    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return 'cannot calculate heart rate for this age';
    }

}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
*/

/////////////////////////////////

/*
// Functions returning functions
function interviewQuestion(job) {

    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if(job === 'teacher') {
        return function(name) {
            console.log('What subject do you teacher, ' + name + '?');
        }
    } else {
            return function(name) {
                console.log('Hello ' + name + ', what do you do?');
            }
    }

}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Khoi');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Khoi');

// OR you can do the following
interviewQuestion('teacher')('Mark');
interviewQuestion('designer')('Mark');
*/

///////////////////////////////////////

/*
// IIFE(Immediately invoked function expressions

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (luck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - luck);
})(5);
*/

///////////////////////////////////////////

/*
// Closures

function retirement(retirementAge) {

    var a = ' years left until retirement.';

    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

//retirement(66)(1990);

function interviewQuestion(job) {

    return function(name) {
        if(job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if(job === 'teacher') {
            console.log('What subject do you teacher, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }

}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Khoi');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Khoi');
*/

////////////////////////////////////////////////


// Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style == 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job +
            ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job +
            ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.' );
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

// Method borrowing using 'call'
john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily,['friendly', 'afternoon']);

// Bind method stores it in a variable
var johnFriendly = john.presentation.bind(john, 'friendly');
// Currying
johnFriendly('morning');
johnFriendly('night');
var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');




var years = [1991, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {

    var arrRes = [];

    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
var fullVietnam = arrayCalc(ages, isFullAge.bind(this, 16));
console.log(ages);
console.log(fullJapan);
console.log(fullVietnam);