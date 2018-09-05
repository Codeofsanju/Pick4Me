'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pick4MeApp = function (_React$Component) {
    _inherits(Pick4MeApp, _React$Component);

    function Pick4MeApp(props) {
        _classCallCheck(this, Pick4MeApp);

        var _this = _possibleConstructorReturn(this, (Pick4MeApp.__proto__ || Object.getPrototypeOf(Pick4MeApp)).call(this, props));

        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleAction = _this.handleAction.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(Pick4MeApp, [{
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handleAction',
        value: function handleAction() {
            // randomly select ine thing from list
            var randomIndex = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randomIndex]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                // if form was empty
                return 'Please enter a valid option';
            } else if (this.state.options.indexOf(option) > -1) {
                // returns index of option if it exists in options array. Return -1 if not
                return 'This already exists in your options';
            }
            // else
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option) // makes new array that concats old array with the new option array
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var t1 = 'Pick4Me';
            var st1 = 'Let Us Choose!';
            //const optns = ['Thing one', 'Thing two', 'Thing three'];
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: t1,
                    subtitle: st1
                }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handleAction: this.handleAction
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleRemoveAll: this.handleRemoveAll
                }),
                React.createElement(AddOptions, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return Pick4MeApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        // must use uppercase for class name
        value: function render() {
            // required to be defined in react components
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    ' ',
                    this.props.title,
                    ' '
                ),
                React.createElement(
                    'h2',
                    null,
                    ' ',
                    this.props.subtitle,
                    ' '
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        // random pick button (disbaled when options array is empty)
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    {
                        onClick: this.props.handleAction,
                        disabled: !this.props.hasOptions
                    },
                    'What Should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

// CHALLENGE1: create options component 
// EVENTS AND METHODS CHALLENGE: Add remove all button and then setup handleRemoveAll


var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        // list of options, remove all options button
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleRemoveAll },
                    ' Remove All '
                ),
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, optionText: option });
                }) // for each element in options array, an individual option component is rendered

            );
        }
    }]);

    return Options;
}(React.Component);

// Challenge 2: Setup options prop for Options component.
// Render length of array.


var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        // individual option
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    { key: this.props.option },
                    ' Option: ',
                    this.props.optionText,
                    ' '
                )
            );
        }
    }]);

    return Option;
}(React.Component);

// AddOptions


var AddOptions = function (_React$Component6) {
    _inherits(AddOptions, _React$Component6);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this6 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this6.handleFormSubmit = _this6.handleFormSubmit.bind(_this6);
        _this6.state = {
            error: undefined
        };
        return _this6;
    }

    _createClass(AddOptions, [{
        key: 'handleFormSubmit',
        value: function handleFormSubmit(e) {
            // add to options vector
            e.preventDefault();
            var option = e.target.elements.option.value.trim(); // .trim() removes all leading and ending whitespace. 
            //console.log(option);
            var error = this.props.handleAddOption(option); // error will be one of the error return strings if a string is returned, else undefined and falsy
            this.setState(function () {
                return {
                    error: error
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    ' ',
                    this.state.error,
                    ' '
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleFormSubmit },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        ' Add Option '
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(Pick4MeApp, null), document.getElementById("app"));
