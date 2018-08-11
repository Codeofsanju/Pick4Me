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

var user = {
    userName: 'Sanjeev Sharma',
    userAge: 25,
    userLocation: 'NYC'
};

function getLocation(location) {
    if (location) {
        // if location does exist
        return React.createElement(
            'p',
            null,
            'Location: ',
            location,
            ' '
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.userName ? user.userName : 'Anonymous'
    ),
    user.userAge && user.userAge >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.userAge
    ),
    getLocation(user.userLocation)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
