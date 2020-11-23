//this module imports all the reducers and combines them into one and then export store as centralized data mgmt system
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"; // to be used to make async calls and handle context works as a pipeline
import promise from "redux-promise-middleware"; //used to make server call async using promise

import user from "./app/State/UserReducer";
import product from "./app/State/ProductReducer";
import cart from "./app/State/CartReducer";
import coupon from "./app/State/CouponReducer";

let logger = () => (next) => (action) => {
    //currying in javasript where we pass function as input and recieve function as output
    console.log("Logged Action : Store File ", action); 

    next(action); //move to the actual execution
};

export default createStore(
    combineReducers({
        user, //short hand when variable value and key name are same
        product,
        cart,
        coupon
    }),
    {}, //intial state for store states
    applyMiddleware(logger, thunk, promise) //middle wares tp used at various places like action.js
)