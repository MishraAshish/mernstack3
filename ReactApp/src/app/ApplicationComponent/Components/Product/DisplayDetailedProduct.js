import React from "react";

export default class DisplayDetailedProduct extends React.Component{
    constructor(props, context){
        super();
        this.state = {
            showDetails:false
        }
    }

    showHideDetails = ()=>{
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render(){
        let product = this.props.product;
        return(
            <React.Fragment>
                <ul className={"product"}>
                    <li onClick={this.showHideDetails}>
                        {product.name}                        
                        {this.state.showDetails ?
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

}