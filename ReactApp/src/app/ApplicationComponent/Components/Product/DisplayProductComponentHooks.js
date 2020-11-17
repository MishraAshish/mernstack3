import React from "react";
import {useSelector, useDispatch} from "react-redux";//another set of hooks to read directly from store and publish
import DisplayDetailsHook from "./DisplayDetailedProductHooks";

import {fetchProducts} from "../../../State/Actions";

let DisplayProductsComponentHooks = () => {
    // //most suited place to make ajax (call to server api to re-render) call
    // componentDidMount(){
    //     console.log("Hello");
    //     this.props.fetchProducts();
    // }
    //let products = this.props.products;

    //below code makes our component a subscriber and state is the data avaible from store eventually reducers
    let products = useSelector((state)=> state.product.products); // connects mapStateToProps

    //below code makes our component a publish and we can dispath our action to retrieve data from store and update as well
    let dispatchFetchProducts = useDispatch(); // connects mapDispatchToProps
    
    products.length < 1 ? dispatchFetchProducts(fetchProducts()) : "";

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