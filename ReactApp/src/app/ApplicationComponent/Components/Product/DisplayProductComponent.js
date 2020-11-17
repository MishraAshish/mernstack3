import React from "react";
import DisplayDetailedProduct from "../Product/DisplayDetailedProduct";

export default class DisplayProductsComponent extends React.Component{

    constructor(props, context){
        super();
    }

    //most suited place to make ajax (call to server api to re-render) call
    componentDidMount(){
        console.log("Hello");
        this.props.fetchProducts();
    }

    render(){
        
        let products = this.props.products;
        return(
            <div>
                {
                    products.length >= 1 ?
                    products.map((product)=>{
                        return <DisplayDetailedProduct product={product} key={product._id}/>;
                    })
                    :
                    <p>No Products to display</p>    
                }
            </div>
        )
    }
}