import {connect} from "react-redux";
import DisplayProduct from "../../Components/Product/DisplayProductComponent";

import {fetchProducts} from "../../../State/Actions";

let mapStateToProps = (state) =>{
    debugger;
    return {
        products : state.product.products
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts : ()=>{
            dispatch(fetchProducts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayProduct);