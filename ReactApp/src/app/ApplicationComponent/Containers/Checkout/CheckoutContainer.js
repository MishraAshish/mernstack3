import {connect} from "react-redux";
import CheckoutComponent from "../../Components/Checkout/CheckoutComponent";


let mapStateToProps = (state) =>{
    return{
        user: state.user.user,
        coupon : state.coupon.coupon
    }
}

export default connect(mapStateToProps, null)(CheckoutComponent);