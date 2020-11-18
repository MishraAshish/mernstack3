import React from "react";
import CartItemComponent from "../../Containers/Cart/CartItemContainer";

let CartListComponent = (props) => {
    let {items} = props;
    return(
        <div> 
            <h2>Cart List</h2>
            { items.length <= 0 ?
                <b>No Items In Your Cart Kindly Add One</b>
                :
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            {props.donotMakeEditable ? "" : <th>Remove/Edit</th> }
                        </tr>
                    </thead>
                    <tbody>
                    {            
                        items.map (item => (
                            <CartItemComponent 
                                        item={item}
                                        key={item.id}
                                        donotMakeEditable = {props.donotMakeEditable}
                            />
                        ))
                    }
                    </tbody>
                </table>
            }
        </div>   
    )
}

export default CartListComponent;