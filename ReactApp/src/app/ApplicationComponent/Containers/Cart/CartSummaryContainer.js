import {connect} from 'react-redux';
import CartSummaryComponent from "../../Components/Cart/CartSummaryComponent";

let recalculate = (cartItems) => {
    let amount = 0, 
        count = 0;

    for(let item of cartItems) {
        amount += item.qty * item.price;
        count  += item.qty; 
    }

    return {
        amount, //ES6 syntactic sugar amount: amount 
        count // if key and values are same name then we can put it this way without ":"
    }
}

const mapStateToProps = (state) => {
    let result = recalculate(state.cart); //opposite of destructuring state.cart == cartItems
    return {...result}; //spread operator {amount, count}
}

export default connect(mapStateToProps, null)(CartSummaryComponent);