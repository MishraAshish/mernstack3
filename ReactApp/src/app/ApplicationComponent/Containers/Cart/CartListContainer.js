import {connect} from "react-redux";
import CartListComponent from "../../Components/Cart/CartListComponent";


let mapStateToProps = (state)=>{
    return {
        items : state.cart
    }
}


export default connect(mapStateToProps, null)(CartListComponent);