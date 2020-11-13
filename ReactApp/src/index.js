//here onwards our application starts -very first page of our application
console.log("The entry page that is index.js has been loaded");
// react app is going to be a single page app
console.log("We are going to bootstrap react application to root div element using render method of react-dom module")

import React from "react"; // importing default class without paranthesis
import {render} from "react-dom"; //named import so we are using it in parenthesis its not default

//import {App} from "./app/app";
import App from "./app/app"; //default
import {Provider} from "react-redux"; //makes store available to each connect present in application
import store from "./store"; //redux object to manage data

render(
    <Provider store={store} >
        <App/> 
    </Provider>,//first providing react application to be rendered
    document.getElementById("root") //providing the html element in which we need to inject react application
)