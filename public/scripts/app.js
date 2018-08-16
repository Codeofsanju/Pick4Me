'use strict';

console.log('App.js is running');

var app = {
    title: 'Pick4me!',
    subtitle: 'We pick for you :)',
    options: ['one', 'two']
};

//JSX - JavasScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        ' ',
        app.options.length > 0 ? 'Here are your options: ' + app.options : 'There are no options',
        ' '
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            ' Item one '
        ),
        React.createElement(
            'li',
            null,
            ' Item two '
        )
    )
);

// EVENTS AND EVENT HANDLERS
var count = 0;
var add1 = function add1() {
    console.log('add1');
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Count: ',
        count,
        ' '
    ),
    React.createElement(
        'button',
        { onClick: add1, className: 'button' },
        ' +1 '
    )
);

// Events Challenge 1
// Make a button with the text -1. Only console.log for now.
// Setup minusOne functions
// Setup reset button
var count1 = 10;
var initial = count1;
var minus = function minus() {
    return console.log('minus');
};
var reset = function reset() {
    return console.log('reset');
};
var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Count: ',
        count1,
        ' '
    ),
    React.createElement(
        'button',
        { onClick: add1, className: 'button' },
        ' +1 '
    ),
    React.createElement(
        'button',
        { onClick: minus, className: 'button' },
        ' -1 '
    ),
    React.createElement(
        'button',
        { onClick: reset, className: 'button' },
        ' reset '
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
