import React from 'react';

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

export default Action;