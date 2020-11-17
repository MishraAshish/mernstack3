import React, {useState } from "react";

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
    let [user, changeUserName] = useState({name:"Jack",age:25}); //

    let onClick = (evt) =>{
        showHideDetails(!showDetails);        
        changeUserName({name:"Chris", age:15});
    }

    return(
        <React.Fragment>
            {/* <h5>{user.name +" "+ user.age}</h5> */}
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