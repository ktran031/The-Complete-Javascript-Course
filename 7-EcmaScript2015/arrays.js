// Arrays

// EXAMPLE 1
const boxes = document.querySelectorAll('.box');

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
   cur.style.backgroundColor = 'dodgerblue';
});


// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// Or you can also do the following:
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// EXAMPLE 2
// ES5
/*
for (var i =0; i <boxesArr5.length; i++) {

    if (boxesArr5[i].className === 'blue') {
        continue;
        // break; // break will stop the loop
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}
*/

// ES6
for (const el of boxesArr6) {

    if (el.className.includes('blue')) {
        continue;
    }

    el.textContent = 'I changed to blue!';
}


// EXAMPLE 3
// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (el) {
   return el >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(el => el >= 18));
console.log(ages.find(el => el >= 18));



















