import React, {Component} from "react";

export default class Home extends Component {
    constructor(props, context){
        super();        
    }

    render(){
        //This return will always have a parent elemet to wrap everything :JSX exression must have one parent
        //React.Fragment : it passes the condition of one parent but no extra div's get rendered
        return(
            <React.Fragment>
                <h1>{"H1"}</h1>
                <h1>{"H2"}</h1>
            </React.Fragment>
        )
    }
}