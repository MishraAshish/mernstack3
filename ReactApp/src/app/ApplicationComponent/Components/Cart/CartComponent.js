import React from "react";
import CartListComponent from "../../Containers/Cart/CartListContainer";
import CartSummaryComponent from "../../Containers/Cart/CartSummaryContainer";

let CartComponent = (props) => {
    return(
        <div className="cartComponent">
                <h2>SynergisticIT Shopping Cart To Add Items</h2>
                <p><b>Cart Length : {props.cart.length}</b></p>

                <button onClick={props.addItemToCart} >
                    Add Item
                </button>

                <button onClick={props.emptyCart} >
                    Empty
                </button>

                <CartListComponent/>            
                <CartSummaryComponent/>
                
                <button onClick={() => props.saveItemsForCheckout(props.cart, props.user._id)} >
                    Save For Checkout
                </button> 
                <button onClick={() => props.history.push("/checkout")} >
                    Go To Checkout
                </button>
            </div>
    )
}

export default CartComponent;