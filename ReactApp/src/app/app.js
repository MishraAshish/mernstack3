//React application will be this
import "../App.css";
import React, { Component, PureComponent } from "react";
import Footer from "./CommonComponents/FooterComponent";
import Header from "./CommonComponents/HeaderComponent";
import Home from "./CommonComponents/HomeComponent";
import About from "./CommonComponents/AboutComponent";
import User from "./ApplicationComponent/Containers/User/UserContainer";
import Product from "./ApplicationComponent/Containers/Product/ProductContainer";
import DisplayProduct from "./ApplicationComponent/Containers/Product/DisplayProductContainer";

import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";//hashrouter

//export class App extends react.Component{//named export
export default class App extends Component {//deafult export //name of the class should always be capital case
    render() {
        let isAdmin = false;//true;
        // we are going to create html using JSX- Javascript As XML to execute expressions
        return (
            <Router>
                <Header/>
                    <Switch>
                        <Route path="/about" exact component={About}/>
                        <Route path="/about/:id" exact component={About}/>
                        <Route path="/home" exact component={Home}/>
                        <Route path="/user" exact component={User}/>
                        <Route path="/product" exact component={Product}/>
                        <Route path="/display" exact component={DisplayProduct}/>
                        <Route path="/" render={()=>(isAdmin ? <Redirect to="/Home" />: <Redirect to="/about" />)} />
                    </Switch>            
                <Footer />
            </Router>
        )}
}



// export default class App extends Component {//deafult export //name of the class should always be capital case
//     constructor(props, context) {

//         super();
//         this.state = {
//             age: 100,
//             name: "Chris",
//             random: 5001
//         }
//         //this.updateAgeParent();
//     }

//     updateAgeParent = () => {
//         setInterval(() => {
//             this.setState({
//                 age: this.state.age + 1
//             })
//         }, 10000);
//     }

//     callBkFunc4Child = (newValue) =>{
//         //alert("Value from child component " + newValue)
//         this.setState({
//             name: newValue
//         })
//     }

//     render() {
//         // we are going to create html using JSX- Javascript As XML to execute expressions
//         return (
//             <div>
                
//                 <Header/>
//                 <About/>
//                 <Home name={this.state.name} age={this.state.age} session={"MernStack"} funcAsProp={this.callBkFunc4Child}/>             
                            

//                 <Footer />
//                 {/* 
//                 <h2>{this.state.name}</h2>
//                 <b>Parent {this.state.age}</b>   
//                 <strong><i>This message is coming from App Component of React Application</i></strong>
//                 <hr />
                

//                 <hr />
//                 {`Multiplication ${a * b} and addition is ${a + b} and ${this.props.fromIndex}`}
//                 <hr />
//                 {myname}
//                 Footer is going to be child component and accepts props as key value
                
//                 {
//                     this.state.age >= 25 ?
//                     <Footer age={this.state.age} name={"Donald Trump"}>
//                         <h3>HTML Tag from parent </h3>
//                         <h3>We received as props</h3>
//                     </Footer> : 
//                     <h1>{"Footer can't be rendered"}</h1>
//                 } */}
//             </div>
//         )
//     }
// }

// export const somevalue = "3.141";

// export function aFuncComponent() {
//     return (
//         <div>
//             <h1>This is a functional component App Component</h1>
//         </div>
//     )
// };


//Create a class component with name Java and have a state with name version, this version should update in every two seconds
//Create a functional component with name Header and random number as props and prints it, also pass three html elemest h1, h2, h3 with different msgs and show them
//Import both the components in app component and do the given operations