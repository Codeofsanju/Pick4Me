import React from 'react';

// AddOptions
export default class AddOptions extends React.Component {
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