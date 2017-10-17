// Classes

// ES5
var Person5 = function (name, yearOfBirth, job) {
  this.yearOfBirth = yearOfBirth;
  this.name = name;
  this.job = job;
};

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');


// ES6
class Person6 {
  constructor (name, yearOfBirth, job) {
      this.yearOfBirth = yearOfBirth;
      this.name = name;
      this.job = job;
  }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
      console.log('Hello There');
    }

}

const john6 = new Person6('John', 1990, 'teacher');
john6.calculateAge(1991);
Person6.greeting();


// ES6
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Setter
    calcArea() {
      return this.height * this.width;
    }

    // Getter
    get area() {
      return this.calcArea();
    }
}

const square = new Rectangle(10, 10);
console.log(square.area);






