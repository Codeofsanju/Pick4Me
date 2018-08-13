'use strict';

// es5 function
var square = function square(x) {
    return x * x;
};
console.log(square(8));

// named es5 function
function squareNamed(x) {
    return x * x;
};
console.log(squareNamed(9));

// es6 arrow function
var squareArrow = function squareArrow(x) {
    // notice that the function name is now anonymous, so you cannot define a function by name and you must use variable
    return x * x;
};
console.log(squareArrow(10));

//arrow function expression syntax 
var squareArrowExp = function squareArrowExp(x) {
    return x * x;
};
console.log(squareArrowExp(11));

// Challenge - Use arrow functions
// getFirstName('Sanjeev Sharma') -> Sanjeev
// Create regular arrow function
// Create second arrow function to do same using expression syntax

// PART I: Regular arrow syntax
var getFirstName = function getFirstName(fullName) {
    return x.split(' ')[0];
};
console.log('RegFname: ', getFirstName('Sanjeev Sharma'));

// PART II: Expression syntax
var getFirstNameExp = function getFirstNameExp(fullName) {
    return x.split(' ')[0];
};
console.log('ExpFname: ', getFirstNameExp('Sanjeev Sharma'));
