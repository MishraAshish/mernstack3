import React, {Component, PureComponent} from "react";
import PropTypes from "prop-types";

export default class Home extends Component {
//has own implementation of shouldComponentUpdate 
//and we need not to put check for updated state or props to stop invokimg render which creates virtual dom
//export default class Home extends PureComponent { 

    constructor(props, context){
        super();
        this.state = {
            name: props.name, //initializing state using props
            age: props.age,
            textValue : "Default",
            newState: 11
        }       
        //props.age = 35;//this is not allowed as props belong to parent and must not be updated or mutated
        //this.updateAgeHome();
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
        this.inputAge = React.createRef();
        console.log("Constructor")
        //this.input.current.focus();
    }

    componentDidMount(){
        //view is ready and can be accessed, we can make server call to fetch data
        //change or update the state
        console.log("componentDidMount");
        //debugger;
        setTimeout(() => {
            this.input.current.focus();
            this.input.current.value = "Added Value in Did Mount";    
        }, 3000); 
    }
    //creation lifecycle method ends

    //update lifecycle method
    shouldComponentUpdate(nextState, nextProps) {
        console.log("shouldComponentUpdate");
        console.log("nextState",nextState);
        console.log("nextProps", nextProps);
        if (nextProps.age == this.state.age) {
            return false;
        } else {
            return true;    
        }
    }

    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);
    }

    //destruction life cycle method
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    updateAgeHome = () => {
        setInterval(() => {
            
            //this.state.newState = this.state.newState + 1; //Jack- ,Chris - Update bt not show on UI, Randy - 1, Tim - Not update the state,
            //console.log("newState " + this.state.newState)
            this.setState({ //React api to update the state and is associated with render method accepts data in and executes as callback
                age: 25,
                name: "Randy"
            })

            //this.state.age = 41;
            //skips all lifecycle methods and call render so load on virtual DOM
            //this.forceUpdate(); //we must avoid using this way of updating values unless the last option, 
            
            console.log("Age " + this.state.age)            
        }, 3000);
    }    

    textOnChange = (event)=>{
        let target = event.target;
        
        this.setState({
            textValue : target.value
        })
    }

    btnClick = (event)=>{
        //alert("Hello! i am clicked!")
        this.setState({
            textValue : "MERN Stack"
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        //try {
            this.setState({
                name: this.input.current.value,
                age: this.inputAge.current.value
            })
            state = {};
        // } catch (error) {
        //     console.log("error" + error)
        // }

        
        
    }    

    componentDidCatch(err){
        console.log("componentDidCatch")   
    }

    render(){
        return(
            <div className={"loadimage"} style={{backgroundImage: "url(./images/hm_pic4.jpg)"}}>
                    {/* <img src={"./images/hm_pic4.jpg"} /> */}
                    {this.state.Title}
                    <br/>
                    <b className="feature">{"Below Feature's We've Implemented in our project :"}</b>
                    <ul>                     
                        <li>Sign up new users</li>
                        <li>Login existing users.</li>
                        <li>Add products/items to user's cart.</li>
                        <li>Save the user's cart.</li>
                        <li>Checkout and pay for items.</li>
                    </ul>

                    <button onClick={()=> this.props.history.push("/about/2500")}>GoTo About Page</button>
                    {/* <br/>
                    <button onClick={()=> this.props.history.push("/hook")}>GoTo React Hooks</button> */}
                </div>
        )
    }
}

//     render(){
//         console.log("Render Home")
//         //This return will always have a parent elemet to wrap everything :JSX exression must have one parent
//         //React.Fragment : it passes the condition of one parent but no extra div's get rendered
//         return(
//             <React.Fragment>
//                 {/* <h2>{this.state.newState}</h2> */}
//                 <h1>{"Home"}</h1>
//                 <label>{this.state.age}</label>
//                 <br/>             
//                 <label>{this.state.name}</label>                
//                 <br/>             
//                 <label>{this.props.session}</label>
//                 <br/>                
//                 {/* <label><b>Child (Home)</b> {this.props.age}</label>                 */}
//                 <br/>
//                 <input type="text" className="col-md-6 form-control" value={this.state.textValue} onChange={this.textOnChange} ></input>
//                 <input type="button" className="button" onClick={this.btnClick} value="Save"></input>

//                  {/* below code is used to send data back to parent */}
//                 <input type="button" className="button" onClick={()=>this.props.funcAsProp("Joe Biden")} value="Call Back To Parent"></input>
//                 <input type="button" className="button" onClick={()=>this.props.funcAsProp(this.state.textValue)} value="Send Dynamic"></input>
                
//                 <button onClick={ ()=> this.props.history.push("/about/2000")}>GoTo About</button>

//                 {/* controlled Component implementation using ref keyword */}
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                     Name:
//                         <input type="text" ref={this.input} placeholder="Please enter name"/>
//                     </label>
                    
//                     <label>
//                     Age:
//                         <input type="text" ref={this.inputAge} placeholder="Please enter age"/>
//                     </label>

//                     <input type="submit" value="Submit" />
//                 </form>
//             </React.Fragment>
//         )
//     }
// }

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