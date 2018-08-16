console.log('App.js is running');


const app = {
    title: 'Pick4me!',
    subtitle: 'We pick for you :)',
    options: ['one', 'two',],
};


//JSX - JavasScript XML
const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}   
        <p> {app.options.length > 0 ?'Here are your options: ' + app.options : 'There are no options'} </p>
        <ol> 
            <li> Item one </li>
            <li> Item two </li>
        </ol>
    </div>
);


// EVENTS AND EVENT HANDLERS
let count = 0;
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
const minus = () => console.log('minus');
const reset = () => console.log('reset');
const templateThree = (
    <div>
        <h1> Count: {count1} </h1>
        <button onClick= {add1} className="button"> +1 </button>
        <button onClick = {minus} className="button"> -1 </button>
        <button onClick = {reset} className="button"> reset </button>
    </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);