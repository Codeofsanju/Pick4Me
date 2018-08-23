
class Person {
    constructor(name, location = 'Not Given'/*argument default value*/){
        this.name = name;
        this.location = location;
    }

    getGreeting(){ // class method
        //return 'Hi ' + this.name;
        return `Hi ${this.name}`; // ES6 template string using back ticks
    }
}
const me = new Person('Sanjeev Sharma', 'NYC');
const someone = new Person('Random');

console.log(me.getGreeting()); // calling class instances function
console.log(someone);


//CHALLENGE
//Setup another constructor that takes two arguments, name and age (default to 0)
//Setup class method getDescription - name is (age) years old.

class Challenge{
    constructor(name = 'anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
    
}
const challengePerson = new Challenge('Challenging Bill', 45);
const challengePersonNoAge = new Challenge('Challenging Bill2');

console.log(challengePerson.getDescription());
console.log(challengePersonNoAge.getDescription());


