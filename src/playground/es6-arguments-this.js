// arguments objects - no longer bound with arrow functions

const add = function (a, b){ //ES5
    console.log(arguments); // returns all arguments passed to this function, irregardless to what is listed as an argument. 
    return a + b;
};
console.log(add(9,19));

const addArrow = (a, b) => { // ES6 arrow function
   //console.log(arguments); Not possible with arrow functions
    return a + b;
};
console.log(addArrow(20,2));

// this keyword - no longer bound
const user = { 
    name: 'Sanjeev',
    cities: ['NYC', 'Queens', 'Miami'],
    printPlaceLived: function(){ // ES5: since this function is added to the object property, the this is bound to that object
        console.log(this.name);  
        console.log(this.cities);

        this.cities.forEach(function (city) { 
            //console.log(this.name + ' has lived n' + city); // does not work since this anonymous function is not bound to the object
        });
    }
};

console.log(user.printPlaceLived());

const user1 = { 
    name1: "Sanjeev1",
    cities1: ['NYC', 'Queens', 'Miami'],
    printPlaceLived(){ // ES6 syntax for defining a method function
        this.cities1.forEach((city) => { 
            console.log(this.name1 + 'has lived in ' + city); // ES6 works since arrow functions inherit the this of the context they are created
        });
    }
};

user1.printPlaceLived();

const user2 = { //using map
    name2: 'Sanjeev2',
    cities2: ['NYC', 'Queens', 'Miami'],
    printPlaceLived(){
        return this.cities2.map((city)=> this.name2 + ' has lived in ' + city); //map allow you to transform each item in the array and get a new array back
    }
};
console.log(user2.printPlaceLived());

// CHALLENGE
const multiplier = {
    // number - array of numbers
    numbers: [1,2,3],
    // multiplyBy - single number 
    multiplyBy: 2,
    // Method: Multiply -> returns a array where the numbers have been multiplied
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy); 
    }
};
console.log(multiplier.multiply());