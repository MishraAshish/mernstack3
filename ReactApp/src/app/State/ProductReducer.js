import * as ActionTypes from "./ActionType";

let INITIAL_STATE = {
    defaultProduct : {
        name : "",
        price : 0,
        camera : "",
        ram : "",
        display : "",
        color : ""
     },
     products:[]
}

export default function ProductReducer(state=INITIAL_STATE, action)
{
    console.log("Product Reducer :",state);
    debugger;
    switch (action.type) {

        case "AddProducts" :
            return {...state, products:action.payload.products};

        case ActionTypes.FETCH_PRODUCTS_FULFILLED:            
            return {...state, products:action.payload};

        default:
            return state;
    }
}