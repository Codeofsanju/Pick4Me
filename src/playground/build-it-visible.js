console.log('build-it-visible.js is running');

// CHALLENGE, build Visibility Toggle again, this time using components and states


class VisibleApp extends React.Component {
    render(){
        return(
            <div>
                <h1> Visibility Toggle </h1>
                <Toggle />
            </div>
        );
    }
}

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.displayMessage = this.displayMessage.bind(this);
        this.state = {
            text: 'There are some details you can now see!',
            buttonText: 'Show Details',
            toggle: false
        }
    }
    displayMessage(){
        this.setState((pastState) => {
            if(!pastState.toggle){    
                return{
                    toggle: pastState.toggle = true,
                    buttonText: pastState.buttonText = 'Hide Details',
                }
            }
            else{
                return{
                    toggle: pastState.toggle = false,
                    buttonText: pastState.buttonText = 'Show Details',
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button onClick = {this.displayMessage}> {this.state.buttonText} </button>
                {this.state.toggle &&(
                    <p> {this.state.text} </p>
                )}
            </div>
        );
    }
}


ReactDOM.render(<VisibleApp/>, document.getElementById('app'));

/*const app = {
    title: 'Visibility Toggle',
    toggle: false,
};

const toggleButton = () =>{
    if(!app.toggle){
        app.toggle = true;
    }
    else{
        app.toggle = false;
    }
    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1> {app.title} </h1>
            <button onClick = {toggleButton} className = "buttons"> {app.toggle ? 'Hide Details' : 'Show Details'} </button>

            {app.toggle && (
                <p> Hey. These are some details you can now see! </p>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};



const appRoot = document.getElementById('app');
renderApp();*/
