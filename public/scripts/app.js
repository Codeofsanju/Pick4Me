'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('build-it-visible.js is running');

// CHALLENGE, build Visibility Toggle again, this time using components and states


var VisibleApp = function (_React$Component) {
    _inherits(VisibleApp, _React$Component);

    function VisibleApp() {
        _classCallCheck(this, VisibleApp);

        return _possibleConstructorReturn(this, (VisibleApp.__proto__ || Object.getPrototypeOf(VisibleApp)).apply(this, arguments));
    }

    _createClass(VisibleApp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    ' Visibility Toggle '
                ),
                React.createElement(Toggle, null)
            );
        }
    }]);

    return VisibleApp;
}(React.Component);

var Toggle = function (_React$Component2) {
    _inherits(Toggle, _React$Component2);

    function Toggle(props) {
        _classCallCheck(this, Toggle);

        var _this2 = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

        _this2.displayMessage = _this2.displayMessage.bind(_this2);
        _this2.state = {
            text: 'There are some details you can now see!',
            buttonText: 'Show Details',
            toggle: false
        };
        return _this2;
    }

    _createClass(Toggle, [{
        key: 'displayMessage',
        value: function displayMessage() {
            this.setState(function (pastState) {
                if (!pastState.toggle) {
                    return {
                        toggle: pastState.toggle = true,
                        buttonText: pastState.buttonText = 'Hide Details'
                    };
                } else {
                    return {
                        toggle: pastState.toggle = false,
                        buttonText: pastState.buttonText = 'Show Details'
                    };
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.displayMessage },
                    ' ',
                    this.state.buttonText,
                    ' '
                ),
                this.state.toggle && React.createElement(
                    'p',
                    null,
                    ' ',
                    this.state.text,
                    ' '
                )
            );
        }
    }]);

    return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibleApp, null), document.getElementById('app'));

/*const app = {
    title: 'Visibility Toggle',
    toggle: false,
};

const toggleButton = () =>{
    if(!app.toggle){
        app.toggle = true;
    }
    else{
        app.toggle = false;
    }
    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1> {app.title} </h1>
            <button onClick = {toggleButton} className = "buttons"> {app.toggle ? 'Hide Details' : 'Show Details'} </button>

            {app.toggle && (
                <p> Hey. These are some details you can now see! </p>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};



const appRoot = document.getElementById('app');
renderApp();*/
