'use strict';

console.log('App.js is running');

//JSX - JavasScript XML
var template = React.createElement(
    'h1',
    null,
    'Pick4Me'
);
/*var template = React.createElement(
    "p",
    { id: "someid" },
    "This is JSX from app.js!"
); this is the same as  var template = <p> This is JSX from app.js!</p> but your browser does not undrstand JSX, 
   so we need babel to compile down JSX to regular JavaScript, which is what this is, just JavaScript*/

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
