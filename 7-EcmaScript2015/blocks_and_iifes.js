// Blocks and IIFEs

//ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
    console.log(c);
}

//console.log(a + b); // this wont work for ES6


//ES5
(function () {
    var c = 5;
    console.log(c);
})();

