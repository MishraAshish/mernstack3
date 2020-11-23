import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

//Show only Home, User and About for the users not logged in and show all tabs when user logs in so need to render navigations conditionally
const Header = (props)=>{
    let userName = props.user.userName;
    return(
        <React.Fragment>
             Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
                {userName == "" ?<b> Please Login to see other features</b>:""}
            <hr/>
            <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
            <NavLink to="/user" className="button" activeClassName="success" >User </NavLink> 
            {userName ?
            <React.Fragment>
            <NavLink to="/product" className="button" activeClassName="success" >Product </NavLink> 
            <NavLink to="/cart" className="button" activeClassName="success" >Cart </NavLink> 
            <NavLink to="/coupon" className="button" activeClassName="success" >Coupon </NavLink> 
            </React.Fragment> : ""
            }
            <NavLink to="/about" className="button" activeClassName="success">About  </NavLink>
        </React.Fragment>
    )
}

//header component is now a subscriber
let mapStateToProps = (state)=>
{
    return{
        user:state.user.user
    }
}

export default connect(mapStateToProps, null)(Header); //subscriber only component