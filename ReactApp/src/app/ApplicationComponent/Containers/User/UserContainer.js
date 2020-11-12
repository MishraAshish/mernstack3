//this module is going to allow us to read state from store and dispatch actions to the store 
//both will be accessed in react component in the form of props

import {connect} from "react-redux";

import UserComponent from "../../Components/User/UserComponent";
import {addUserToStore} from "../../../State/Actions";

//subscriber : allows us to access data from store and reducer state
let mapStateToProps = (state) => { //map store to props ->  state <==> store
    return {
        user: state.user.user // readind from store.js as  > store > user > user (in userReducer)
    }
}

//allows us to make able to dispatch actions from event raised in component
let mapDispatchToProps = (dispatch) => { 
    return {
        loginUser : (userObject)=>{
            dispatch(addUserToStore(userObject))
        }
    }
}

//connect makes data from mapStateToProps and actions from mapDispatchToProps in the from of props in component
export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);