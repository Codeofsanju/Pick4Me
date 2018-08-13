console.log('App.js is running');


const app = {
    title: 'Pick4me!',
    subtitle: 'We pick for you :)',
    options: ['one', 'two',],
};


//JSX - JavasScript XML
const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}   
        <p> {app.options.length > 0 ?'Here are your options: ' + app.options : 'There are no options'} </p>
        <ol> 
            <li> Item one </li>
            <li> Item two </li>
        </ol>
    </div>
);




const user = {
    userName: 'Sanjeev Sharma',
    userAge: 25,
    userLocation: 'NYC'
};

function getLocation(location){
    if (location) { // if location does exist
        return <p>Location: {location} </p>;
    }
}
const templateTwo = (
    <div>
        <h1>{user.userName ? user.userName : 'Anonymous'}</h1>
        {(user.userAge && user.userAge >= 18) && <p>Age: {user.userAge}</p>}
        {getLocation(user.userLocation)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);