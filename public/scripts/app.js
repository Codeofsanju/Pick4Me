'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            return this.name + ' is ' + this.age + ' years old.';
        }
    }]);

    return Challenge;
}();

var challengePerson = new Challenge('Challenging Bill', 45);
var challengePersonNoAge = new Challenge('Challenging Bill2');

//console.log(challengePerson.getDescription());
//console.log(challengePersonNoAge.getDescription());

// Subclass of person class

var Student = function (_Challenge) {
    _inherits(Student, _Challenge);

    function Student(name, age, major) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: 'getMajor',
        value: function getMajor() {
            return this.name + '\'s major is ' + this.major;
        }
    }, {
        key: 'hasMajor',
        value: function hasMajor() {
            return !!this.major; // returns false if student has no major
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            // overiding parent class getDescription method 
            var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);
            if (this.hasMajor()) {
                description = description + (' Their major is ' + this.major);
            }
            return description;
        }
    }]);

    return Student;
}(Challenge);

var student1 = new Student('Henry Sharma', 25);
console.log(student1.getDescription());
console.log(student1.getMajor());
console.log(student1.hasMajor());

var student2 = new Student('Abinav Sharma', 27, 'Computer Science');
console.log(student2.getDescription());
console.log(student2.getMajor());
console.log(student2.hasMajor());
