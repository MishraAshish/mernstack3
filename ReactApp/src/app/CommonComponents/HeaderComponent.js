import React from "react";
import {NavLink} from "react-router-dom";


const Header = ()=>{
    return(
        <React.Fragment>
            <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
            <NavLink to="/user" className="button" activeClassName="success" >Login </NavLink> 
            <NavLink to="/about" className="button" activeClassName="success">About  </NavLink>
        </React.Fragment>
    )
}

export default Header;