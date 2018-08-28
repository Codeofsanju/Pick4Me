class Pick4MeApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Option />
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component { // must use uppercase for class name
    render(){// required to be defined in react components
        return (
            <div>
                <h1> Pick4Me </h1>
                <h2> Let Us Choose! </h2>
            </div>
        );
    } 
}

class Action extends React.Component {
    render(){
        return (
            <div>
                <button> What Should I do? </button>
            </div>
        );
    }
}

// CHALLENGE: create options component 
class Option extends React.Component {
    render () {
        return(
            <div>
                <h1> This is Options Component </h1>
                <Options />
            </div>
        );
    }
}
class Options extends React.Component{
    render(){
        return(
            <div>
                <p> Option Component here </p>
            </div>
        );
    }
}

// AddOptions
class AddOptions extends React.Component {
    render(){
        return (
            <div>
                <ol>
                    <li> Item 1 </li>
                    <li> Item 2 </li>
                </ol>
            </div>
        );
    }
}


ReactDOM.render(<Pick4MeApp />, document.getElementById("app"));