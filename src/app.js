class Pick4MeApp extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAction = this.handleAction.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOneOption = this.handleRemoveOneOption.bind(this);
        this.state ={
            options: props.options,
        }; 
    }

    //LIFECYCLE METHODS
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(()=> ({options: options}))
            }
        } catch(e){
            //do  nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    componentWillUnmount(){
        console.log('ComponentWillUnmount');
    }

    /*handleRemoveAll() {
        this.setState(()=>{
            return{
                options: [],
            };
        });
    }*/
    
    // Implicit call to set state
    handleRemoveAll() {
        this.setState(()=> ({ options: [] }));
    }
    handleRemoveOneOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option)=> { // filter goes through the option array looking for a value. 
                //return optionToRemove === option; // if optionToRemove is found, true is returned and everything else is removed accept the found item
                return optionToRemove !== option; // if optionToRemove is found, false is returned and filter removes this item and everything else stays
            })
        }));
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

        //else
        this.setState((prevState)=> ({options: prevState.options.concat(option)}))
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
                handleRemoveOneOption = {this.handleRemoveOneOption}
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
            {props.options.length === 0 && <p> Please add an options to get started </p>}
            
            <button 
                onClick = {props.handleRemoveAll}
                disabled = {props.options.length === 0}    
            > 
            Remove All </button>
            
            {
                    props.options.map((option) => <Option key ={option} optionText = {option} handleRemoveOneOption = {props.handleRemoveOneOption} />) // for each element in options array, an individual option component is rendered
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick = {(e) => {
                    props.handleRemoveOneOption(props.optionText);
                }}
            > Remove </button> 
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

        this.setState(() => ({error: error})) 
        
        if(!error){ // if no error, clear input field
            e.target.elements.option.value = ''; 
        }
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




ReactDOM.render(<Pick4MeApp />, document.getElementById("app"));