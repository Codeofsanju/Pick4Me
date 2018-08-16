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
var add2 = function add2() {
    count1++;
    renderCounterApp();
};
var minus = function minus() {
    count1--;
    renderCounterApp();
};
var reset = function reset() {
    count1 = initial;
    renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
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
            { onClick: add2, className: 'button' },
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
    ReactDOM.render(templateThree, appRoot);
};
var appRoot = document.getElementById('app');
renderCounterApp();
