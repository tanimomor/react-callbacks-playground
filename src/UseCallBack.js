import React, { useCallback } from "react";
import {useState} from "react"
import List from "./List";

function UseCallback() {

    const [number, setNumber] = useState(1);

    const [dark, setDark] = useState(false);

    const getItems = useCallback(()=>{
        return [number, number + 1, number + 2]
    }, [number])

    const centerElement = {display: 'block', margin: '50px auto', textAlign: 'center'};

    const theme = {
        background: dark ? 'black' : 'white',
        color: 'grey'
    }

    return (
        <>
            <div style={{ height:'400px', ...theme}} >
                <input 
                    type="number" 
                    style={centerElement} 
                    onChange={(e)=>{setNumber(parseInt(e.target.value))}}
                />
                <button style={{...centerElement, backgroundColor: 'white'}} onClick={()=>{setDark(!dark)}}>Toggle</button>
                <List numbers={getItems} />
            </div>
        </>
    )
}

export default UseCallback;