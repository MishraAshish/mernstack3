import React, {Component, PureComponent} from "react";
import PropTypes from "prop-types";

export default class Home extends Component {
    
//has own implementation of shouldComponentUpdate 
//and we need not to put check for updated state or props to stop invokimg render which creates virtual dom
//export class Home extends PureComponent { 

    constructor(props, context){
        super();
        this.state = {
            name: props.name, //initializing state using props
            age: props.age,
            textValue : "Default"
        }       
        //props.age = 35;//this is not allowed as props belong to parent and must not be updated or mutated
        //this.updateAge();
    }

    updateAge = () => {
        setInterval(() => {
            
            this.setState({ //React api to update the state and is associated with render method accepts data in and executes as callback
                age: 25
            })

            //this.state.age = 41;

            //skips all lifecycle methods and call render so load on virtual DOM
            //this.forceUpdate(); wemust avoid using this way of updating values unless the last option, 
            
            console.log("Age " + this.state.age)
        }, 2000);
    }    

    textOnChange = (event)=>{
        let target = event.target;
        this.setState({
            textValue : target.value
        })
    }

    //update lifecycle method
    // shouldComponentUpdate(nextState, nextProps) {
    //     //console.log(nextState);
    //     if (nextProps.age == this.state.age) {
    //         return false;
    //     } else {
    //         return true;    
    //     }
    // }


    render(){
        console.log("Render Home")
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
                <br/>
                <input type="text" className="col-md-6 form-control" value={this.state.textValue} onChange={this.textOnChange} ></input>
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