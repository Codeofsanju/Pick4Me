// Using Component State
class CounterApp extends React.Component{
    constructor(props){
        super(props);
        this.handleReset = this.handleReset.bind(this);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        
        this.state = {
            count: props.count,
        };
    }
    handleAddOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count + 1,
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count - 1,
            };
        });
    }
    handleReset(){
        this.setState(() => {
            return{
                count: 0,
            };
        });
    }

    render(){
        return(
            <div>
                <h1> Count: {this.state.count}</h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleMinusOne}>-1</button>
                <button onClick = {this.handleReset}>Reset</button>
            </div>
        );
    }
}
CounterApp.defaultProps ={
    count: 0,
};
ReactDOM.render(<CounterApp />, document.getElementById('app'));









// EVENTS AND EVENT HANDLERS
/*let count = 0;
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
renderCounterApp();*/

