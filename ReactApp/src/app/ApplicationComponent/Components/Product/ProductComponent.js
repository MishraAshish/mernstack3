import React from "react";
import DisplayProducts from "../../Containers/Product/DisplayProductContainer";

export default class Product extends React.Component {
    constructor(props, context){
        super();

        this.state = {
            name : props.defaultProd.name,
            price : props.defaultProd.price,
            camera : props.defaultProd.camera,
            ram : props.defaultProd.ram,
            display : props.defaultProd.display,
            color : props.defaultProd.color
        }
    }

    captureValueFromTextBoxes = (evt)=>{
        let target = evt.target;
        let classlist = target.classList;

        if(classlist.contains("pname")){
            this.setState({
                name: target.value
            })
        }else if(classlist.contains("price")){
            this.setState({
                price: parseInt(target.value)
            })
        }else if(classlist.contains("camera")){
            this.setState({
                camera: target.value
            })
        }else if(classlist.contains("color")){
            this.setState({
                color: target.value
            })
        }
        else if(classlist.contains("display")){
            this.setState({
                display: target.value
            })
        }
        else{
            this.setState({
                ram: target.value
            })    
        }
    }

    componentWillReceiveProps(nextProps){
        console.log("this - ", nextProps);
        //if (this.props.loading) {
            this.setState({
                name : nextProps.defaultProd.name,
                price : nextProps.defaultProd.price,
                camera : nextProps.defaultProd.camera,
                ram : nextProps.defaultProd.ram,
                display : nextProps.defaultProd.display,
                color : nextProps.defaultProd.color
            })
        //}
    }

    saveProduct = ()=>{
        //saving product using server call
        console.log(this.state);
        this.props.saveProduct(this.state);
    }

    render(){
        return(
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input type="text" className="form-control col-md-6 pname" value={this.state.name} 
                            placeholder="Product Name"
                            onChange={this.captureValueFromTextBoxes} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Price </b>
                        <input type="number" className="form-control col-md-6 price" value={this.state.price} 
                          placeholder="Product Price"
                          onChange={this.captureValueFromTextBoxes} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Camera </b>
                    <input type="text" className="form-control col-md-6 camera" value={this.state.camera} 
                          placeholder="Camera"
                          onChange={this.captureValueFromTextBoxes} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>RAM </b>
                    <input type="text" className="form-control col-md-6 ram" value={this.state.ram} 
                          placeholder="ram"
                          onChange={this.captureValueFromTextBoxes} />
                    </div>

                    <div className="col-md-12">
                        <b>Display </b>
                    <input type="text" className="form-control col-md-6 display" value={this.state.display} 
                          placeholder="Display"
                          onChange={this.captureValueFromTextBoxes} />
                    </div>

                    <div className="col-md-12">
                        <b>Color </b>
                    <input type="text" className="form-control col-md-6 color" value={this.state.color} 
                          placeholder="Color"
                          onChange={this.captureValueFromTextBoxes} />
                    </div>
                    
                    
                    <input type="button" className={"btn btn-primary col-md-3"} value={"Save Product"} onClick={this.saveProduct}/>
                </div>
                
                <br/>
                <hr/>
                <DisplayProducts/>
            </section>
        )
    }

}