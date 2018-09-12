// ES6 IMPORT AND EXPORT CHALLENGE: set up another file called person.js
// setup a named export isAdult(18) - true if adult, otherwise false
// setup a named export canDrink(21) - true if 21 and over, otherwise false

const isAdult = (age) => age>17 &&true; // or age >= 18
const canDrink = (age) => age>20 &&true; // or age >= 21

export default (age) => age>64 &&true; // age >= 65
/*Or
const isSenior = (age) => age>=65;
*/
export {isAdult, canDrink /*, isSenior as default */};