import React from "react";

//creating Footer as our functional component
export default function Footer(props, context) {
    return(
        <div>
            <h1>{`This is footer component. Received age through props is ${props.age} and Name is ${props.name}`}</h1>
            {props.children[0]}
            {props.children[1]}
        </div>
    )   
}