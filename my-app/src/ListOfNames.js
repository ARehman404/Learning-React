import React from "react";
import Name from "./Name";

export default function ListOfNNames(prop){
    const list = prop.list
    
    return(
        <>
            <ol>
                {list.map((name, index) =>(
                    <Name key={index} name={name}/>
                ))}
            </ol>
        </>
    )
}