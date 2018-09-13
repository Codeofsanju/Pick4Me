import React from 'react';

//single option
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
export default Option;