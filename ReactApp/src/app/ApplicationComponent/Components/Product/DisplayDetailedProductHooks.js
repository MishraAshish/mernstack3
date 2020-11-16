import React,{ useState } from "react";

let DisplayDetailedProduct = (props)=> {
    let product = props.product;
    // constructor(props, context){
    //     super();
    //     this.state = {
    //         showDetails:false
    //     }
    // }
    // showHideDetails = ()=>{
    //     this.setState({
    //         showDetails: !this.state.showDetails
    //     })
    // }

    //initializing state using useState hook, which eventually returns a function where we can pass the updated state 
    let [showDetails, showHideDetails] = useState(false); //

    let onClick = (evt) =>{
        showHideDetails(!showDetails)
    }

    return(
        <React.Fragment>
            <ul className={"product"}>
                {/* <li onClick={this.showHideDetails}> */}
                <li onClick={onClick}>
                    {product.name}                        
                    {showDetails ?
                    <ul className={"productDetails"}>
                        <li>{product.price}</li>
                        <li>{product.camera}</li>
                        <li>{product.ram}</li>
                        <li>{product.display}</li>
                        <li>{product.color}</li>
                    </ul>
                    :
                    ""}
                </li>
            </ul>
        </React.Fragment>
    )


}

export default DisplayDetailedProduct;