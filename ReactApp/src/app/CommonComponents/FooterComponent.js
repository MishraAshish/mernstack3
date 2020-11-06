import React from "react";

//creating Footer as our functional component
export default function Footer(props, context) {

    return(
        <div className="footer">
            © Copyright 2019 All rights reserved. &nbsp;|&nbsp; <a href="https://www.synergisticit.com/" target="_blank">SynergisticIT</a> &nbsp;|&nbsp; <a href="http://www.synergisticit.com/sitemap.xml" target="_blank">Sitemap</a>
            {/* <h1>{`This is footer component. Received age through props is ${props.age} and Name is ${props.name}`}</h1>
            {
                props.age >= 35 ?
                <React.Fragment>
                    {props.children[0]}
                    {props.children[1]}
                </React.Fragment>
                :            
                props.children[1]
            } */}
        </div>
    )

}