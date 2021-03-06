//this module will be used to create new User State depending upon action type that we have passed to it
import * as ActionTypes from "./ActionType";

let INITIAL_STATE = {
    user : {
        userName : "",
        password : "",
        street : "",
        mobile : "",
        _id: ""
    }
}

let UserReducer = (previousState = INITIAL_STATE, action) => {
        
        switch (action.type) {        
            case ActionTypes.AddUserToStore:
                console.log("Adduser To Store Reducer", action)
                //we will create a new state using payload passed from user component and container
                //for every action dispatch reducer generates a new state
                // let newState = Object.assign(previousState);
                // newState.user = action.payload.user;

                return {...previousState, user:action.payload.user}; //returns a new state
        
            default:
                return previousState;
        }
}

export default UserReducer;