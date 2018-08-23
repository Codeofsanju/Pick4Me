'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name) /*argument default value*/{
        var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Not Given';

        _classCallCheck(this, Person);

        this.name = name;
        this.location = location;
    }

    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            // class method
            //return 'Hi ' + this.name;
            return 'Hi ' + this.name; // ES6 template string using back ticks
        }
    }]);

    return Person;
}();

var me = new Person('Sanjeev Sharma', 'NYC');
var someone = new Person('Random');

console.log(me.getGreeting()); // calling class instances function
console.log(someone);

//CHALLENGE
//Setup another constructor that takes two arguments, name and age (default to 0)
//Setup class method getDescription - name is (age) years old.

var Challenge = function () {
    function Challenge() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Challenge);

        this.name = name;
        this.age = age;
    }

    _createClass(Challenge, [{
        key: 'getDescription',
        value: function getDescription() {
            return this.name + ' is ' + this.age + ' years old';
        }
    }]);

    return Challenge;
}();

var challengePerson = new Challenge('Challenging Bill', 45);
var challengePersonNoAge = new Challenge('Challenging Bill2');

console.log(challengePerson.getDescription());
console.log(challengePersonNoAge.getDescription());
