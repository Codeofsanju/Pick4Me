import React from 'react';
import AddOptions from './AddOptions.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';

export default class Pick4MeApp extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAction = this.handleAction.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOneOption = this.handleRemoveOneOption.bind(this);
        this.state ={
            options: [],
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
