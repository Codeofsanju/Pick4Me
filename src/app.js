console.log('App.js is running');

//JSX - JavasScript XML
var template = <h1>Pick4Me</h1>;
/*var template = React.createElement(
    "p",
    { id: "someid" },
    "This is JSX from app.js!"
); this is the same as  var template = <p> This is JSX from app.js!</p> but your browser does not undrstand JSX, 
   so we need babel to compile down JSX to regular JavaScript, which is what this is, just JavaScript*/  

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);