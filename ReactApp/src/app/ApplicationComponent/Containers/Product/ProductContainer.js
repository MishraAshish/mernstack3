import {connect} from "react-redux";
import ProductComponent from "../../Components/Product/ProductComponent";
import {saveProduct} from "../../../State/Actions"

//to subscribe we need to have - mapstatetoprops
let mapStateToProps = (state)=>{ //we get the whole store object
    return {
        defaultProd : state.product.defaultProduct       
    }
}


//to publish we need to have - mapdispatchtoprops
let mapDispatchToProps = (dispatch)=>{
    return {
        saveProduct: (productObject)=>{
            dispatch(saveProduct(productObject));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);