//React application will be this
import React, { Component, PureComponent } from "react";
import Footer from "./CommonComponents/FooterComponent";

//export class App extends react.Component{//named export

export default class App extends Component{//deafult export //name of the class should always be capital case
    constructor(props, context){

        super();
        this.state = {
            age : 15
        }
        this.updateAge();
    }
    
    updateAge = ()=>{
        setInterval(() => {
            this.setState({
                age:this.state.age+1
            })    
        }, 1000);
    }

    render(){
        let myname = "Biden";
        //console.log("Render Method");
        let a = 5, b=10;

        return(
            <div>
                <h1>This is App Component</h1> 
                <strong><i>This message is coming from App Component of React Application</i></strong>
                <hr/>
                {this.state.age}

                <hr/>
                {`Multiplication ${a*b} and addition is ${a+b}`}
                <hr/>
                {myname}
                {/* Footer is going to be child component and accepts props as key value*/}
                <Footer age={this.state.age} name = {"Donald Trump"}>
                    <h3>HTML Tag from parent </h3>    
                    <h3>We received as props</h3>    
                </Footer> 
            </div>
        )
    }
}

export const somevalue = "3.141";

export function aFuncComponent(){
    return(
        <div>
            <h1>This is a functional component App Component</h1> 
        </div>
    )
};


//Create a class component with name Java and have a state with name version, this version should update in every two seconds
//Create a functional component with name Header and random number as props and prints it, also pass three html elemest h1, h2, h3 with different msgs and show them
//Import both the components in app component and do the given operations