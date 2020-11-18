import {connect} from "react-redux";
import CartComponent from "../../Components/Cart/CartComponent";

import {addItemToCart, emptyTheCart, saveItemsForCheckout} from '../../../State/Actions';

let mapStateToProps = (state)=>{
    return {
        cart : state.cart,
        user: state.user.user
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        addItemToCart : ()=>{
            let id = Math.ceil(Math.random() * 10000); //item id
            //cart item object
            let item = {
                id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }
            const action = addItemToCart(item);
            dispatch(action);
        },
        emptyCart : ()=>{
            dispatch(emptyTheCart())
        },
        saveItemsForCheckout : (cart, userid)=>{
            if (userid) {
               if (cart && cart.length>=1) {
                    dispatch(saveItemsForCheckout(cart, userid));    
               } else {
                   alert("Please add items to cart!");
               }                  
           }
           else{ 
               alert("Please Login to save cart!");
           }
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);