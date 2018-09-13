import React from 'react';
import Option from './Option.js';

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

export default Options;