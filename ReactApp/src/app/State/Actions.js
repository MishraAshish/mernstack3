//This Module will contain all the actions that are going to be used in Container and Component Modules
import * as ActionTypes from "./ActionType";

//Product Action and Server Call
export const saveProduct = (product)=>{
    console.log("Product ", product);
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/api/saveProduct",{
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(productresp => productresp.json())
        .then((productresp)=>{
            console.log("product save response ", productresp);
            //dispatch(loading(false));
            dispatch(fetchProducts());
        })
        .catch((err)=>{
            console.log("Error While SAving Product", err)
        })
    }
};

// export const addProductToStore = (products) => ({        
//     type: "AddProducts",
//     payload: {products}
// })

// export const fetchProducts_ = ()=>{
//     return function (dispatch) {
//         //dispatch(loading(true));

//         window.fetch("http://localhost:9090/api/fetchproducts",{
//             method: 'get', //rest method type 
//         })
//         .then(productresp => productresp.json())
//         .then((productresp)=>{
//             console.log("product save response ", productresp);
//             //dispatch(loading(false));
//             dispatch(addProductToStore(productresp));
//         })
//         .catch((err)=>{
//             console.log("Error While SAving Product", err)
//         })
//     }
// };

//dispatching to product reducer using promise (plain promise)
export const fetchProducts = () => ({    
    type : ActionTypes.FETCH_PRODUCTS,
    payload: {
            promise: new Promise((resolve, reject) => { 
                fetch("http://localhost:9090/api/fetchproducts", {
                    method: 'GET'
                }).then(                
                    response => response.json(),
                    error => console.log('An error occurred.', error)
                ).then(responseProducts => {
                    // want to updatePath for the route here:
                    //dispatch(updatePath('/'));
                    //console.log("responseProducts ", responseProducts)
                    resolve(responseProducts)
                })
                .catch(error => {
                    reject(error);
                    //dispatch(error); -- promise Issue                        
                })
            })
        }       
});

//action that would be dispatched to the store (eventually to reducer)
export const addUserToStore = (user) => ({        
    type: ActionTypes.AddUserToStore,
    payload: {user}
})

export const singInUpUser = (userObject)=>{
    // thunk, returns function as an action
    return function(dispatch, getState) {
        // here we go with ajax call : to save data to the server or fetch is from the server
        // thunk shall call
        console.log("called by thunk");
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/api/signinupuser",//uri or end point of singninup api
            {
                method: 'POST', //rest method type to save the data
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObject)
            })//req.body.userName,req.body.password...
        .then (response => response.json()) //response from the server/ api
        .then (userresp => {
            console.log("response ", userresp);

            let action = addUserToStore(userresp);
            dispatch(action); // it will keep the current context to update the user object and takes it to the reducer
            
            //dispatch(loading(false));
            //dispatch(getUserCart(userresp._id));
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })
    }
}