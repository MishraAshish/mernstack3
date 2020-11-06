import React, {Component} from "react";
import PropTypes from "prop-types";

export class Home extends Component {
    constructor(props, context){
        super();
        this.state = {
            name:props.name,
            age:props.age
        }       
    }

    render(){
        //This return will always have a parent elemet to wrap everything :JSX exression must have one parent
        //React.Fragment : it passes the condition of one parent but no extra div's get rendered
        return(
            <React.Fragment>
                <h1>{"Home"}</h1>
                <label>{this.state.age}</label>
                <br/>             
                <label>{this.state.name}</label>                
                <br/>             
                <label>{this.props.session}</label>                
            </React.Fragment>
        )
    }
}

Home.defaultProps = {
    name:"Default",
    age:1,
    session:"React"
}

Home.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    session: PropTypes.string    
}