import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Header = (props)=>{
    return(
        <React.Fragment>
            <h1>{props.user.userName}</h1>
            <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
            <NavLink to="/user" className="button" activeClassName="success" >User </NavLink> 
            <NavLink to="/product" className="button" activeClassName="success" >Product </NavLink> 
            <NavLink to="/cart" className="button" activeClassName="success" >Cart </NavLink> 
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