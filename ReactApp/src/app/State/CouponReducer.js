import * as ActionTypes from "./ActionType";//alias import  

const INITIAL_STATE ={  
    coupon : "Coupon Code Not Generated"  
}  

export default function couponReducer(state=INITIAL_STATE, action) {  
    switch(action.type) {  
        
        case(ActionTypes.ADD_COUPON) :  
            console.log(state)  
            console.log(action.payload);  
            return {...state, coupon : action.payload};  
        
        default:  
            return state  
    }  
}