import React from "react";

const person = (props) =>{
    return (
        <div>
            <p onClick={props.click}> im a person? and i{props.name} {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    
    )
};
export default person; 