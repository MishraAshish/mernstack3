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
            dispatch(getUserCart(userresp._id));
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })
    }
}

// cart actions add, empty, remove and update

export const addItemToCart = (item)=>({
    type: ActionTypes.ADD_ITEM,
    payload: {item} //{item:item}
})

export const emptyTheCart = () => ({
    type: ActionTypes.EMPTY_CART
});

export const updateItem = (id, qty) => ({
    type: ActionTypes.UPDATE_ITEM,
    payload: {
        id,
        qty: parseInt(qty)
    }
});

export const removeItem = (id) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: {
        id
    }
});

export const saveItemsForCheckout = (cart, userid) => {
    console.log("Items To Be Saved", cart); 
    return function(dispatch) {
        window.fetch("http://localhost:9090/api/saveUserCart",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid, cart:cart})})
        .then (response => response.json())
        .then (usercartresponse => {
            console.log("response ", usercartresponse);
            //dispatch(loading(false));
        })
        .catch((err)=>{
            console.log("Error While Saving Cart", err);
        }) 
    }
}

export const getUserCart = (userid) => {
        
    return function(dispatch) {
        console.log("Get List Of items");
        window.fetch("http://localhost:9090/api/getUserCart",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})})
        .then (response => response.json())
        .then (usercartresponse => {
            console.log("response - get user cart ", usercartresponse);
            
            dispatch(emptyTheCart()); //remove the duplicacy first empty the cart 
            
            for (const item of usercartresponse.cart) {
                console.log("item in for of", item);
                let action = addItemToCart(item);
                dispatch(action);    
            }                
                       
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })  
    }       
}