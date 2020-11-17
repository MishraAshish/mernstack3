import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";//another set of hooks to read directly from store and publish
import DisplayDetailsHook from "./DisplayDetailedProductHooks";

import {fetchProducts} from "../../../State/Actions";

let DisplayProductsComponentHooks = () => {
    //below code makes our component a subscriber and state is the data avaible from store eventually reducers
    let products = useSelector((state)=> state.product.products); // connects mapStateToProps

    //below code makes our component a publish and we can dispath our action to retrieve data from store and update as well
    let dispatchFetchProducts = useDispatch(); // connects mapDispatchToProps
    
    useEffect(()=>{ //triggered after first render and then subsequent render
        console.log("Use Effect Gets Called a replacement of componentdidmount and componentdidupdate");
        //dispatchFetchProducts(fetchProducts())
        products.length < 1 ? dispatchFetchProducts(fetchProducts()) : "";
    },[])

    return(
        <div>
            {
                products.length >= 1 ?
                products.map((product)=>{
                    return <DisplayDetailsHook product={product} key={product._id}/>;
                })
                :
                <p>No Products to display</p>    
            }
        </div>
    )
}

export default DisplayProductsComponentHooks;