// Rest Parameters

/*
// ES5

function isFullAge5() {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function (el) {
        console.log((2016 - el) >= 18);
    })
}

isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(...years) {
    console.log(years);
    years.forEach(el => console.log((2016 - el) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);
*/

// ES5
console.log('------------------ES5------------------');
 function isFullAge5(limit) {
 console.log(arguments);

 var argsArr = Array.prototype.slice.call(arguments, 1);

 console.log(argsArr);

 argsArr.forEach(function (el) {
 console.log((2016 - el) >= limit);
 })
 }

 isFullAge5(16, 1999, 1965, 2016, 1987);
 console.log('------------------ES6------------------');

 // ES6
 function isFullAge6(limit, ...years) {
 console.log(years);
 years.forEach(el => console.log((2016 - el) >= limit));
 }

 isFullAge6(16, 1999, 1965, 2016, 1987);