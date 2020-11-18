import React from "react";

export default function CartSummaryComponent(props) {
    let {
        count,
        amount
    } = props; //destructuring //{...result} == {amount , count}

    //count = props.count , amount = props.amount
    return (
        <div> 
            <h2>Cart Summary</h2>
            <p> Amount: {amount} </p>
            <p> Count: {count} </p>
        </div>
    )     
}