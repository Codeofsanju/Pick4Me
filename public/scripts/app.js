'use strict';

console.log('build-it-visible.js is running');

var app = {
    title: 'Visibility Toggle',
    toggle: false
};

var toggleButton = function toggleButton() {
    if (!app.toggle) {
        app.toggle = true;
    } else {
        app.toggle = false;
    }
    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' ',
            app.title,
            ' '
        ),
        React.createElement(
            'button',
            { onClick: toggleButton, className: 'buttons' },
            ' ',
            app.toggle ? 'Hide Details' : 'Show Details',
            ' '
        ),
        app.toggle && React.createElement(
            'p',
            null,
            ' Hey. These are some details you can now see! '
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderApp();
