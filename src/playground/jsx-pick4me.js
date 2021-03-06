console.log('App.js is running');


const app = {
    title: 'Pick4me!',
    subtitle: 'We pick for you :)',
    options: [],
};


const onFormSubmit = (e) => { // e = event object: contains various information about the event object
    e.preventDefault(); // stops full page refresh
    
    const option = e.target.elements.option.value; // grab user submitted option from form
    if(option){ // check if option is populated
        app.options.push(option); // push to options vector
        e.target.elements.option.value = ''; // empty form text field
        renderApp(); // re-render app
    }
};

const clearList = () => {
    app.options = [];
    renderApp();
};

const makeDecision = () =>{    
    const randomIndex = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomIndex];
    alert(option);
};

//JSX - JavasScript XML
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}   
            <p> {app.options.length > 0 ?'Here are your options: ' + app.options : 'There are no options'} </p>
            <p> {app.options.length} </p>
            <button disabled={app.options.length == 0} onClick = {makeDecision} className = "button"> Pick4me </button>
            <button onClick = {clearList} className = "button"> Remove All </button>
            <ol> 
                {
                    app.options.map((option) => <li key = {option}> {option} </li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}> {/* reference the function, do not call it.*/ }
                <input type="text" name="option"/>
                <button> Add options </button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
const appRoot = document.getElementById('app');
renderApp();
