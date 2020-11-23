import React, {useState, useReducer, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";//two new hooks from react-redux library replacing connect method
import {addCoupon} from "../../../State/Actions";

//functional component
let CouponHooks = (props) => {
    
    //reading from user reducer using react-redux hook - useSelector
    //below code allows us the access of any store's state here is 
    let coupon = useSelector((state) => state.coupon.coupon); //inside implements mapStateToProps for one state
    let user = useSelector((state) => state.user.user); //inside implements mapStateToProps for one state

    let dispatchCoupon = useDispatch(); // using this hook to dispatch the addCouponToStore action : publisher
    
    let addCouponClick = ()=>{

        let coupon = Math.ceil(Math.random()*100000); 
        //alert("New Coupn Generated : "+ coupon);
        dispatchCoupon(addCoupon(coupon));
    }
    let dateObj = new Date();
    let [digitalClock, digitalClockUpDate] = useState(dateObj.toLocaleTimeString())

    setInterval(() => {
        let dateObjct = new Date();
        digitalClockUpDate(dateObjct.toLocaleTimeString())
    }, 1000);

    return(
        <section className={"componentClass"}>
            <div className="form col-md-8">
                <div className="col-md-12">
                    <b>Hi, {user.userName != "" ? user.userName: "Tom"}</b>
                    <p>Your Generated Coupon is : </p>
                    <b>{coupon}</b>
                    <h5>{"Digital Clock : " +digitalClock}</h5>
                </div>
                <input type="button" className={"btn btn-primary col-md-2"} value={"Generate"} onClick={addCouponClick}/>
                <input type="button" className={"btn btn-primary col-md-2"} value={"Go To Checkout"} onClick={()=>props.history.push("/checkout")}/>
            </div>
        </section>
    )
}

export default CouponHooks;