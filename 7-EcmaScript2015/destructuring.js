// Destructuring

// ES5
var john = ['John', 26];
// var name = john[0];
// var age = john[1];


// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);



function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age6, retirement] = calcAgeRetirement(1990);
console.log(age6);
console.log(retirement);



function convertCurrency(amount) {
    const converted = {
        USD: amount * 0.76,
        GPB: amount * 0.53,
        AUD: amount * 1.01,
        MEX: amount * 13.30
    };
    return converted;
}
const {USD, GPB, AUD, MEX} = convertCurrency(100);
console.log(`USD: $${USD}, GPB: $${GPB}, AUD: $${AUD}, MEX: $${MEX}`);