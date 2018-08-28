
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
        return `${this.name} is ${this.age} years old.`;
    }
    
}
const challengePerson = new Challenge('Challenging Bill', 45);
const challengePersonNoAge = new Challenge('Challenging Bill2');

//console.log(challengePerson.getDescription());
//console.log(challengePersonNoAge.getDescription());

// Subclass of person class
class Student extends Challenge{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    getMajor(){
        return `${this.name}'s major is ${this.major}`;
    }
    hasMajor(){
        return !!this.major; // returns false if student has no major
    }
    getDescription(){ // overiding parent class getDescription method 
        let description = super.getDescription();
        if(this.hasMajor()){
            description = description + ` Their major is ${this.major}`;
        }
        return description;
    }
}

const student1 = new Student('Henry Sharma', 25);
console.log(student1.getDescription());
console.log(student1.getMajor());
console.log(student1.hasMajor());

const student2 = new Student('Abinav Sharma', 27, 'Computer Science');
console.log(student2.getDescription());
console.log(student2.getMajor());
console.log(student2.hasMajor());



// CHALLENGE 2: Create a new class for Person2 and subclass of Person2 called traveler. 
// Add support for homeLocation
// getGreeting() function in parent class. Overide this function in the subclass:
//  -> Hi. I am Andrew Mead. (only if location is not present) +  I'm Visiting from location. (if there is a location)

class Person2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi. I am ${this.name}. `;
    }

}

class Traveler extends Person2{
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }
    homeLocation(){
        return !!this.location;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation()){
            return greeting + `I'm visting from ${this.location}.`
        }
        return greeting;
    }
}

const traveler = new Traveler('Akshay', 25);
console.log(traveler.getGreeting());

const traveler1 = new Traveler('Akshay Abroad', 25, 'NYC');
console.log(traveler1.getGreeting());

