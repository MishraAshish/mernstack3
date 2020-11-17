import React, {useState} from "react";
import {useDispatch} from "react-redux";
import DisplayProductsHooks from "./DisplayProductComponentHooks";

import {saveProduct} from "../../../State/Actions";

let ProductHooks = () => {

    const [name, setName] = useState("Initial Name");
    const [price, setPrice] = useState(0);
    const [camera, setCamera] = useState("Initial Camera");
    const [color, setColor] = useState("Initial Color");
    const [display, setDisplay] = useState("Initial Display");
    const [ram, setRam] = useState("Initial RAM");

    let dispatchToSave = useDispatch();

    let captureValueFromTextBoxes = (evt)=>{
        let target = evt.target;
        let classlist = target.classList;

        if(classlist.contains("pname")){
            setName(target.value)
            // this.setState({
            //     name: target.value
            // })
        }else if(classlist.contains("price")){
            setPrice(target.value);
        }else if(classlist.contains("camera")){
            setCamera(target.value);
        }else if(classlist.contains("color")){
            setColor(target.value);
        }
        else if(classlist.contains("display")){
            setDisplay(target.value);
        }
        else{
            setRam(target.value)
        }
    }

    let saveProductClick = ()=>{
        //saving product using server call
        alert(`You've saved a product with these details: Name = ${name}, Price = $${price}, Camera = ${camera}, Color = ${color},  Display = ${display}, RAM = ${ram}`)
        let productToSave = {
            name, 
            price,
            camera,
            color, 
            display,
            ram
        };
        dispatchToSave(saveProduct(productToSave))
        //this.props.saveProduct(this.state);
    }

    return(
        <section className={"componentClass"}>
            <div className="form col-md-8">
                <div className="col-md-12">
                    <b>Product Name</b>
                    <input type="text" className="form-control col-md-6 pname" value={name} 
                        placeholder="Product Name"
                        onChange={captureValueFromTextBoxes} />
                </div>
                
                <div className="col-md-12">
                    <b>Price </b>
                    <input type="number" className="form-control col-md-6 price" value={price} 
                        placeholder="Product Price"
                        onChange={(evt)=>{setPrice(evt.target.value)}} />
                </div>
                
                <div className="col-md-12">
                    <b>Camera </b>
                <input type="text" className="form-control col-md-6 camera" value={camera} 
                        placeholder="Camera"
                        onChange={captureValueFromTextBoxes} />
                </div>
                
                <div className="col-md-12">
                    <b>RAM </b>
                <input type="text" className="form-control col-md-6 ram" value={ram} 
                        placeholder="ram"
                        onChange={captureValueFromTextBoxes} />
                </div>

                <div className="col-md-12">
                    <b>Display </b>
                <input type="text" className="form-control col-md-6 display" value={display} 
                        placeholder="Display"
                        onChange={captureValueFromTextBoxes} />
                </div>

                <div className="col-md-12">
                    <b>Color </b>
                <input type="text" className="form-control col-md-6 color" value={color} 
                        placeholder="Color"
                        onChange={captureValueFromTextBoxes} />
                </div>
                
                
                <input type="button" className={"btn btn-primary col-md-3"} value={"Save Product"} onClick={saveProductClick}/>
            </div>
            
            <br/>
            <hr/>
            <DisplayProductsHooks />
        </section>
    )
}

export default ProductHooks;