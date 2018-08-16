'use strict';

console.log('App.js is running');

var app = {
    title: 'Pick4me!',
    subtitle: 'We pick for you :)',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    // e = event object: contains various information about the event object
    e.preventDefault(); // stops full page refresh

    var option = e.target.elements.option.value; // grab user submitted option from form
    if (option) {
        // check if option is populated
        app.options.push(option); // push to options vector
        e.target.elements.option.value = ''; // empty form text field
        renderApp(); // re-render app
    }
};

var clearList = function clearList() {
    app.options = [];
    renderApp();
};

//JSX - JavasScript XML
var renderApp = function renderApp() {
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
            'p',
            null,
            ' ',
            app.options.length,
            ' '
        ),
        React.createElement(
            'button',
            { onClick: clearList, className: 'button' },
            ' Remove All '
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            ' ',
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                ' Add options '
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
var appRoot = document.getElementById('app');
renderApp();
