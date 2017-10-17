// let and const

/*

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);

*/

// ES5
function driverLic5(passed) {
    if (passed) {
        var firstN = 'Khoi';
        var year = 1990;
    }
    console.log(firstN + ', born in ' + year + ' is allowed to drive a car.');
}
driverLic5(true);

// ES6
function driverLic6(passed) {

    let firstN;
    const year = 1990;

    if (passed) {
        firstN = 'Khoi';
    }

    console.log(firstN + ', born in ' + year + ' is allowed to drive a car.');
}
driverLic6(true);

let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}