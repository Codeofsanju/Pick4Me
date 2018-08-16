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
const add2 = () => {
    count1++;
    renderCounterApp();
};
const minus = () => {
    count1--;
    renderCounterApp();
};
const reset = () => {
    count1 = initial;
    renderCounterApp();
};

const renderCounterApp = () =>{
    const templateThree = (
        <div>
            <h1> Count: {count1} </h1>
            <button onClick= {add2} className="button"> +1 </button>
            <button onClick = {minus} className="button"> -1 </button>
            <button onClick = {reset} className="button"> reset </button>
        </div>
    );
    ReactDOM.render(templateThree, appRoot);
};
renderCounterApp();