import React, { useState } from "react";
import Name from "./Name";

export default function ListOfNNames(prop){
    const [list, setList] = useState(prop.list);

    const removeName =  (nameToRemove)=>{
        const tempList = []

        for(let i = 0; i < list.length; i++){
            if(list[i] !== nameToRemove){
                tempList.push(list[i])
            }
        }
        setList(tempList)
    }
    
    return(
        <>
            <h1>List of Names</h1>
            <ol>
                {list.map((name, index) =>(
                    <Name key={index} name={name} removeName={removeName}/>
                ))}
            </ol>
        </>
    )
}