//This Module will contain all the actions that are going to be used in Container and Component Modules
import * as ActionTypes from "./ActionType";

//action that would be dispatched to the store (eventually to reducer)
export const addUserToStore = (user) => ({        
    type: ActionTypes.AddUserToStore,
    payload: {user}
})