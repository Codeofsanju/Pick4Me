class Pick4MeApp extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAction = this.handleAction.bind(this);
        this.state ={
            options: ['Thing 1', 'Thing 2', 'Things 3', 'Thing 5', 'Thing 6', 'Thing 7'],
        }; 
    }
    handleRemoveAll() {
        this.setState(()=>{
            return{
                options: [],
            };
        });
    }
    handleAction(){ // randomly select ine thing from list
        const randomIndex = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomIndex]);
    }
    render() {
    const t1 = 'Pick4Me';
    const st1 = 'Let Us Choose!';
    //const optns = ['Thing one', 'Thing two', 'Thing three'];
        return (
            <div>
                <Header title = {t1} subtitle = {st1}/>
                <Action hasOptions = {this.state.options.length > 0} handleAction = {this.handleAction}/>
                <Options options = {this.state.options} handleRemoveAll = {this.handleRemoveAll}/>
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component { // must use uppercase for class name
    render(){// required to be defined in react components
        return (
            <div>
                <h1> {this.props.title} </h1>
                <h2> {this.props.subtitle} </h2>
            </div>
        );
    } 
}

class Action extends React.Component { // random pick button (disbaled when options array is empty)

    render(){
        return (
            <div>
                <button 
                    onClick={this.props.handleAction}
                    disabled = {!this.props.hasOptions}
                > 
                What Should I do?
                </button>
            </div>
        );
    }
}

// CHALLENGE1: create options component 
// EVENTS AND METHODS CHALLENGE: Add remove all button and then setup handleRemoveAll
class Options extends React.Component { // list of options, remove all options button

    render () {
        return(
            <div>
            <button onClick = {this.props.handleRemoveAll}> Remove All </button>
                {
                    this.props.options.map((option) => <Option key ={option} optionText = {option} />) // for each element in options array, an individual option component is rendered
                }
            </div>
        );
    }
}



// Challenge 2: Setup options prop for Options component.
// Render length of array.



class Option extends React.Component{ // individual option
    render(){
        return(
            <div>
                <p key = {this.props.option}> Option: {this.props.optionText} </p> 
            </div>
        );
    }
}

// AddOptions
class AddOptions extends React.Component {
    handleFormSubmit(e){ // add to options vector
        e.preventDefault();
        const option = e.target.elements.option.value.trim(); // .trim() removes all leading and ending whitespace. 
        console.log(option);
        if(option){
            alert(option);
        }
    }

    render(){
        return (
            <div>
                <form onSubmit = {this.handleFormSubmit}>
                    <input type = 'text' name = "option"/>
                    <button> Add Option </button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<Pick4MeApp />, document.getElementById("app"));