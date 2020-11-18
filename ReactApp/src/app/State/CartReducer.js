import * as ActionTypes from "./ActionType";

const INITIAL_STATE = []; //instead of objet in array we are directly putting array

export default function CartReducer(state = INITIAL_STATE, action) {
    console.log("cart Reducer", state, action);
    switch(action.type) {
        //add to cart
        case ActionTypes.ADD_ITEM:
            //...state; in general => //user, coupon, product, cart but here => {item1, item2}
            //add newitem to cart from action.payload
            //action.payload.item -> item
            return [...state, action.payload.item];
        
        //empty cart
        case ActionTypes.EMPTY_CART:
            return [];

        //update the cart item
        case ActionTypes.UPDATE_ITEM:
            return state.map(item => { //here state is cart items array
                    if (item.id != action.payload.id){
                        return item;
                    }else{
                        // item to update
                        //...item = {id, price, name, qty}
                        return {...item, qty: action.payload.qty}
                }
        })

        //delete cart item which needs to be removed
        case ActionTypes.REMOVE_ITEM: 
            return state.filter(item => item.id != action.payload.id)

        //return basic intial state
        default:
            return state;
    }
}