class Pick4MeApp extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAction = this.handleAction.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state ={
            options: props.options,
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
    handleAddOption(option){
        if(!option){ // if form was empty
            return 'Please enter a valid option';
        }
        else if(this.state.options.indexOf(option) > -1){ // returns index of option if it exists in options array. Return -1 if not
            return 'This already exists in your options';
        }
        // else
        this.setState((prevState)=>{
            return{
                options: prevState.options.concat(option), // makes new array that concats old array with the new option array
            };
        });
    }
    render() {
    const st1 = 'Let Us Choose!';
        return (
            <div>
                <Header subtitle = {st1}
                />
                <Action 
                    hasOptions = {this.state.options.length > 0} 
                    handleAction = {this.handleAction}
                />
                <Options 
                options = {this.state.options} 
                handleRemoveAll = {this.handleRemoveAll}
                />
                <AddOptions 
                handleAddOption = {this.handleAddOption} 
                />
            </div>
        );
    }
}
Pick4MeApp.defaultProps = {
    options: [],
};

const Header = (props)=>{
    return(
        <div>
            <h1> {props.title} </h1>
            {props.subtitle && <h2> {props.subtitle} </h2>}
        </div>
    );
}
Header.defaultProps = {
    title: 'Pick4Me',
};

const Action = (props) => { // STATELESS FUNCTIONAL COMPONENT - random pick button (disbaled when options array is empty)
    return(
        <div>
            <button
                onClick={props.handleAction}
                disabled={!props.hasOptions}>
                What Should I do?  
            </button>
        </div>
    );
}

const Options = (props) => {
    return(
        <div>
        <button onClick = {props.handleRemoveAll}> Remove All </button>
            {
                props.options.map((option) => <Option key ={option} optionText = {option} />) // for each element in options array, an individual option component is rendered
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <p key = {props.option}> Option: {props.optionText} </p> 
        </div>
    );
}

// AddOptions
class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            error: undefined,
        }
    }
    handleFormSubmit(e){ // add to options vector
        e.preventDefault();
        const option = e.target.elements.option.value.trim(); // .trim() removes all leading and ending whitespace. 
        //console.log(option);
        const error = this.props.handleAddOption(option); // error will be one of the error return strings if a string is returned, else undefined and falsy
        this.setState(()=>{
            return{
                error: error,
            };
        }); 
    }
    render(){
        return (
            <div>
                {this.state.error && <p> {this.state.error} </p>} 
                <form onSubmit = {this.handleFormSubmit}>
                    <input type = 'text' name = "option"/>
                    <button> Add Option </button>
                </form>
            </div>
        );
    }
}




ReactDOM.render(<Pick4MeApp options = {['someOptions1', 'someOptions2']}/>, document.getElementById("app"));