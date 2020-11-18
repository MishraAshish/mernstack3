import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import CartItemComponent from "../../Components/Cart/CartItemComponent";
import * as actions from "../../../State/Actions";

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(CartItemComponent) //subscribing to dispatch actions