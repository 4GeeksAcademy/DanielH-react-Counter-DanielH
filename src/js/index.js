//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application
let counter = 0;

setInterval(() => {
    // render your react application
    console.log(counter)
    ReactDOM.render(<SecondsCounter counter={counter}/>, document.querySelector("#app"));  
    counter++;
}, 1000);
