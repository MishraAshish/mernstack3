//React application will be this
import "../App.css";
import React, { Component, PureComponent } from "react";
//import Footer from "./CommonComponents/FooterComponent";
//import Header from "./CommonComponents/HeaderComponent";
//import Home from "./CommonComponents/HomeComponent";
//import About from "./CommonComponents/AboutComponent";
//import NotFound from "./CommonComponents/NotFoundComponent";
//import User from "./ApplicationComponent/Containers/User/UserContainer";
//import Product from "./ApplicationComponent/Containers/Product/ProductContainer";
import Cart from "./ApplicationComponent/Containers/Cart/CartContainer";
import DisplayProduct from "./ApplicationComponent/Containers/Product/DisplayProductContainer";
import Checkout from "./ApplicationComponent/Containers/Checkout/CheckoutContainer";
import ProductHooks from "./ApplicationComponent/Components/Product/ProductComponentHooks";
import CouponHooks from "./ApplicationComponent/Components/Coupon/CouponComponent";
import {AtmDispenser} from "./CommonComponents/AtmDispenser";

import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";//hashrouter
import Loadable from "react-loadable"; // Importing Loadable to be used for lazy loading

// functional component, used as placeholder
//when lazy loaded modules delayed
function Loading() {
    return (
        <div>
            Loading Project...
        </div>
    )
}
const Home = Loadable({
    loader: () => import("./CommonComponents/HomeComponent"),
    loading: Loading,
});

const Footer = Loadable({
    loader: () => import("./CommonComponents/FooterComponent"),
    loading: Loading,
});

const Header = Loadable({
    loader: () => import("./CommonComponents/HeaderComponent"),
    loading: Loading,
});

const About = Loadable({
    loader: () => import("./CommonComponents/AboutComponent"),
    loading: Loading,
});

const NotFound = Loadable({
    loader: () => import("./CommonComponents/NotFoundComponent"),
    loading: Loading,
});

const User = Loadable({
    loader: () => import("./ApplicationComponent/Containers/User/UserContainer"),
    loading: Loading,
});

const Product = Loadable({
    loader: () => import("./ApplicationComponent/Containers/Product/ProductContainer"),
    loading: Loading,
});

//export class App extends react.Component{//named export
export default class App extends Component {//deafult export //name of the class should always be capital case
    render() {
        let isAdmin = true;//false;
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
                        <Route path="/productHooks" exact component={ProductHooks}/>
                        <Route path="/display" exact component={DisplayProduct}/>
                        <Route path="/cart" exact component={Cart}/>
                        <Route path="/coupon" exact component={CouponHooks}/>
                        <Route path="/NotFound" component={NotFound} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/atmdispenser" component={AtmDispenser} />
                        <Route path="/" render={()=>(isAdmin ? <Redirect to="/Home" />: <Redirect to="/NotFound" />)} />
                        
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