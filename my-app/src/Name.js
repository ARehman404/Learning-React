import React from "react";

export default function({ name, removeName }){
    return(
        <>
            <li>{name}</li>
            <button onClick={()=>removeName(name)}>Remove</button>
        </>
    );
}