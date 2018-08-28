class Pick4MeApp extends React.Component {
    render() {
    const t1 = 'Pick4Me';
    const st1 = 'Let Us Choose!';
    const optns = ['Thing one', 'Thing two', 'Thing three'];
        return (
            <div>
                <Header title = {t1} subtitle = {st1}/>
                <Action />
                <Options options = {optns}/>
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

class Action extends React.Component {
    render(){
        return (
            <div>
                <button> What Should I do? </button>
            </div>
        );
    }
}

// CHALLENGE1: create options component 
class Options extends React.Component {
    render () {
        return(
            <div>
                {
                    this.props.options.map((option) => <Option key ={option} optionText = {option} />)
                }
                <Option />
            </div>
        );
    }
}

// Challenge 2: Setup options prop for Options component.
// Render length of array.



class Option extends React.Component{
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