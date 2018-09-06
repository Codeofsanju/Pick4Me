'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Using Component State
var CounterApp = function (_React$Component) {
    _inherits(CounterApp, _React$Component);

    function CounterApp(props) {
        _classCallCheck(this, CounterApp);

        var _this = _possibleConstructorReturn(this, (CounterApp.__proto__ || Object.getPrototypeOf(CounterApp)).call(this, props));

        _this.handleReset = _this.handleReset.bind(_this);
        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);

        _this.state = {
            count: props.count
        };
        return _this;
    }

    _createClass(CounterApp, [{
        key: 'handleAddOne',
        value: function handleAddOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'handleMinusOne',
        value: function handleMinusOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    ' Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleAddOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleMinusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'Reset'
                )
            );
        }
    }]);

    return CounterApp;
}(React.Component);

CounterApp.defaultProps = {
    count: 0
};
ReactDOM.render(React.createElement(CounterApp, null), document.getElementById('app'));

// EVENTS AND EVENT HANDLERS
/*let count = 0;
const add1 = () => {
    console.log('add1');
};

const templateTwo = (
    <div>
        <h1> Count: {count} </h1>
        <button onClick={add1} className="button"> +1 </button>
    </div>
);

// Events Challenge 1
// Make a button with the text -1. Only console.log for now.
// Setup minusOne functions
// Setup reset button
let count1 = 10;
let initial = count1;
const add2 = () => {
    count1++;
    renderCounterApp();
};
const minus = () => {
    count1--;
    renderCounterApp();
};
const reset = () => {
    count1 = initial;
    renderCounterApp();
};

const renderCounterApp = () =>{
    const templateThree = (
        <div>
            <h1> Count: {count1} </h1>
            <button onClick= {add2} className="button"> +1 </button>
            <button onClick = {minus} className="button"> -1 </button>
            <button onClick = {reset} className="button"> reset </button>
        </div>
    );
    ReactDOM.render(templateThree, appRoot);
};
renderCounterApp();*/
