console.log('build-it-visible.js is running');


const app = {
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
renderApp();
