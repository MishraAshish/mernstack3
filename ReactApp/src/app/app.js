//React application will be this
import React from "react";

//export class App extends react.Component{//named export
export default class App extends React.Component{//deafult export

    render(){
        return(
            <div>
                <h1>This is App Component</h1> 
                <strong><i>This message is coming from App Component of React Application</i></strong>
                
            </div>
        )
    }
}

export const somevalue = "3.141";